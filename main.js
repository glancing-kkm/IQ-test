// ───────────────────────────────────────────────
// Mensa Norway Standard IQ Test — 35 Q / 25 min
// ───────────────────────────────────────────────

const TOTAL_QUESTIONS = 35;
const TOTAL_TIME_SEC = 25 * 60;

function svgMatrix(grid) {
  const cells = grid.flat();
  let body = "";
  cells.forEach((cell, i) => {
    const cx = 40 + (i % 3) * 80;
    const cy = 40 + Math.floor(i / 3) * 80;
    const isMissing = cell === "?";
    const fill = isMissing ? "#75777f" : "#1a2b4c";
    const size = isMissing ? 44 : 30;
    const weight = isMissing ? 400 : 500;
    body += `<text x="${cx}" y="${cy}" fill="${fill}" font-size="${size}" font-weight="${weight}" text-anchor="middle" dominant-baseline="central" font-family="Inter, Noto Sans KR, sans-serif">${cell}</text>`;
  });
  return `<svg viewBox="0 0 240 240" class="matrix-svg" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="3x3 matrix puzzle"><g stroke="#c5c6cf" fill="#ffffff" stroke-width="1"><rect x="0.5" y="0.5" width="239" height="239" rx="6"/></g><g stroke="#e0e3e5" stroke-width="1"><line x1="80" y1="6" x2="80" y2="234"/><line x1="160" y1="6" x2="160" y2="234"/><line x1="6" y1="80" x2="234" y2="80"/><line x1="6" y1="160" x2="234" y2="160"/></g>${body}</svg>`;
}

function figText(text) {
  return `<div class="figure num-seq">${text}</div>`;
}

function figMatrix(grid) {
  return `<div class="figure matrix-wrap">${svgMatrix(grid)}</div>`;
}

