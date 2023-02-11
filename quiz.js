const quiz = [
    {
      question: "Which picture shows a dog?",
      choices: [
        "tiger.jpeg",
        "dog.jpeg",
        "elephant.jpeg",
        "sqirrel.jpeg"
      ],
      answer: 2
    },
    {
      question: "Which is color red?",
      choices: [
        "red.jpg",
        "yellow.png",
        "green.png",
        "blue.png"
      ],
      answer: 1
    },
    {
      question: "Which is not a flower?",
      choices: [
        "b.jpg",
        "d.jpg",
        "dd.jpg",
        "f.jpg"
      ],
      answer: 3
    }
  ];
  
  const questionEl = document.querySelector(".question");
  const formEl = document.querySelector("form");
  
  let currentQuestion = 0;
  let score = 0;
  
  function renderQuestion() {
    const question = quiz[currentQuestion];
    questionEl.textContent = question.question;
  
    formEl.innerHTML = "";
  
    question.choices.forEach((choice, i) => {
      formEl.innerHTML += `
        <input type="radio" id="${i + 1}" name="choice" value="${i + 1}">
        <label for="${i + 1}">
          <img src="${choice}" alt="Option ${i + 1}">
        </label><br>
      `;
    });
  
    formEl.innerHTML += `<button type="submit">Submit</button>`;
  }
  
  renderQuestion();
  
  formEl.addEventListener("submit", function(event) {
    event.preventDefault();
  
    const selectedOption = formEl.elements.choice.value;
  
    if (selectedOption == quiz[currentQuestion].answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion === quiz.length) {
      alert(`Quiz finished. Your score is ${score} out of ${quiz.length}.`);
      return;
    }
  
    renderQuestion();
  });
  