const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const question =e.currentTarget.parentElement;

        console.log(question);
    question.classList.toggle("show-text");
  });
});
