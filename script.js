const question = document.querySelectorAll('.question');

question.forEach(questions => {
  questions.addEventListener('click', () => {
    questions.classList.toggle('active');
  })
});