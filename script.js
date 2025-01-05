const questions = [
    // Pergunta 1
    {
        question: "O projeto sob sua responsabilidade foi um grande sucesso.",
        options: ["Fiquei atento ao trabalho de todos", "Todo mundo investiu muito tempo e energia nele"],
        answers: [1, 0], // Pontuação das respostas A e B
        category: "SPs"
    },
    // Pergunta 2
    {
        question: "Você e seu cônjuge (namorado/namorada) fazem as pazes depois de uma briga.",
        options: ["Eu o/a perdoei", "Costumo perdoar os outros"],
        answers: [0, 1],
        category: "SPm"
    },
    // Pergunta 3
    {
        question: "Você se perde dirigindo para a casa de um amigo.",
        options: ["Entrei na rua errada", "Meu amigo me indicou o caminho errado"],
        answers: [1, 0],
        category: "IPs"
    },
    // Pergunta 4
    {
        question: "Seu cônjuge (namorado/namorada) lhe dá um presente de surpresa.",
        options: ["Ele/Ela acabou de ganhar um aumento", "Eu o/a convidei para um jantar especial na véspera"],
        answers: [0, 1],
        category: "SPs"
    },
    // Pergunta 5
    {
        question: "Você se esqueceu do aniversário do cônjuge (namorado/namorada).",
        options: ["Não sou bom em lembrar datas", "Estava preocupado com outras coisas"],
        answers: [1, 0],
        category: "IPm"
    },
    // Pergunta 6
    {
        question: "Você ganha flores de um admirador secreto.",
        options: ["Ele/Ela me acha atraente", "Sou uma pessoa popular"],
        answers: [0, 1],
        category: "SAb"
    },
    // Pergunta 7
    {
        question: "Você concorre a um cargo público e vence.",
        options: ["Dediquei muito tempo e energia à campanha", "Sempre trabalho duro"],
        answers: [0, 1],
        category: "SAb"
    },
    // Pergunta 8
    {
        question: "Você perde um compromisso importante.",
        options: ["Às vezes a minha memória falha", "Às vezes esqueço de olhar minha agenda"],
        answers: [1, 0],
        category: "IAb"
    },
    // Pergunta 9
    {
        question: "Você concorre a um cargo público e perde.",
        options: ["Não me dediquei o suficiente à campanha", "A pessoa que ganhou conhecia mais gente"],
        answers: [1, 0],
        category: "IPs"
    },
    // Pergunta 10
    {
        question: "Você oferece um jantar que foi um sucesso.",
        options: ["Eu me superei na simpatia naquela noite", "Sou um bom anfitrião"],
        answers: [0, 1],
        category: "SPm"
    },
    // Pergunta 11
    {
        question: "Você impede um crime ligando para a polícia.",
        options: ["Um barulho estranho chamou a minha atenção", "Naquele dia eu estava em estado de alerta"],
        answers: [0, 1],
        category: "SPs"
    },
    // Pergunta 12
    {
        question: "Você passou o ano inteiro extremamente saudável.",
        options: ["Como poucas pessoas ao meu redor adoeceram, não fui exposto", "Fiz questão de comer bem e descansar bastante"],
        answers: [0, 1],
        category: "SPs"
    },
    // Pergunta 13
    {
        question: "Você tem uma multa para pagar na biblioteca por ter atrasado a devolução de um livro.",
        options: ["Quando estou muito envolvido com a leitura, me esqueço do prazo", "Eu estava tão absorto em escrever o relatório que me esqueci de devolver o livro"],
        answers: [1, 0],
        category: "IPm"
    },
    // Pergunta 14
    {
        question: "Você ganha muito dinheiro no mercado de ações.",
        options: ["Meu corretor decidiu arriscar em algo novo", "Meu corretor é um excelente investidor"],
        answers: [0, 1],
        category: "SPm"
    },
    // Pergunta 15
    {
        question: "Você vence uma competição esportiva.",
        options: ["Estava me sentindo imbatível", "Eu treino muito"],
        answers: [0, 1],
        category: "SPm"
    },
    // Pergunta 16
    {
        question: "Você se saiu mal numa prova importante.",
        options: ["Não sou tão inteligente quanto as outras pessoas que fizeram a prova", "Não me preparei muito bem"],
        answers: [1, 0],
        category: "IAb"
    },
    // Pergunta 17
    {
        question: "Você preparou uma refeição especial para um amigo, mas ele mal tocou na comida.",
        options: ["Não sou um bom cozinheiro", "Fiz a comida às pressas"],
        answers: [1, 0],
        category: "IAb"
    },
    // Pergunta 18
    {
        question: "Você perdeu uma partida para a qual vinha treinando há muito tempo.",
        options: ["Não sou muito atlético", "Não sou muito bom nesse esporte"],
        answers: [1, 0],
        category: "IAb"
    },
    // Pergunta 19
    {
        question: "O combustível do seu carro acaba numa rua escura tarde da noite.",
        options: ["Não verifiquei quanto combustível ainda tinha no tanque", "O indicador de combustível estava quebrado"],
        answers: [1, 0],
        category: "IPs"
    },
    // Pergunta 20
    {
        question: "Você perde a paciência com um amigo.",
        options: ["Ele/Ela vive me irritando", "Ele/Ela estava de mau humor"],
        answers: [1, 0],
        category: "IPm"
    },
    // Pergunta 21
    {
        question: "Você é multado por não declarar o imposto de renda dentro do prazo.",
        options: ["Sempre deixo a declaração para a última hora", "Tive preguiça de fazer a minha declaração este ano"],
        answers: [1, 0],
        category: "IPm"
    },
    // Pergunta 22
    {
        question: "Você convida uma pessoa para sair e ela diz não.",
        options: ["Eu estava num dia ruim", "Fiquei nervoso na hora de fazer o convite"],
        answers: [1, 0],
        category: "IAb"
    },
    // Pergunta 23
    {
        question: "Você é escolhido pelo apresentador de um programa para participar de um jogo.",
        options: ["Eu estava sentado no lugar certo", "Eu parecia ser a pessoa mais entusiasmada"],
        answers: [0, 1],
        category: "SPs"
    },
    // Pergunta 24
    {
        question: "Você é sempre tirado para dançar em festas.",
        options: ["Sou muito simpático nas festas", "Eu estava em excelente forma naquela noite"],
        answers: [1, 0],
        category: "SPm"
    },
    // Pergunta 25
    {
        question: "Você compra um presente para o cônjuge (namorado/namorada) e ele/ela não gosta.",
        options: ["Não reflito muito sobre esse tipo de coisa", "Ele/Ela tem um gosto muito difícil"],
        answers: [1, 0],
        category: "IPs"
    },
    // Pergunta 26
    {
        question: "Você se saiu excepcionalmente bem numa entrevista de emprego.",
        options: ["Me senti extremamente confiante durante a entrevista", "Sou bom em entrevistas"],
        answers: [0, 1],
        category: "SPm"
    },
    // Pergunta 27
    {
        question: "Você conta uma piada e todo mundo ri.",
        options: ["A piada era engraçada", "Meu timing foi perfeito"],
        answers: [0, 1],
        category: "SPs"
    },
    // Pergunta 28
    {
        question: "Seu chefe pede para você finalizar um projeto em muito pouco tempo, mas você consegue entregá-lo mesmo assim.",
        options: ["Sou bom no que faço", "Sou uma pessoa eficiente"],
        answers: [0, 1],
        category: "SAb"
    },
    // Pergunta 29
    {
        question: "Você tem se sentido exausto ultimamente.",
        options: ["Nunca consigo tempo para relaxar", "Estive excepcionalmente atarefado esta semana"],
        answers: [1, 0],
        category: "IPm"
    },
    // Pergunta 30
    {
        question: "Você convida alguém para dançar e a pessoa diz não.",
        options: ["Não sou bom o bastante", "Ele/Ela não gosta de dançar"],
        answers: [1, 0],
        category: "IPs"
    },
    // Pergunta 31
    {
        question: "Você tem dificuldade em manter o equilíbrio emocional durante momentos de estresse.",
        options: ["Costumo perder a calma facilmente", "Fico muito ansioso quando algo dá errado"],
        answers: [1, 0],
        category: "IPm"
    },
    // Pergunta 32
    {
        question: "Você começa uma nova dieta e já está vendo resultados.",
        options: ["Estou extremamente motivado", "Estou disciplinado e focado"],
        answers: [0, 1],
        category: "SPs"
    },
    // Pergunta 33
    {
        question: "Você fez um ótimo trabalho num projeto de equipe e todos elogiaram seu esforço.",
        options: ["Eu me empenhei ao máximo no projeto", "O grupo reconheceu meu esforço e contribuição"],
        answers: [0, 1],
        category: "SPs"
    },
    // Pergunta 34
    {
        question: "Você se sente exausto depois de um longo dia de trabalho.",
        options: ["Não parei o dia todo", "Estava completamente envolvido em várias tarefas"],
        answers: [1, 0],
        category: "IPm"
    },
    // Pergunta 35
    {
        question: "Você perdeu a chave de casa.",
        options: ["Deixei em algum lugar sem querer", "Estava tão apressado que acabei esquecendo"],
        answers: [1, 0],
        category: "IAb"
    },
    // Pergunta 36
    {
        question: "Você foi surpreendido por uma situação que não esperava.",
        options: ["Eu estava despreparado para isso", "Nada indicava que aquilo iria acontecer"],
        answers: [1, 0],
        category: "IPs"
    },
    // Pergunta 37
    {
        question: "Você perdeu a paciência com alguém no trabalho.",
        options: ["Eu estava muito sobrecarregado", "Ele/Ela me irritou com o comportamento"],
        answers: [1, 0],
        category: "IPm"
    },
    // Pergunta 38
    {
        question: "Você sente que não tem tempo para cuidar de si mesmo.",
        options: ["Tenho muitos compromissos para cumprir", "Estou sempre ocupado com as demandas dos outros"],
        answers: [1, 0],
        category: "IPm"
    },
    // Pergunta 39
    {
        question: "Você está tendo um ótimo relacionamento com seus colegas de trabalho.",
        options: ["Me sinto bem no meu ambiente de trabalho", "Sou bom em trabalhar em equipe"],
        answers: [0, 1],
        category: "SPs"
    },
    // Pergunta 40
    {
        question: "Você ganha uma viagem de graça.",
        options: ["Fui sorteado", "Me inscrevi e fui selecionado"],
        answers: [0, 1],
        category: "SAb"
    },
    // Pergunta 41
    {
        question: "Você ficou frustrado por não ter atingido um objetivo.",
        options: ["Não planejei o suficiente", "Não dei o meu melhor"],
        answers: [1, 0],
        category: "IPm"
    },
    // Pergunta 42
    {
        question: "Você se sente otimista em relação ao futuro.",
        options: ["Tudo parece estar dando certo para mim", "Acredito que coisas boas virão"],
        answers: [0, 1],
        category: "SPs"
    },
    // Pergunta 43
    {
        question: "Você não consegue sair de um embaraço.",
        options: ["Aconteceu algo que me deixou nervoso", "Eu estava tenso demais e não pensei claramente"],
        answers: [1, 0],
        category: "IPm"
    },
    // Pergunta 44
    {
        question: "Você recebeu uma promoção no trabalho.",
        options: ["Me dediquei muito ao trabalho", "Estou na função certa"],
        answers: [0, 1],
        category: "SPm"
    },
    // Pergunta 45
    {
        question: "Você consegue manter uma atitude positiva diante de um desafio.",
        options: ["Acredito que tudo acontece por uma razão", "Estou confiante de que posso superar isso"],
        answers: [0, 1],
        category: "SPs"
    },
    // Pergunta 46
    {
        question: "Você ficou estressado com algo inesperado que aconteceu.",
        options: ["Não sou bom em lidar com imprevistos", "Eu realmente não esperava por isso"],
        answers: [1, 0],
        category: "IPm"
    },
    // Pergunta 47
    {
        question: "Você tem planos de melhorar sua situação financeira este ano.",
        options: ["Tenho metas claras", "Estou me esforçando para melhorar minha situação financeira"],
        answers: [0, 1],
        category: "SPm"
    },
    // Pergunta 48
    {
        question: "Você tem um ótimo relacionamento com sua família.",
        options: ["Todos se ajudam muito", "Eu tenho uma boa comunicação com todos"],
        answers: [0, 1],
        category: "SPs"
    }
];

