import quizData from "./quiz-data.js";


const formQuest = document.querySelector("form");
const fragment = document.createDocumentFragment();
const title = document.createElement("h1");
const button = document.querySelector("button");
title.textContent = quizData.title;
title.className = "title";

let result = document.createElement("div");
result.className = "result";

function createQuestion(questionObj, indx) {
    const section = document.createElement('section');
    section.className = "section";
    section.classList.add("section-question");
    const h3 = document.createElement('h3');
    h3.className = "h3"; 
    h3.classList.add("question-title");
    h3.textContent = questionObj.question;
    const ol = document.createElement('ol');
    ol.className = "ol";
    ol.classList.add("answer-List");
    section.append(h3);
    questionObj.choices.forEach((el, choiceIndex) => {
        let choiceItem = createAnswerItem(el, indx, choiceIndex);
        ol.append(choiceItem);
    });
    section.append(ol);
      
    fragment.append(section);
}

quizData.questions.forEach(createQuestion)
formQuest.prepend(title, fragment);

function createAnswerItem(choice, idx, choiceIndex) {
    const li = document.createElement('li');
    li.className = "li";
    li.classList.add("answer-item");
    const label = document.createElement('label');
    label.classList.add('label');
    const input = document.createElement("input");
    label.textContent = choice;
    input.setAttribute("type", "radio");
    input.setAttribute("name", idx);
    input.setAttribute("value", choiceIndex);
    label.prepend(input);
    li.append(label);
    
    return li;
}   

const rightAnswer = quizData.questions.map(el => {
  return el.answer;
});
console.log(rightAnswer);

function checkUserAnswer () {
    event.preventDefault();

    const quesItem = document.querySelectorAll('input[type="radio"]:checked');
    let userAnswer = [];
    const answersArray = quizData.questions.map(el => el.answer);
    quesItem.forEach(item => userAnswer.push(Number(item.value)));
        
        compareAnswer(rightAnswer, userAnswer);
        console.log(userAnswer);
      };
      
      document.querySelector("button").addEventListener('click', checkUserAnswer);
      
function compareAnswer(rightAnswer, userAnswer) {
        let counter = 0;
        let testCheck = 0;
        let prosentage = 0;
    
    for (let i of rightAnswer) {
        if (i === userAnswer[testCheck]) {
          counter += 1;
        }
        testCheck += 1;
      }
      prosentage = (counter / rightAnswer.length) * 100;
      if( userAnswer.length < rightAnswer.length ){
        return (result.textContent = `Вы должны ответить все вопросы!`);
      }
      if (counter >= 0.8 * rightAnswer.length) {
        return (result.textContent = `У вас ${Math.round(
          prosentage
        )}% правильных ответов, Вы МОЛОДЕЦ!`);
      } else {
        console.log(prosentage);
        return (result.textContent = `У вас ${Math.round(
          prosentage
        )}% правильных ответов, попробуйте еще раз!`);
      }
    }
    button.before(result);
    
    
    
    
    
    
 

    
