import { optionsHTML, questionState, topCategory, visibleQuestions } from '../lib/quiz.js';

const view = document.getElementById('quiz-question');
const result = document.getElementById('quiz-result');

if (view && result) {
  const stepLabel = view.querySelector('[data-quiz-step]');
  const backButton = view.querySelector('[data-quiz-back]');
  const mascot = view.querySelector('[data-quiz-mascot]');
  const bar = view.querySelector('[data-quiz-bar]');
  const barFill = bar.querySelector('span');
  const text = view.querySelector('[data-quiz-text]');
  const optionList = view.querySelector('[data-quiz-options]');
  const multiNext = view.querySelector('[data-quiz-multi-next]');

  // index walks the visible questions; answers keys by question id, holding a
  // string for single-choice and an array for multi-choice. multiSelection is
  // the not-yet-confirmed checkbox state for the current multi question.
  const state = { index: 0, answers: {}, multiSelection: [] };

  function currentQuestion() {
    return visibleQuestions(state.answers)[state.index];
  }

  function render() {
    const step = questionState(state.index, state.answers);

    if (!step) {
      showResult();
      return;
    }

    // Re-entering a multi question (via back, or restart) restores what was
    // already answered, so navigating away and back does not silently drop it.
    // render() never runs while ticking boxes, so this cannot undo a change.
    const saved = state.answers[step.question.id];
    state.multiSelection = step.isMulti && Array.isArray(saved) ? [...saved] : [];

    stepLabel.textContent = `第 ${step.number} 題`;
    backButton.hidden = !step.canBack;
    // The mascot keeps its DOM node across renders so its CSS transition
    // animates the walk from one question to the next.
    mascot.style.left = `${step.progress}%`;
    barFill.style.width = `${step.progress}%`;
    bar.setAttribute('aria-valuenow', String(step.progress));
    text.textContent = step.question.text;
    optionList.classList.toggle('quiz__options--multi', step.isMulti);
    optionList.innerHTML = optionsHTML(step.question, state.multiSelection);
    multiNext.hidden = !step.isMulti;
  }

  function showResult() {
    const category = topCategory(state.answers);
    for (const block of result.querySelectorAll('[data-quiz-result]')) {
      block.hidden = block.dataset.quizResult !== category;
    }
    view.hidden = true;
    result.hidden = false;
    window.scrollTo(0, 0);
    result.focus();
  }

  function answerSingle(optionIndex) {
    const question = currentQuestion();
    const option = question.options[optionIndex];
    if (!option) return;
    state.answers = { ...state.answers, [question.id]: option.label };
    state.index += 1;
    render();
  }

  function toggleMulti(optionIndex) {
    const question = currentQuestion();
    const label = question.options[optionIndex]?.label;
    if (label == null) return;
    state.multiSelection = state.multiSelection.includes(label)
      ? state.multiSelection.filter((l) => l !== label)
      : [...state.multiSelection, label];
    optionList.innerHTML = optionsHTML(question, state.multiSelection);
  }

  function confirmMulti() {
    const question = currentQuestion();
    state.answers = { ...state.answers, [question.id]: state.multiSelection };
    state.index += 1;
    render();
  }

  function back() {
    if (state.index === 0) return;
    state.index -= 1;
    render();
  }

  function restart() {
    state.index = 0;
    state.answers = {};
    result.hidden = true;
    view.hidden = false;
    render();
    window.scrollTo(0, 0);
  }

  optionList.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const single = target.closest('[data-quiz-option]');
    if (single) {
      answerSingle(Number(single.dataset.quizOption));
      return;
    }
    const multi = target.closest('[data-quiz-toggle]');
    if (multi) toggleMulti(Number(multi.dataset.quizToggle));
  });

  multiNext.addEventListener('click', confirmMulti);
  backButton.addEventListener('click', back);
  result.querySelector('[data-quiz-restart]')?.addEventListener('click', restart);
}