let currentQuestionIndex = 0;
let totalI = 0;
let totalS = 0;

const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-question");
const previousButton = document.getElementById("previous-question");
const questionContainer = document.getElementById("question-container");
const resultContainer = document.getElementById("result-container");
const restartButton = document.getElementById("restart");
const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const answerContainer = document.getElementById("answer-container");
const totalIElement = document.getElementById("totalI");
const totalSElement = document.getElementById("totalS");
const finalResultElement = document.getElementById("finalResult");

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);
previousButton.addEventListener("click", previousQuestion);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
    startButton.style.display = "none";
    questionContainer.style.display = "block";
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionNumber.textContent = `Pergunta ${currentQuestionIndex + 1}`;
    questionText.textContent = question.question;
    answerContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "answer";
        input.value = index;
        label.appendChild(input);
        label.appendChild(document.createTextNode(option));
        answerContainer.appendChild(label);

        input.addEventListener("change", () => {
            if (input.checked) {
                answerContainer.querySelectorAll("input").forEach(radio => radio.disabled = true);
                if (index === 0) totalI += question.answers[index];
                else totalS += question.answers[index];
            }
        });
    });

    previousButton.style.display = currentQuestionIndex === 0 ? "none" : "inline-block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
}

function showResults() {
    questionContainer.style.display = "none";
    resultContainer.style.display = "block";
    totalIElement.textContent = `Total de I: ${totalI}`;
    totalSElement.textContent = `Total de S: ${totalS}`;
    finalResultElement.textContent = `Resultado Final: ${totalS - totalI}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    totalI = 0;
    totalS = 0;
    resultContainer.style.display = "none";
    startButton.style.display = "inline-block";
}
