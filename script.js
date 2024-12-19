const questions = document.querySelectorAll(".questions-answers-container");

questions.forEach((question) => {
    const answer = question.querySelector(".answer");
    const arrow = question.querySelector(".arrow-down");
    const questionHeader = question.querySelector(".question")
    question.addEventListener("click", () => {
        const isOpen = answer.style.display === "block";

        // reset all questions and arrows
        answer.style.display = "none";
        arrow.classList.remove("arrow-up");
        question.classList.remove("question-active");

        if(isOpen){
            answer.style.display = "none"
            arrow.classList.remove("arrow-up");
            questionHeader.classList.remove("question-active");
        }
        else{
            answer.style.display = "block";
            arrow.classList.add("arrow-up");
            questionHeader.classList.add("question-active");
        }
    })
});