import { SELF_CHECK_QUESTIONS } from '../data/TreatmentData.js';

export const CATEGORIES = [
  'male_aga',
  'female_aga',
  'acute_telogen',
  'chronic_telogen',
  'areata',
  'other',
];

// Tie-break order: the first category reaching the top score wins, so a
// pattern that needs ruling out first outranks one that does not. The
// opposite-sex AGA category is left out of each list entirely.
const PRIORITY = {
  男: ['areata', 'acute_telogen', 'male_aga', 'chronic_telogen', 'other'],
  女: ['areata', 'acute_telogen', 'female_aga', 'chronic_telogen', 'other'],
};

const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };

function esc(value) {
  return String(value).replace(/[&<>"]/g, (c) => ESCAPES[c]);
}

/** Questions currently in the flow — `showIf` depends on earlier answers. */
export function visibleQuestions(answers) {
  return SELF_CHECK_QUESTIONS.filter((q) => !q.showIf || q.showIf(answers));
}

/**
 * Add up each option's points per category.
 *
 * Only visible questions count: going back and changing sex can leave an
 * answer behind for a question that is no longer asked, and a stale answer
 * must not feed the score.
 */
export function computeScores(answers) {
  const scores = Object.fromEntries(CATEGORIES.map((c) => [c, 0]));

  for (const question of visibleQuestions(answers)) {
    const answer = answers[question.id];
    if (answer == null) continue;
    for (const label of Array.isArray(answer) ? answer : [answer]) {
      const option = question.options.find((o) => o.label === label);
      if (!option || !option.points) continue;
      for (const [category, points] of Object.entries(option.points)) {
        scores[category] += points;
      }
    }
  }

  return scores;
}

export function topCategory(answers) {
  const scores = computeScores(answers);
  const priority = PRIORITY[answers.q1_gender] ?? PRIORITY['女'];

  let best = priority[0];
  let bestScore = -1;
  for (const category of priority) {
    if (scores[category] > bestScore) {
      bestScore = scores[category];
      best = category;
    }
  }
  return best;
}

/** Everything the question view needs for one step. */
export function questionState(index, answers) {
  const visible = visibleQuestions(answers);
  const question = visible[index];
  if (!question) return null;

  const number = index + 1;
  return {
    question,
    number,
    total: visible.length,
    progress: Math.min(100, Math.round((number / visible.length) * 100)),
    canBack: index > 0,
    isMulti: question.type === 'multi',
  };
}

/**
 * Option markup, shared so the server-rendered first question and every
 * later client render produce exactly the same HTML.
 */
export function optionsHTML(question, selected = []) {
  if (question.type === 'multi') {
    return question.options
      .map((option, i) => {
        const on = selected.includes(option.label);
        return `<button type="button" class="quiz__check${on ? ' is-on' : ''}" data-quiz-toggle="${i}" aria-pressed="${on}"><span class="quiz__check-box" aria-hidden="true"></span><span>${esc(option.label)}</span></button>`;
      })
      .join('\n');
  }

  return question.options
    .map(
      (option, i) =>
        `<button type="button" class="quiz__option" data-quiz-option="${i}">${esc(option.label)}</button>`,
    )
    .join('\n');
}