const questionBank = [
  // === Items 1-7 (Difficulty 1) — Warmup ===
  { domain: "수열 추론", difficulty: 1, prompt: figText("2, 4, 6, 8, ?"),         choices: ["9", "10", "11", "12"], answer: 1 },
  { domain: "도형 패턴", difficulty: 1, prompt: figText("▲ ■ ● ▲ ■ ?"),           choices: ["▲", "■", "●", "◆"], answer: 2 },
  { domain: "수열 추론", difficulty: 1, prompt: figText("3, 6, 9, 12, ?"),        choices: ["13", "14", "15", "16"], answer: 2 },
  { domain: "도형 패턴", difficulty: 1, prompt: figText("↑ → ↓ ← ?"),             choices: ["↑", "→", "↓", "←"], answer: 0 },
  { domain: "도형 패턴", difficulty: 1, prompt: figText("○ , ○○ , ○○○ , ?"),     choices: ["○○", "○○○○", "○○○○○", "○"], answer: 1 },
  { domain: "기호 추론", difficulty: 1, prompt: figText("A, C, E, G, ?"),         choices: ["H", "I", "J", "K"], answer: 1 },
  { domain: "수열 추론", difficulty: 1, prompt: figText("1, 4, 7, 10, ?"),        choices: ["11", "12", "13", "14"], answer: 2 },

  // === Items 8-14 (Difficulty 2) ===
  { domain: "수열 추론", difficulty: 2, prompt: figText("2, 4, 8, 16, ?"),        choices: ["24", "28", "32", "36"], answer: 2 },
  { domain: "수열 추론", difficulty: 2, prompt: figText("1, 4, 9, 16, ?"),        choices: ["20", "23", "25", "36"], answer: 2 },
  { domain: "행렬 추론", difficulty: 2, prompt: figMatrix([
      ["●", "●●", "●●●"],
      ["■", "■■", "■■■"],
      ["▲", "▲▲", "?"]
  ]), choices: ["▲", "▲▲", "▲▲▲", "▲▲▲▲"], answer: 2 },
  { domain: "수열 추론", difficulty: 2, prompt: figText("1, 1, 2, 3, 5, ?"),      choices: ["6", "7", "8", "9"], answer: 2 },
  { domain: "기호 추론", difficulty: 2, prompt: figText("AZ, BY, CX, DW, ?"),      choices: ["EV", "EU", "FX", "GW"], answer: 0 },
  { domain: "수열 추론", difficulty: 2, prompt: figText("1, 2, 4, 7, 11, ?"),     choices: ["14", "15", "16", "17"], answer: 2 },
  { domain: "행렬 추론", difficulty: 2, prompt: figMatrix([
      ["○", "△", "□"],
      ["△", "□", "○"],
      ["□", "○", "?"]
  ]), choices: ["○", "△", "□", "◇"], answer: 1 },

  // === Items 15-22 (Difficulty 3) ===
  { domain: "수열 추론", difficulty: 3, prompt: figText("1, 3, 6, 10, 15, ?"),     choices: ["18", "20", "21", "28"], answer: 2 },
  { domain: "수열 추론", difficulty: 3, prompt: figText("1, 3, 7, 15, 31, ?"),     choices: ["47", "55", "63", "71"], answer: 2 },
  { domain: "행렬 추론", difficulty: 3, prompt: figMatrix([
      ["↑", "→", "↓"],
      ["→", "↓", "←"],
      ["↓", "←", "?"]
  ]), choices: ["↑", "→", "↓", "←"], answer: 0 },
  { domain: "수열 추론", difficulty: 3, prompt: figText("0, 3, 8, 15, 24, ?"),     choices: ["33", "34", "35", "48"], answer: 2 },
  { domain: "수열 추론", difficulty: 3, prompt: figText("2, 5, 11, 23, 47, ?"),    choices: ["91", "93", "95", "97"], answer: 2 },
  { domain: "수열 추론", difficulty: 3, prompt: figText("1, 2, 6, 24, 120, ?"),    choices: ["360", "600", "720", "840"], answer: 2 },
  { domain: "수열 추론", difficulty: 3, prompt: figText("2, 6, 12, 20, 30, ?"),    choices: ["38", "40", "42", "44"], answer: 2 },
  { domain: "행렬 추론", difficulty: 3, prompt: figMatrix([
      ["1", "2", "3"],
      ["2", "4", "6"],
      ["3", "6", "?"]
  ]), choices: ["7", "8", "9", "12"], answer: 2 },

  // === Items 23-29 (Difficulty 4) ===
  { domain: "수열 추론", difficulty: 4, prompt: figText("1, 4, 13, 40, 121, ?"),   choices: ["243", "324", "364", "405"], answer: 2 },
  { domain: "수열 추론", difficulty: 4, prompt: figText("1, 2, 5, 14, 41, ?"),     choices: ["82", "102", "122", "142"], answer: 2 },
  { domain: "수열 추론", difficulty: 4, prompt: figText("1, 3, 2, 6, 4, 12, 8, ?"),choices: ["16", "18", "24", "32"], answer: 2 },
  { domain: "수열 추론", difficulty: 4, prompt: figText("1, 5, 14, 30, 55, ?"),    choices: ["84", "91", "96", "100"], answer: 1 },
  { domain: "수열 추론", difficulty: 4, prompt: figText("3, 8, 15, 24, 35, ?"),    choices: ["44", "46", "48", "50"], answer: 2 },
  { domain: "행렬 추론", difficulty: 4, prompt: figMatrix([
      ["2", "4", "8"],
      ["4", "8", "16"],
      ["8", "16", "?"]
  ]), choices: ["24", "28", "32", "48"], answer: 2 },
  { domain: "수열 추론", difficulty: 4, prompt: figText("1, 8, 27, 64, 125, ?"),   choices: ["196", "200", "216", "256"], answer: 2 },

  // === Items 30-35 (Difficulty 5) ===
  { domain: "수열 추론", difficulty: 5, prompt: figText("2, 3, 5, 8, 13, 21, ?"),  choices: ["29", "31", "34", "39"], answer: 2 },
  { domain: "수열 추론", difficulty: 5, prompt: figText("2, 12, 30, 56, 90, ?"),   choices: ["110", "120", "132", "144"], answer: 2 },
  { domain: "수열 추론", difficulty: 5, prompt: figText("1, 3, 8, 19, 42, ?"),     choices: ["84", "86", "89", "91"], answer: 2 },
  { domain: "수열 추론", difficulty: 5, prompt: figText("1, 4, 10, 22, 46, ?"),    choices: ["90", "92", "94", "96"], answer: 2 },
  { domain: "행렬 추론", difficulty: 5, prompt: figMatrix([
      ["●1", "●2", "●3"],
      ["▲1", "▲2", "▲3"],
      ["■1", "■2", "?"]
  ]), choices: ["■2", "■3", "▲3", "●3"], answer: 1 },
  { domain: "수열 추론", difficulty: 5, prompt: figText("1, 2, 5, 11, 21, 36, ?"), choices: ["49", "53", "57", "62"], answer: 2 }
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
const sessionHeader = document.getElementById("session-header");

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");

const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");
const timerEl = document.getElementById("timer");
const domainBadge = document.getElementById("domain-badge");
const testEyebrow = document.getElementById("test-eyebrow");
const testSub = document.getElementById("test-sub");
const questionText = document.getElementById("question-text");
const choicesWrap = document.getElementById("choices");

const domainDescriptions = {
  "수열 추론": "규칙을 파악해 빈칸에 들어갈 값을 선택하세요.",
  "행렬 추론": "3×3 그리드의 빈 칸에 들어갈 패턴을 선택하세요.",
  "도형 패턴": "패턴에 이어질 도형을 선택하세요.",
  "기호 추론": "규칙에 따른 다음 문자를 선택하세요.",
};

const iqScoreEl = document.getElementById("iq-score");
const iqBandEl = document.getElementById("iq-band");
const percentileEl = document.getElementById("percentile");
const confidenceEl = document.getElementById("confidence");
const subscoresEl = document.getElementById("subscores");
const summaryEl = document.getElementById("summary");
const shareKakaoBtn = document.getElementById("share-kakao-btn");
const shareInstaBtn = document.getElementById("share-insta-btn");
const shareBandBtn = document.getElementById("share-band-btn");
const shareFacebookBtn = document.getElementById("share-facebook-btn");
const shareSaveBtn = document.getElementById("share-save-btn");

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

  if (target === testScreen) {
    sessionHeader.classList.remove("hidden");
  } else {
    sessionHeader.classList.add("hidden");
  }

  if (target === startScreen) {
    progressBar.style.width = "0%";
  } else if (target === resultScreen) {
    progressBar.style.width = "100%";
  }
}

