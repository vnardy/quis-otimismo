let currentQuestion = 0;

const questions = [
    {
        question: "O projeto sob sua responsabilidade foi um grande sucesso?",
        options: ["Fiquei atento ao trabalho de todos", "Todo mundo investiu muito tempo e energia nele"],
        category: "SPs",
        points: [1, 0],
    },
    {
        question: "Você e seu cônjuge fazem as pazes depois de uma briga?",
        options: ["Eu o/a perdoei", "Costumo perdoar os outros"],
        category: "SPm",
        points: [0, 1],
    },
    // Adicione as outras perguntas de forma semelhante
];

const btnNext = document.getElementById("btnNext");

btnNext.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion(currentQuestion);
    } else {
        alert("Fim do Quiz!");
    }
});

function showQuestion(index) {
    const question = questions[index];
    document.getElementById("question").textContent = question.question;
    document.getElementById("optionA").textContent = question.options[0];
    document.getElementById("optionB").textContent = question.options[1];

    // Resetando o estado dos botões de resposta
    document.getElementById("optionA").onclick = () => handleAnswer(0);
    document.getElementById("optionB").onclick = () => handleAnswer(1);
}

function handleAnswer(optionIndex) {
    const points = questions[currentQuestion].points[optionIndex];
    // Aqui você pode armazenar os pontos e outras informações
    console.log(`Pontuação: ${points}`);
}

showQuestion(currentQuestion);
