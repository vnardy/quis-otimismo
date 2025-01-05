document.getElementById('calculateBtn').addEventListener('click', function() {
    let totalScore = 0;
    
    // Perguntas e suas pontuações
    const questions = [
        { id: 'q1', points: [1, 0] }, // Pergunta 1
        { id: 'q2', points: [0, 1] }, // Pergunta 2
        // Adicionar as outras 46 perguntas aqui
    ];

    // Calcular pontuação
    questions.forEach((question, index) => {
        const selectedAnswer = document.querySelector(`input[name="q${index + 1}"]:checked`);
        if (selectedAnswer) {
            totalScore += parseInt(selectedAnswer.value);
        }
    });

    // Exibir resultados
    const resultText = document.getElementById('resultText');
    resultText.innerHTML = `Sua pontuação total é: ${totalScore} de ${questions.length}.`;

    // Mostrar os resultados
    document.getElementById('results').style.display = 'block';
});
