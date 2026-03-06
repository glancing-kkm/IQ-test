const questionBank = [
  { domain: "수리 추론", difficulty: 1, prompt: "수열 2, 4, 8, 16, ?", choices: ["18", "24", "32", "34"], answer: 2 },
  { domain: "수리 추론", difficulty: 2, prompt: "수열 3, 6, 12, 24, ?", choices: ["36", "42", "48", "54"], answer: 2 },
  { domain: "수리 추론", difficulty: 2, prompt: "수열 5, 9, 17, 33, ?", choices: ["49", "57", "65", "69"], answer: 2 },
  { domain: "수리 추론", difficulty: 3, prompt: "수열 1, 4, 9, 16, 25, ?", choices: ["30", "34", "36", "49"], answer: 2 },
  { domain: "수리 추론", difficulty: 3, prompt: "수열 7, 10, 16, 25, 37, ?", choices: ["50", "52", "54", "56"], answer: 2 },
  { domain: "수리 추론", difficulty: 4, prompt: "수열 81, 27, 9, 3, ?", choices: ["1", "0", "-1", "3"], answer: 0 },
  { domain: "수리 추론", difficulty: 3, prompt: "수열 11, 13, 17, 23, 31, ?", choices: ["35", "37", "39", "41"], answer: 1 },
  { domain: "수리 추론", difficulty: 4, prompt: "수열 2, 6, 12, 20, 30, ?", choices: ["36", "40", "42", "44"], answer: 2 },
  { domain: "수리 추론", difficulty: 4, prompt: "수열 4, 6, 9, 13, 18, ?", choices: ["22", "24", "25", "27"], answer: 1 },
  { domain: "수리 추론", difficulty: 5, prompt: "수열 3, 5, 11, 21, 43, ?", choices: ["65", "75", "85", "87"], answer: 2 },
  { domain: "수리 추론", difficulty: 2, prompt: "48의 25%는?", choices: ["10", "12", "14", "16"], answer: 1 },
  { domain: "수리 추론", difficulty: 3, prompt: "어떤 수 x에 대해 3x + 5 = 26일 때 x는?", choices: ["6", "7", "8", "9"], answer: 1 },

  { domain: "언어 추론", difficulty: 1, prompt: "'책'과 가장 가까운 관계: '연필'은?", choices: ["쓰기", "지우개", "종이", "공부"], answer: 2 },
  { domain: "언어 추론", difficulty: 2, prompt: "의미가 가장 가까운 단어: '간결한'", choices: ["복잡한", "짧고 명료한", "화려한", "느린"], answer: 1 },
  { domain: "언어 추론", difficulty: 2, prompt: "반의어가 되는 단어: '확장'", choices: ["증가", "발전", "축소", "개선"], answer: 2 },
  { domain: "언어 추론", difficulty: 3, prompt: "관계 추론: '의사 : 병원 = 교사 : ?'", choices: ["교실", "학생", "학교", "칠판"], answer: 2 },
  { domain: "언어 추론", difficulty: 3, prompt: "관계 추론: '심장 : 혈액 = 펌프 : ?'", choices: ["물", "전기", "공기", "기름"], answer: 0 },
  { domain: "언어 추론", difficulty: 3, prompt: "문맥상 가장 자연스러운 단어: '그의 판단은 매우 ___ 해서 실수가 적었다.'", choices: ["충동적", "신중", "경솔", "난해"], answer: 1 },
  { domain: "언어 추론", difficulty: 4, prompt: "유추: '씨앗 : 나무 = 아이디어 : ?'", choices: ["회의", "문장", "혁신", "기억"], answer: 2 },
  { domain: "언어 추론", difficulty: 4, prompt: "의미가 가장 가까운 단어: '타당한'", choices: ["엉뚱한", "논리적인", "감정적인", "임시적인"], answer: 1 },
  { domain: "언어 추론", difficulty: 5, prompt: "관계 추론: '법 : 질서 = 문법 : ?'", choices: ["단어", "의미", "문장", "표현"], answer: 2 },
  { domain: "언어 추론", difficulty: 2, prompt: "가장 적절한 속담 의미: '등잔 밑이 어둡다'", choices: ["빛이 중요하다", "가까운 것을 놓치기 쉽다", "밤이 위험하다", "작은 것이 소중하다"], answer: 1 },
  { domain: "언어 추론", difficulty: 3, prompt: "다음 중 범주가 다른 하나는?", choices: ["피아노", "바이올린", "플루트", "캔버스"], answer: 3 },
  { domain: "언어 추론", difficulty: 4, prompt: "논리적으로 가장 타당한 결론: '모든 A는 B이고, 일부 B는 C다.'", choices: ["모든 A는 C다", "일부 A는 C다", "A와 C는 무관할 수 있다", "모든 C는 A다"], answer: 2 },

  { domain: "논리/도형 추론", difficulty: 1, prompt: "패턴: ▲ ■ ▲ ■ ▲ ?", choices: ["▲", "■", "●", "◆"], answer: 1 },
  { domain: "논리/도형 추론", difficulty: 2, prompt: "패턴: ○, ○○, ○○○, ?", choices: ["○○", "○○○○", "○○○○○", "○"], answer: 1 },
  { domain: "논리/도형 추론", difficulty: 2, prompt: "규칙: 2단계마다 방향이 반전된다. ↑ ↑ ↓ ↓ ↑ ↑ ?", choices: ["↑", "↓", "←", "→"], answer: 1 },
  { domain: "논리/도형 추론", difficulty: 3, prompt: "A>B, B>C일 때 항상 참인 것은?", choices: ["C>A", "A>C", "B<A", "C>B"], answer: 1 },
  { domain: "논리/도형 추론", difficulty: 3, prompt: "모든 X는 Y. 어떤 Y는 Z. 반드시 참인 것은?", choices: ["모든 X는 Z", "어떤 X는 Z", "X와 Z의 관계는 확정 불가", "모든 Z는 X"], answer: 2 },
  { domain: "논리/도형 추론", difficulty: 4, prompt: "세 도형 회전 규칙(90도 시계방향 반복)에서 4번째 위치는? [↑, →, ↓, ?]", choices: ["←", "↑", "→", "↓"], answer: 0 },
  { domain: "논리/도형 추론", difficulty: 4, prompt: "집합 추론: 모든 원은 도형, 모든 삼각형도 도형. 올바른 결론은?", choices: ["모든 도형은 원", "원과 삼각형은 모두 도형", "삼각형은 원의 부분집합", "도형은 삼각형뿐"], answer: 1 },
  { domain: "논리/도형 추론", difficulty: 4, prompt: "규칙: 이전 두 수의 합에서 1을 뺀다. 2, 3, 4, 6, 9, ?", choices: ["12", "13", "14", "15"], answer: 2 },
  { domain: "논리/도형 추론", difficulty: 5, prompt: "명제: 'p이면 q'가 거짓이 되려면?", choices: ["p 거짓, q 참", "p 참, q 거짓", "p 거짓, q 거짓", "p 참, q 참"], answer: 1 },
  { domain: "논리/도형 추론", difficulty: 5, prompt: "두 명제 모두 참: '모든 M은 N', '어떤 N은 P'. 타당한 판단은?", choices: ["어떤 M은 P", "모든 P는 M", "M과 P 연결은 필수 아님", "모든 N은 M"], answer: 2 },
  { domain: "논리/도형 추론", difficulty: 3, prompt: "도형 패턴: □, △, ○, □, △, ?", choices: ["○", "□", "△", "◇"], answer: 0 },
  { domain: "논리/도형 추론", difficulty: 5, prompt: "수열 규칙: 각 항은 직전 항에 2를 곱하고 1을 더한다. 1, 3, 7, 15, ?", choices: ["29", "30", "31", "33"], answer: 2 }
];

