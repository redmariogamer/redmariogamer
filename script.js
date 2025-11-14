/* slide images*/
document.addEventListener("DOMContentLoaded", function() {
    const submitQuiz = document.getElementById("submitQuiz");
    const quizResult = document.getElementById("quizResult");

    
    if (submitQuiz && quizResult) {
    submitQuiz.addEventListener("click", function() {

        let score = 0;

        const answers = {
            q1: "Super Mario",
            q2: "True",
            q3: "Pizza",
            q4: "Cat",
            q5: "Video Games",
            q6: "Golden State Warriors",
            q7: "Comedy",
            q8: "Super Mario Bros. Movie",
            q9: "Avatar: The Last Airbender",
            q10: "YES!",
            
        };
        
        for (let question in answers) {
            const selected = document.querySelector(`input[name="${question}"]:checked`);
            if (selected && selected.value === answers[question]) {
                score++;
            }
        }
        quizResult.textContent = `You scored ${score} out of 7!`;
        quizResult.style.fontWeight = "bold";
        quizResult.style.marginTop = "10px";
        quizResult.style.color = "green";
    });
}

});
