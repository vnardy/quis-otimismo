// Dados do Quiz: Perguntas, categorias e pontuações
const questions = [
  {
    question: "O projeto sob sua responsabilidade foi um grande sucesso.",
    category: "SPs",
    options: [
      { text: "Fiquei atento ao trabalho de todos", score: 1 },
      { text: "Todo mundo investiu muito tempo e energia nele", score: 0 }
    ]
  },
  {
    question: "Você e seu cônjuge (namorado/namorada) fazem as pazes depois de uma briga.",
    category: "SPm",
    options: [
      { text: "Eu o/a perdoei", score: 0 },
      { text: "Costumo perdoar os outros", score: 1 }
    ]
  },
  // Continue adicionando as demais perguntas aqui...
];

// Variáveis do Quiz
let currentQuestionIndex = 0;
let scores = { IPm: 0, IAb: 0, IPs: 0, SPm: 0, SAb: 0, SPs: 0 };

// Elementos HTML
const quizContainer = document.getElementById("quiz");
const nextButton = document.getElementById("next-button");
const resultContainer = document.getElementById("result");
const resultText = document.getElementById("result-text");
const restartButton = document.getElementById("restart-button");

// Função para carregar uma pergunta
function loadQuestion() {
  const questionData = questions[currentQuestionIndex];
  quizContainer.innerHTML = `
    <h2>${questionData.question}</h2>
    ${questionData.options
      .map(
        (option, index) =>
          `<button class="option-button" data-score="${option.score}" data-category="${questionData.category}">
            ${option.text}
          </button>`
      )
      .join("")}
  `;

  // Adicionar evento de clique aos botões
  document.querySelectorAll(".option-button").forEach((button) =>
    button.addEventListener("click", selectOption)
  );
}

// Função para selecionar uma opção
function selectOption(event) {
  const selectedButton = event.target;
  const score = parseInt(selectedButton.dataset.score);
  const category = selectedButton.dataset.category;

  // Adicionar pontuação à categoria correspondente
  scores[category] += score;

  // Carregar próxima pergunta ou mostrar resultado
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// Função para calcular e exibir o resultado final
function showResult() {
  quizContainer.classList.add("hidden");
  nextButton.classList.add("hidden");
  resultContainer.classList.remove("hidden");

  // Calcular Total de I e Total de S
  const totalI = scores.IPm + scores.IAb + scores.IPs;
  const totalS = scores.SPm + scores.SAb + scores.SPs;
  const finalResult = totalS - totalI;

  // Construir o texto de resultado
  const resultSummary = `
    <h2>Resultados:</h2>
    <p>IPm: ${scores.IPm}</p>
    <p>IAb: ${scores.IAb}</p>
    <p>IPs: ${scores.IPs}</p>
    <p>SPm: ${scores.SPm}</p>
    <p>SAb: ${scores.SAb}</p>
    <p>SPs: ${scores.SPs}</p>
    <hr>
    <h3>Cálculos Finais:</h3>
    <p>Total de I: ${totalI}</p>
    <p>Total de S: ${totalS}</p>
    <p>Resultado Final (Total de S - Total de I): ${finalResult}</p>
  `;

  resultText.innerHTML = resultSummary;
}

// Função para reiniciar o quiz
function restartQuiz() {
  currentQuestionIndex = 0;
  scores = { IPm: 0, IAb: 0, IPs: 0, SPm: 0, SAb: 0, SPs: 0 };
  quizContainer.classList.remove("hidden");
  nextButton.classList.remove("hidden");
  resultContainer.classList.add("hidden");
  loadQuestion();
}

// Iniciar o quiz
restartButton.addEventListener("click", restartQuiz);
nextButton.addEventListener("click", () => {
