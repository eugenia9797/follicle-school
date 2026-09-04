import { FIRST_STEP, RESULT_IDS, questionHTML, resultHTML, stepView } from '../lib/quiz-view.js';

const root = document.getElementById('quiz-root');

if (root) {
  // Question 1 is server-rendered, so the first paint needs no JavaScript and
  // this only takes over from the first answer onwards.
  const state = { stepId: FIRST_STEP, answers: {}, history: [], result: null };

  function render() {
    root.innerHTML = state.result
      ? resultHTML(state.result)
      : questionHTML({
          stepId: state.stepId,
          answers: state.answers,
          historyLength: state.history.length,
        });
    window.scrollTo(0, 0);
  }

  function answer(index) {
    const { options } = stepView(state.stepId, state.answers);
    const option = options[index];
    if (!option) return;

    state.answers = { ...state.answers, [state.stepId]: option.label };

    if (option.result) {
      state.result = option.result;
      render();
      return;
    }

    const next = typeof option.next === 'function' ? option.next(state.answers) : option.next;
    if (RESULT_IDS.has(next)) {
      state.result = next;
      render();
      return;
    }

    state.history = [...state.history, state.stepId];
    state.stepId = next;
    render();
  }

  function back() {
    if (state.history.length === 0) return;
    const history = state.history.slice();
    state.stepId = history.pop();
    state.history = history;
    state.result = null;
    render();
  }

  function restart() {
    state.stepId = FIRST_STEP;
    state.answers = {};
    state.history = [];
    state.result = null;
    render();
  }

  root.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const option = target.closest('[data-quiz-option]');
    if (option) {
      answer(Number(option.dataset.quizOption));
      return;
    }
    if (target.closest('[data-quiz-back]')) back();
    else if (target.closest('[data-quiz-restart]')) restart();
  });
}
