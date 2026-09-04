import { QUIZ_RESULTS, QUIZ_STEPS } from '../data/TreatmentData.js';

export const FIRST_STEP = 'q_gender';

// Total questions used for the progress bar, matching the original design.
const ESTIMATED_STEPS = 10;

export const RESULT_IDS = new Set([
  'RESULT_TELOGEN',
  'RESULT_AREATA',
  'RESULT_MALE_AGA',
  'RESULT_FEMALE_AGA',
]);

const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };

function esc(value) {
  return String(value).replace(/[&<>"]/g, (c) => ESCAPES[c]);
}

/**
 * Resolve the question text and options for a step. Some steps branch on the
 * answer to `q_gender` rather than carrying a single option list.
 */
export function stepView(stepId, answers) {
  const step = QUIZ_STEPS[stepId];
  let text = step.text;
  let options = step.options;
  if (!options) {
    const isMale = answers.q_gender === '男性';
    options = isMale ? step.optionsMale : step.optionsFemale;
    if (step.textMale) text = isMale ? step.textMale : step.textFemale;
  }
  return { text, options };
}

export function questionHTML({ stepId, answers, historyLength }) {
  const { text, options } = stepView(stepId, answers);
  const number = historyLength + 1;
  const progress = Math.min(100, Math.round((number / ESTIMATED_STEPS) * 100));
  const back =
    historyLength > 0
      ? '<button type="button" class="quiz__back" data-quiz-back>← 上一題</button>'
      : '';

  return `<div class="quiz__top">
  <span class="quiz__step">第 ${number} 題</span>
  ${back}
</div>
<div class="quiz__bar"><span style="width:${progress}%"></span></div>
<p class="quiz__question">${esc(text)}</p>
<div class="quiz__options">
  ${options
    .map(
      (option, i) =>
        `<button type="button" class="quiz__option" data-quiz-option="${i}">${esc(option.label)}</button>`,
    )
    .join('\n  ')}
</div>`;
}

export function resultHTML(resultId) {
  const result = QUIZ_RESULTS[resultId];
  const isAga = result.tone === 'aga';
  const href = result.gender === 'male' ? '/aga/male/' : '/aga/female/';
  const label =
    result.gender === 'male' ? '查看男性雄性禿完整衛教內容' : '查看女性雄性禿完整衛教內容';
  const cta = isAga
    ? `<a class="btn btn--block" href="${href}" style="margin-bottom:12px;">${label}</a>`
    : '';

  return `<div class="quiz__result">
  <p class="quiz__result-eyebrow">檢測結果</p>
  <p class="quiz__result-title">${esc(result.title)}</p>
  <p class="quiz__result-desc">${esc(result.desc)}</p>
  ${cta}
  <div class="quiz__result-actions">
    <button type="button" class="btn btn--ghost" data-quiz-restart>重新測驗</button>
    <a class="btn btn--ghost" href="/">返回首頁</a>
  </div>
  <p class="quiz__result-foot">此檢測僅供初步參考，不能取代醫師之當面診斷。</p>
</div>`;
}
