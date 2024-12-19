const questions = document.querySelectorAll(".questions-answers-container");

questions.forEach((question) => {
    const answer = question.querySelector(".answer");
    const arrow = question.querySelector(".arrow-down")
    question.addEventListener("click", () => {
        const isOpen = answer.style.display === "block";

        // reset all questions and arrows
        answer.style.display = "none";
        arrow.classList.remove("arrow-up")

        if(isOpen){
            answer.style.display = "none"
            arrow.classList.remove("arrow-up");
        }
        else{
            answer.style.display = "block";
            arrow.classList.add("arrow-up");
        }
    })
});