function beginTest() {
  state.selectedQuestions = [
    ...shuffle(questionBank.slice(0, 7)),
    ...shuffle(questionBank.slice(7, 14)),
    ...shuffle(questionBank.slice(14, 22)),
    ...shuffle(questionBank.slice(22, 29)),
    ...shuffle(questionBank.slice(29, 35)),
  ];
  state.answers = Array(TOTAL_QUESTIONS).fill(null);
  state.current = 0;
  state.totalTimeSec = TOTAL_TIME_SEC;
  state.remainingSec = TOTAL_TIME_SEC;

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
  domainBadge.textContent = q.domain;
  testEyebrow.textContent = `난이도 ${q.difficulty}`;
  testSub.textContent = domainDescriptions[q.domain] ?? "다음에 올 답을 선택하세요.";
  questionText.innerHTML = q.prompt;

  choicesWrap.innerHTML = "";
  q.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice";
    button.innerHTML = `<span class="choice-num">${index + 1}</span><span class="choice-content">${choice}</span><span class="choice-check"><span class="material-symbols-outlined">check</span></span>`;

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
  if (iq >= 145) return "최상위 (멘사 자격 수준)";
  if (iq >= 130) return "매우 우수 (상위 2%)";
  if (iq >= 120) return "우수";
  if (iq >= 110) return "평균 이상";
  if (iq >= 90)  return "평균";
  if (iq >= 80)  return "평균 이하";
  return "낮음";
}

