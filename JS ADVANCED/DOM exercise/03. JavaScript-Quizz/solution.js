function solve() {
  let quizzie = document.getElementById('quizzie')
  let sections = document.getElementsByTagName('section')
  let result = document.querySelector(".results-inner h1")
  let correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents']
  let usersAnsw = 0;
  let currentStep = 0;
  quizzie.addEventListener('click', (e) => {
    if (e.target.className === 'answer-text') {


      console.log(e.target.innerHTML)

      sections[currentStep].style.display = "none"

      let isCorrect = correctAnswers.includes(e.target.innerHTML)
      if (isCorrect) {
        usersAnsw++
      }
      console.log(usersAnsw)
      currentStep++
      if (currentStep < correctAnswers.length) {

        sections[currentStep].style.display = "block"
      } else if (currentStep == correctAnswers.length) {
        document.querySelector('#results').style.display = "block"
        result.innerHTML = correctAnswers.length === usersAnsw ?
          "You are recognized as top JavaScript fan!" : `You have ${usersAnsw} right answers`
      }
    }
  });

}