const state = {
  selectedQuestions: [],
  answers: [],
  current: 0,
  totalTimeSec: 0,
  remainingSec: 0,
  timerId: null,
};

const startScreen = document.getElementById("start-screen");
const testScreen = document.getElementById("test-screen");
const resultScreen = document.getElementById("result-screen");

const questionCountEl = document.getElementById("question-count");
const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");

const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");
const timerEl = document.getElementById("timer");
const domainBadge = document.getElementById("domain-badge");
const questionText = document.getElementById("question-text");
const choicesWrap = document.getElementById("choices");

const iqScoreEl = document.getElementById("iq-score");
const iqBandEl = document.getElementById("iq-band");
const percentileEl = document.getElementById("percentile");
const confidenceEl = document.getElementById("confidence");
const subscoresEl = document.getElementById("subscores");
const summaryEl = document.getElementById("summary");

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function formatTime(totalSec) {
  const min = Math.floor(totalSec / 60);
  const sec = totalSec % 60;
  return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

function setScreen(target) {
  startScreen.classList.add("hidden");
  testScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  target.classList.remove("hidden");
}

function beginTest() {
  const count = Number(questionCountEl.value);
  state.selectedQuestions = shuffle(questionBank).slice(0, count);
  state.answers = Array(count).fill(null);
  state.current = 0;
  state.totalTimeSec = count * 60;
  state.remainingSec = state.totalTimeSec;

  if (state.timerId) {
    clearInterval(state.timerId);
  }

  state.timerId = setInterval(() => {
    state.remainingSec -= 1;
    timerEl.textContent = formatTime(Math.max(0, state.remainingSec));

    if (state.remainingSec <= 0) {
      clearInterval(state.timerId);
      finishTest(true);
    }
  }, 1000);

  timerEl.textContent = formatTime(state.remainingSec);
  setScreen(testScreen);
  renderQuestion();
}

function renderQuestion() {
  const q = state.selectedQuestions[state.current];
  const answered = state.answers[state.current];
  const total = state.selectedQuestions.length;

  progressText.textContent = `문항 ${state.current + 1} / ${total}`;
  progressBar.style.width = `${((state.current + 1) / total) * 100}%`;
  domainBadge.textContent = `${q.domain} | 난이도 ${q.difficulty}`;
  questionText.textContent = q.prompt;

  choicesWrap.innerHTML = "";
  q.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice";
    button.textContent = `${String.fromCharCode(65 + index)}. ${choice}`;

    if (answered === index) {
      button.classList.add("selected");
    }

    button.addEventListener("click", () => {
      state.answers[state.current] = index;
      renderQuestion();
    });

    choicesWrap.appendChild(button);
  });

  prevBtn.disabled = state.current === 0;
  nextBtn.disabled = state.current === total - 1;
}