function erf(x) {
  const sign = x >= 0 ? 1 : -1;
  const ax = Math.abs(x);
  const t = 1 / (1 + 0.3275911 * ax);
  const y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-ax * ax);
  return sign * y;
}

function topPercentile(iq) {
  const z = (iq - 100) / 15;
  const cdf = 0.5 * (1 + erf(z / Math.SQRT2));
  const top = 100 * (1 - cdf);
  if (top < 1)  return +top.toFixed(2);
  if (top < 10) return +top.toFixed(1);
  return Math.round(top);
}

function calcIQResult() {
  const total = state.selectedQuestions.length;
  const answeredCount = state.answers.filter((v) => v !== null).length;

  const weights = { 1: 1.0, 2: 1.2, 3: 1.5, 4: 1.8, 5: 2.0 };

  let weightedCorrect = 0;
  let weightedTotal = 0;
  const tiers = [
    { name: "쉬움 (1-7)",         correct: 0, total: 0 },
    { name: "기초 (8-14)",        correct: 0, total: 0 },
    { name: "보통 (15-22)",       correct: 0, total: 0 },
    { name: "어려움 (23-29)",     correct: 0, total: 0 },
    { name: "매우 어려움 (30-35)", correct: 0, total: 0 },
  ];

  state.selectedQuestions.forEach((q, idx) => {
    const w = weights[q.difficulty] ?? 1;
    weightedTotal += w;

    const tierIdx = idx < 7 ? 0 : idx < 14 ? 1 : idx < 22 ? 2 : idx < 29 ? 3 : 4;
    tiers[tierIdx].total += 1;

    if (state.answers[idx] === q.answer) {
      weightedCorrect += w;
      tiers[tierIdx].correct += 1;
    }
  });

  const ability = weightedCorrect / weightedTotal;

  const completion = answeredCount / total;
  const completionPenalty = (1 - completion) * 0.08;
  const speedBonus = state.remainingSec > 0
    ? Math.min(0.02, (state.remainingSec / state.totalTimeSec) * 0.04)
    : 0;

  const adjustedAbility = Math.max(0, Math.min(1, ability + speedBonus - completionPenalty));

  const rawIq = Math.round(70 + adjustedAbility * 75);
  const iq = Math.max(70, Math.min(145, rawIq));
  const top = topPercentile(iq);
  const margin = Math.max(3, Math.round(8 - adjustedAbility * 4));

  return {
    iq,
    percentile: top,
    band: getBand(iq),
    confidenceLow: Math.max(60, iq - margin),
    confidenceHigh: Math.min(160, iq + margin),
    answeredCount,
    total,
    tiers,
  };
}

function renderResult(result, autoSubmitted) {
  iqScoreEl.textContent = String(result.iq);
  iqBandEl.textContent = result.band;
  percentileEl.textContent = `${result.percentile}%`;
  confidenceEl.textContent = `신뢰구간 ${result.confidenceLow} - ${result.confidenceHigh}`;

  subscoresEl.innerHTML = "";
  result.tiers.forEach((tier) => {
    const pct = tier.total ? Math.round((tier.correct / tier.total) * 100) : 0;
    const row = document.createElement("div");
    row.className = "subscore";
    row.innerHTML = `<span>${tier.name}</span><strong>${tier.correct} / ${tier.total} (${pct}%)</strong>`;
    subscoresEl.appendChild(row);
  });

  const timeoutText = autoSubmitted ? "제한시간 종료로 자동 제출되었습니다. " : "";
  summaryEl.textContent = `${timeoutText}응답 ${result.answeredCount}/${result.total}. Mensa Norway 표준(35문항·25분)에 따라 가중치 채점된 추정값이며, 공식 검사 대체용이 아닙니다.`;

  wireShareButtons(result);
}

