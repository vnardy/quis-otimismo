const questions = [
    { question: "O projeto sob sua responsabilidade foi um grande sucesso?", options: ["Fiquei atento ao trabalho de todos", "Todo mundo investiu muito tempo e energia nele"], category: "SPs", points: [1, 0] },
    { question: "Você e seu cônjuge (namorado/namorada) fazem as pazes depois de uma briga?", options: ["Eu o/a perdoei", "Costumo perdoar os outros"], category: "SPm", points: [0, 1] },
    { question: "Você se perde dirigindo para a casa de um amigo?", options: ["Entrei na rua errada", "Meu amigo me indicou o caminho errado"], category: "IPs", points: [1, 0] },
    { question: "Seu cônjuge (namorado/namorada) lhe dá um presente de surpresa?", options: ["Ele/Ela acabou de ganhar um aumento", "Eu o/a convidei para um jantar especial na véspera"], category: "SPs", points: [0, 1] },
    { question: "Você se esqueceu do aniversário do cônjuge (namorado/namorada)?", options: ["Não sou bom em lembrar datas", "Estava preocupado com outras coisas"], category: "IPm", points: [1, 0] },
    { question: "Você ganha flores de um admirador secreto?", options: ["Ele/Ela me acha atraente", "Sou uma pessoa popular"], category: "SAb", points: [0, 1] },
    { question: "Você concorre a um cargo público e vence?", options: ["Dediquei muito tempo e energia à campanha", "Sempre trabalho duro"], category: "SAb", points: [0, 1] },
    { question: "Você perde um compromisso importante?", options: ["Às vezes a minha memória falha", "Às vezes esqueço de olhar minha agenda"], category: "IAb", points: [1, 0] },
    { question: "Você concorre a um cargo público e perde?", options: ["Não me dediquei o suficiente à campanha", "A pessoa que ganhou conhecia mais gente"], category: "IPs", points: [1, 0] },
    { question: "Você oferece um jantar que foi um sucesso?", options: ["Eu me superei na simpatia naquela noite", "Sou um bom anfitrião"], category: "SPm", points: [0, 1] },
    { question: "Você impede um crime ligando para a polícia?", options: ["Um barulho estranho chamou a minha atenção", "Naquele dia eu estava em estado de alerta"], category: "SPs", points: [0, 1] },
    { question: "Você passou o ano inteiro extremamente saudável?", options: ["Como poucas pessoas ao meu redor adoeceram, não fui exposto", "Fiz questão de comer bem e descansar bastante"], category: "SPs", points: [0, 1] },
    { question: "Você tem uma multa para pagar na biblioteca por ter atrasado a devolução de um livro?", options: ["Quando estou muito envolvido com a leitura, me esqueço do prazo", "Eu estava preocupado com outras coisas"], category: "IPm", points: [1, 0] },
    { question: "Você ganha muito dinheiro no mercado de ações?", options: ["Meu corretor decidiu arriscar em algo novo", "Meu corretor é um excelente investidor"], category: "SPm", points: [0, 1] },
    { question: "Você vence uma competição esportiva?", options: ["Estava me sentindo imbatível", "Eu treino muito"], category: "SPm", points: [0, 1] },
    { question: "Você se saiu mal numa prova importante?", options: ["Não sou tão inteligente quanto as outras pessoas que fizeram a prova", "Não me preparei muito bem"], category: "IAb", points: [1, 0] },
    { question: "Você preparou uma refeição especial para um amigo, mas ele mal tocou na comida?", options: ["Não sou um bom cozinheiro", "Fiz a comida às pressas"], category: "IAb", points: [1, 0] },
    { question: "Você perdeu uma partida para a qual vinha treinando há muito tempo?", options: ["Não sou muito atlético", "Não sou muito bom nesse esporte"], category: "IAb", points: [1, 0] },
    { question: "O combustível do seu carro acaba numa rua escura tarde da noite?", options: ["Não verifiquei quanto combustível ainda tinha no tanque", "O indicador de combustível estava quebrado"], category: "IPs", points: [1, 0] },
    { question: "Você perde a paciência com um amigo?", options: ["Ele/Ela vive me irritando", "Ele/Ela estava de mau humor"], category: "IPm", points: [1, 0] },
    { question: "Você é multado por não declarar o imposto de renda dentro do prazo?", options: ["Sempre deixo a declaração para a última hora", "Tive preguiça de fazer a minha declaração este ano"], category: "IPm", points: [1, 0] },
    { question: "Você convida alguém para sair e ela diz não?", options: ["Eu estava num dia ruim", "Fiquei nervoso na hora de fazer o convite"], category: "IAb", points: [1, 0] },
    { question: "Você é escolhido pelo apresentador de um programa para participar de um jogo?", options: ["Eu estava sentado no lugar certo", "Eu parecia ser a pessoa mais entusiasmada"], category: "SPs", points: [0, 1] },
    { question: "Você é sempre tirado para dançar em festas?", options: ["Sou muito simpático nas festas", "Eu estava em excelente forma naquela noite"], category: "SPm", points: [1, 0] },
    { question: "Você compra um presente para o cônjuge (namorado/namorada) e ele/ela não gosta?", options: ["Não reflito muito sobre esse tipo de coisa", "Ele/Ela tem um gosto muito difícil"], category: "IPs", points: [1, 0] },
    { question: "Você se saiu excepcionalmente bem numa entrevista de emprego?", options: ["Me senti extremamente confiante durante a entrevista", "Sou bom em entrevistas"], category: "SPm", points: [0, 1] },
    { question: "Você conta uma piada e todo mundo ri?", options: ["A piada era engraçada", "Meu timing foi perfeito"], category: "SPs", points: [0, 1] },
    { question: "Seu chefe pede para você finalizar um projeto em muito pouco tempo, mas você consegue entregá-lo mesmo assim?", options: ["Sou bom no que faço", "Sou uma pessoa eficiente"], category: "SAb", points: [0, 1] },
    { question: "Você tem se sentido exausto ultimamente?", options: ["Nunca consigo tempo para relaxar", "Estive excepcionalmente atarefado esta semana"], category: "IPm", points: [1, 0] },
    { question: "Você convida alguém para dançar e a pessoa diz não?", options: ["Não sou bom o bastante", "Ele/Ela não gosta de dançar"], category: "IPs", points: [1, 0] },
    { question: "Você salva uma pessoa que estava engasgando?", options: ["Sei de uma boa técnica para esse tipo de situação", "Sei o que fazer em momentos de crise"], category: "SAb", points: [0, 1] },
    { question: "Seu parceiro quer dar um tempo na relação?", options: ["Sou muito egoísta", "Não passo tempo suficiente com ele/ela"], category: "IAb", points: [1, 0] },
    { question: "Um amigo diz algo que fere seus sentimentos?", options: ["Ele/Ela sempre fala as coisas sem pensar nos outros", "Ele/Ela estava de mau humor e sobrou para mim"], category: "IPm", points: [1, 0] },
    { question: "Seu chefe pede um conselho seu?", options: ["Sou especialista no assunto que ele me perguntou", "Sei dar bons conselhos"], category: "SAB", points: [0, 1] },
    { question: "Um amigo agradece por tê-lo ajudado numa época difícil?", options: ["Gosto de ajudá-lo quando as coisas estão complicadas", "Eu me importo com as pessoas"], category: "SAB", points: [0, 1] },
    { question: "Você se diverte à beça numa festa?", options: ["Todo mundo era simpático", "Fui simpático"], category: "SPS", points: [0, 1] },
    { question: "Seu médico lhe diz que você está em ótima forma?", options: ["Faço questão de me exercitar com frequência", "Sou muito ligado à saúde"], category: "SAB", points: [0, 1] },
    { question: "Você sai para passear e esquece onde estacionou?", options: ["Não sou bom em lembrar onde deixei o carro", "Era um lugar muito movimentado e eu me distraí"], category: "IPs", points: [1, 0] },
    { question: "Você esqueceu de ligar para um amigo?", options: ["Eu sou um pouco esquecido", "Estava muito ocupado"], category: "IPm", points: [1, 0] },
    { question: "Você se esqueceu de enviar um relatório importante?", options: ["Não sou bom com prazos", "Não estava me sentindo bem"], category: "IPm", points: [1, 0] },
    { question: "Você perde o trem por um minuto?", options: ["Sempre fico na fila", "Estava distraído e nem percebi o horário"], category: "IPs", points: [1, 0] },
    { question: "Você tem mais filhos que a média?", options: ["Eu sempre quis ter uma grande família", "Minha esposa gosta de ter muitos filhos"], category: "SPs", points: [0, 1] },
    { question: "Você não tem mais paciência com uma pessoa com quem teve desentendimentos?", options: ["Eu perdi a paciência depois de tanta coisa", "Eu estava muito estressado"], category: "IAb", points: [1, 0] },
    { question: "Você tem vergonha de alguém com quem está em público?", options: ["Eu só me importo comigo", "Ele/Ela é uma pessoa muito excêntrica"], category: "IAb", points: [1, 0] },
    { question: "Você é aprovado em um concurso difícil?", options: ["Eu me preparei muito para isso", "Fiquei muito focado no objetivo"], category: "SAb", points: [0, 1] }
];

function showQuestion(index) {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const question = questions[index];
    
    questionElement.textContent = `${index + 1}. ${question.question}`;
    optionsElement.innerHTML = '';
    question.options.forEach((option, i) => {
        const optionElement = document.createElement('label');
        optionElement.classList.add('option');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = `question${index}`;
        input.value = i;
        const span = document.createElement('span');
        span.textContent = option;
        optionElement.appendChild(input);
        optionElement.appendChild(span);
        optionsElement.appendChild(optionElement);
    });
}

function showResults() {
    let totalI = 0;
    let totalS = 0;
    let result = '';
    
    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name='question${index}']:checked`);
        if (selectedOption) {
            const answer = selectedOption.value;
            if (question.category.includes('IP')) {
                totalI += question.points[answer];
            } else {
                totalS += question.points[answer];
            }
        }
    });
    
    result = `Total de I: ${totalI}\nTotal de S: ${totalS}\nResultado Final: ${totalS - totalI}`;
    document.getElementById('results').textContent = result;
}

showQuestion(0);