function getBand(iq) {
  if (iq >= 130) return "매우 우수";
  if (iq >= 120) return "우수";
  if (iq >= 110) return "평균 이상";
  if (iq >= 90) return "평균";
  if (iq >= 80) return "평균 이하";
  return "낮음";
}

function calcIQResult() {
  const total = state.selectedQuestions.length;
  const answeredCount = state.answers.filter((v) => v !== null).length;

  let weightedCorrect = 0;
  let weightedTotal = 0;

  const domains = {
    "수리 추론": { correct: 0, total: 0 },
    "언어 추론": { correct: 0, total: 0 },
    "논리/도형 추론": { correct: 0, total: 0 },
  };

  state.selectedQuestions.forEach((q, idx) => {
    const weight = 1 + (q.difficulty - 1) * 0.25;
    weightedTotal += weight;

    if (state.answers[idx] === q.answer) {
      weightedCorrect += weight;
      domains[q.domain].correct += 1;
    }

    domains[q.domain].total += 1;
  });

  const ability = weightedCorrect / weightedTotal;
  const unansweredPenalty = (total - answeredCount) / total;
  const speedRatio = state.remainingSec / state.totalTimeSec;

  const speedBonus = Math.max(-0.03, Math.min(0.04, speedRatio * 0.08 - 0.02));
  const adjustedAbility = Math.max(0, Math.min(1, ability + speedBonus - unansweredPenalty * 0.1));

  const iq = Math.round(70 + adjustedAbility * 75);
  const boundedIQ = Math.max(70, Math.min(145, iq));

  const percentile = Math.max(1, Math.min(99, Math.round((boundedIQ - 55) / 0.9)));

  const margin = Math.max(4, Math.round(10 - ability * 6));

  return {
    iq: boundedIQ,
    percentile,
    band: getBand(boundedIQ),
    confidenceLow: boundedIQ - margin,
    confidenceHigh: boundedIQ + margin,
    answeredCount,
    total,
    domains,
  };
}

function renderResult(result, autoSubmitted) {
  iqScoreEl.textContent = String(result.iq);
  iqBandEl.textContent = result.band;
  percentileEl.textContent = `${result.percentile}%`;
  confidenceEl.textContent = `신뢰구간(추정): ${result.confidenceLow} - ${result.confidenceHigh}`;

  subscoresEl.innerHTML = "";
  Object.entries(result.domains).forEach(([name, data]) => {
    const score = data.total ? Math.round((data.correct / data.total) * 100) : 0;
    const scaled = Math.round(70 + score * 0.75);

    const row = document.createElement("div");
    row.className = "subscore";
    row.innerHTML = `<span>${name}</span><strong>${scaled} (${data.correct}/${data.total})</strong>`;
    subscoresEl.appendChild(row);
  });

  const timeoutText = autoSubmitted ? "제한시간 종료로 자동 제출되었습니다. " : "";
  summaryEl.textContent = `${timeoutText}응답 문항 ${result.answeredCount}/${result.total}. 높은 정확도를 위해 동일한 환경에서 2~3회 반복 측정 후 평균을 권장합니다.`;
}

function finishTest(autoSubmitted = false) {
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
  }

  const result = calcIQResult();
  renderResult(result, autoSubmitted);
  setScreen(resultScreen);
}

startBtn.addEventListener("click", beginTest);
restartBtn.addEventListener("click", () => setScreen(startScreen));
prevBtn.addEventListener("click", () => {
  if (state.current > 0) {
    state.current -= 1;
    renderQuestion();
  }
});
nextBtn.addEventListener("click", () => {
  if (state.current < state.selectedQuestions.length - 1) {
    state.current += 1;
    renderQuestion();
  }
});
submitBtn.addEventListener("click", () => finishTest(false));