function getSharePayload(result) {
  const landingUrl = new URL(window.location.href);
  landingUrl.searchParams.set("from", "sns_share");
  landingUrl.searchParams.set("entry", "iq_test");
  landingUrl.hash = "start-screen";

  const shareUrl = landingUrl.toString();
  const shareText = `내 추정 IQ는 ${result.iq} (${result.band}, 상위 ${result.percentile}%)! 너도 테스트해봐.`;

  return { shareUrl, shareText };
}

function openShareWindow(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}

function wireShareButtons(result) {
  const { shareUrl, shareText } = getSharePayload(result);
  const encodedText = encodeURIComponent(shareText);
  const encodedUrl = encodeURIComponent(shareUrl);

  async function nativeShare() {
    if (navigator.share) {
      try {
        await navigator.share({ title: "IQ 테스트 결과", text: shareText, url: shareUrl });
        return true;
      } catch (err) {
        return false;
      }
    }
    return false;
  }

  shareKakaoBtn.onclick = async () => {
    const shared = await nativeShare();
    if (!shared) {
      try {
        await navigator.clipboard.writeText(shareText + "\n" + shareUrl);
        shareKakaoBtn.textContent = "링크 복사됨";
        setTimeout(() => { shareKakaoBtn.textContent = "카카오"; }, 1400);
      } catch (err) { /* noop */ }
    }
  };

  shareInstaBtn.onclick = async () => {
    const shared = await nativeShare();
    if (!shared) {
      try {
        await navigator.clipboard.writeText(shareText + "\n" + shareUrl);
        shareInstaBtn.textContent = "링크 복사됨";
        setTimeout(() => { shareInstaBtn.textContent = "인스타"; }, 1400);
      } catch (err) { /* noop */ }
    }
  };

  shareBandBtn.onclick = () => {
    openShareWindow(`https://band.us/plugin/share?body=${encodedText}%0A${encodedUrl}&route=${encodedUrl}`);
  };

  shareFacebookBtn.onclick = () => {
    openShareWindow(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`);
  };

  shareSaveBtn.onclick = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 900;
    canvas.height = 500;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "#c5c6cf";
    ctx.lineWidth = 1;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);

    ctx.fillStyle = "#1a2b4c";
    ctx.fillRect(20, 20, canvas.width - 40, 6);

    ctx.fillStyle = "#44474e";
    ctx.font = "600 18px 'Inter', 'Noto Sans KR', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("COGNITIUM · MENSA-STYLE ASSESSMENT", canvas.width / 2, 80);

    ctx.fillStyle = "#75777f";
    ctx.font = "500 14px 'Inter', sans-serif";
    ctx.fillText("ESTIMATED IQ", canvas.width / 2, 130);

    ctx.fillStyle = "#1a2b4c";
    ctx.font = "700 140px 'Playfair Display', 'Noto Serif KR', serif";
    ctx.fillText(String(result.iq), canvas.width / 2, 270);

    ctx.fillStyle = "#181c1e";
    ctx.font = "600 24px 'Inter', 'Noto Sans KR', sans-serif";
    ctx.fillText(result.band, canvas.width / 2, 320);

    ctx.fillStyle = "#44474e";
    ctx.font = "500 20px 'Inter', sans-serif";
    ctx.fillText(`상위 ${result.percentile}%`, canvas.width / 2, 360);

    ctx.fillStyle = "#75777f";
    ctx.font = "400 14px 'Inter', sans-serif";
    ctx.fillText(shareUrl, canvas.width / 2, 450);

    canvas.toBlob((blob) => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `cognitium-iq-${result.iq}.png`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 5000);
    }, "image/png");
  };
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

// ── Mobile: scroll active question into view after orientation change ──
function scrollToActivePanel() {
  const visiblePanel = [startScreen, testScreen, resultScreen].find(
    (el) => !el.classList.contains("hidden")
  );
  if (visiblePanel) {
    visiblePanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

if (window.screen?.orientation) {
  window.screen.orientation.addEventListener("change", scrollToActivePanel);
} else {
  window.addEventListener("orientationchange", scrollToActivePanel);
}
