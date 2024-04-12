const quizQuestions = [
    {
        question: "I rarely feel stressed.",
        options: [
            {
                text: "Agree",
                nueroticism: 4,
                agreableness: 2,
                Conscientiousness: 2,
                Extraversion: 4,
                Openness: 2,
               // feedback: "You tend to handle stress well and remain calm in challenging situations."
            },
            {
                text: "Strongly Agree",
                nueroticism: 5,
                agreableness: 1,
                Conscientiousness: 1,
                Extraversion: 5,
                Openness: 1,
               // feedback: "You are generally stress-resistant and maintain a positive outlook."
            },
            {
                text: "Disagree",
                nueroticism: 2,
                agreableness: 4,
                Conscientiousness: 4,
                Extraversion: 2,
                Openness: 4,
                //feedback: "You may experience stress from time to time, but it's manageable."
            },
            {
                text: "Strongly Disagree",
                nueroticism: 1,
                agreableness: 5,
                Conscientiousness: 5,
                Extraversion: 1,
                Openness: 5,
                //feedback: "You often feel stressed, and it's important to find ways to reduce stress."
            },
            {
                text: "Neither Agree nor Disagree",
                nueroticism: 3,
                agreableness: 3,
                Conscientiousness: 3,
                Extraversion: 3,
                Openness: 3,
               //feedback: "Your stress levels vary depending on the situation."
            }
        ]
    },
    {
        question: "I enjoy taking on new challenges.",
        options: [
            {
                text: "Agree",
                nueroticism: 2,
                agreableness: 0,
                Conscientiousness: 4,
                Extraversion: 4,
                Openness: 4,
               // feedback: "You are open to new experiences and challenges in your life."
            },
            {
                text: "Strongly Agree",
                nueroticism: 1,
                agreableness: 0,
                Conscientiousness: 5,
                Extraversion: 5,
                Openness: 5,
                //feedback: "You actively seek out and thrive in challenging situations."
            },
            {
                text: "Disagree",
                nueroticism: 4,
                agreableness: 0,
                Conscientiousness: 2,
                Extraversion: 2,
                Openness: 2,
               // feedback: "You prefer to stick to familiar routines and avoid major challenges."
            },
            {
                text: "Strongly Disagree",
                nueroticism: 5,
                agreableness: 0,
                Conscientiousness: 1,
                Extraversion: 1,
                Openness: 1,
               // feedback: "You tend to avoid new challenges and prefer a more predictable life."
            },
            {
                text: "Neither Agree nor Disagree",
                nueroticism: 3,
                agreableness: 0,
                Conscientiousness: 3,
                Extraversion: 3,
                Openness: 3,
               // feedback: "You are selective about the challenges you take on."
            }
        ]
    },
    {
        question: "Rarely Feel Blue.",
        options: [
            {
                text: "Agree",
                nueroticism: 2,
                agreableness: 0,
                Conscientiousness: 2,
                Extraversion: 4,
                Openness: 4,
                //feedback: "You are open to new experiences and challenges in your life."
            },
            {
                text: "Strongly Agree",
                nueroticism: 1,
                agreableness: 0,
                Conscientiousness: 1,
                Extraversion: 5,
                Openness: 5,
                //feedback: "You actively seek out and thrive in challenging situations."
            },
            {
                text: "Disagree",
                nueroticism: 4,
                agreableness: 0,
                Conscientiousness: 4,
                Extraversion: 2,
                Openness: 2,
                //feedback: "You prefer to stick to familiar routines and avoid major challenges."
            },
            {
                text: "Strongly Disagree",
                nueroticism: 5,
                agreableness: 0,
                Conscientiousness: 5,
                Extraversion: 1,
                Openness: 1,
                //feedback: "You tend to avoid new challenges and prefer a more predictable life."
            },
            {
                text: "Neither Agree nor Disagree",
                nueroticism: 3,
                agreableness: 0,
                Conscientiousness: 3,
                Extraversion: 3,
                Openness: 3,
                //feedback: "You are selective about the challenges you take on."
            }
        ]
    },
    {
        question: "I enjoy meeting new people.",
        options: [
            {
                text: "Agree",
                nueroticism: 2,
                agreableness: 2,
                Conscientiousness: 4,
                Extraversion: 4,
                Openness: 4,
                //feedback: "You are open to new experiences and challenges in your life."
            },
            {
                text: "Strongly Agree",
                nueroticism: 1,
                agreableness: 1,
                Conscientiousness: 5,
                Extraversion: 5,
                Openness: 5,
                //feedback: "You actively seek out and thrive in challenging situations."
            },
            {
                text: "Disagree",
                nueroticism: 4,
                agreableness: 4,
                Conscientiousness: 2,
                Extraversion: 2,
                Openness: 2,
                //feedback: "You prefer to stick to familiar routines and avoid major challenges."
            },
            {
                text: "Strongly Disagree",
                nueroticism: 5,
                agreableness: 5,
                Conscientiousness: 1,
                Extraversion: 1,
                Openness: 1,
                //feedback: "You tend to avoid new challenges and prefer a more predictable life."
            },
            {
                text: "Neither Agree nor Disagree",
                nueroticism: 3,
                agreableness: 3,
                Conscientiousness: 3,
                Extraversion: 3,
                Openness: 3,
                //feedback: "You are selective about the challenges you take on."
            }
        ]
    },
    {
        question: "I like helping people or even strangers.",
        options: [
            {
                text: "Agree",
                nueroticism: 2,
                agreableness: 2,
                Conscientiousness: 2,
                Extraversion: 4,
                Openness: 4,
                //feedback: "You are open to new experiences and challenges in your life."
            },
            {
                text: "Strongly Agree",
                nueroticism: 1,
                agreableness: 1,
                Conscientiousness: 1,
                Extraversion: 5,
                Openness: 5,
                //feedback: "You actively seek out and thrive in challenging situations."
            },
            {
                text: "Disagree",
                nueroticism: 4,
                agreableness: 4,
                Conscientiousness: 4,
                Extraversion: 2,
                Openness: 2,
                //feedback: "You prefer to stick to familiar routines and avoid major challenges."
            },
            {
                text: "Strongly Disagree",
                nueroticism: 5,
                agreableness: 5,
                Conscientiousness: 5,
                Extraversion: 1,
                Openness: 1,
                //feedback: "You tend to avoid new challenges and prefer a more predictable life."
            },
            {
                text: "Neither Agree nor Disagree",
                nueroticism: 3,
                agreableness: 3,
                Conscientiousness: 3,
                Extraversion: 3,
                Openness: 3,
                //feedback: "You are selective about the challenges you take on."
            }
        ]
    },
    {
        question: "I often make mistakes.",
        options: [
            {
                text: "Agree",
                nueroticism: 4,
                agreableness: 4,
                Conscientiousness: 2,
                Extraversion: 2,
                Openness: 4,
                //feedback: "You are open to new experiences and challenges in your life."
            },
            {
                text: "Strongly Agree",
                nueroticism: 5,
                agreableness: 5,
                Conscientiousness: 1,
                Extraversion: 1,
                Openness: 5,
                //feedback: "You actively seek out and thrive in challenging situations."
            },
            {
                text: "Disagree",
                nueroticism: 2,
                agreableness: 2,
                Conscientiousness: 4,
                Extraversion: 4,
                Openness: 2,
                //feedback: "You prefer to stick to familiar routines and avoid major challenges."
            },
            {
                text: "Strongly Disagree",
                nueroticism: 1,
                agreableness: 1,
                Conscientiousness: 5,
                Extraversion: 5,
                Openness: 1,
                //feedback: "You tend to avoid new challenges and prefer a more predictable life."
            },
            {
                text: "Neither Agree nor Disagree",
                nueroticism: 3,
                agreableness: 3,
                Conscientiousness: 3,
                Extraversion: 3,
                Openness: 3,
                //feedback: "You are selective about the challenges you take on."
            }
        ]
    },
    {
        question: "I am easily disappointed.",
        options: [
            {
                text: "Agree",
                nueroticism: 4,
                agreableness: 4,
                Conscientiousness: 2,
                Extraversion: 2,
                Openness: 2,
                //feedback: "You are open to new experiences and challenges in your life."
            },
            {
                text: "Strongly Agree",
                nueroticism: 5,
                agreableness: 5,
                Conscientiousness: 1,
                Extraversion: 1,
                Openness: 1,
                //feedback: "You actively seek out and thrive in challenging situations."
            },
            {
                text: "Disagree",
                nueroticism: 2,
                agreableness: 2,
                Conscientiousness: 4,
                Extraversion: 4,
                Openness: 4,
                //feedback: "You prefer to stick to familiar routines and avoid major challenges."
            },
            {
                text: "Strongly Disagree",
                nueroticism: 1,
                agreableness: 1,
                Conscientiousness: 5,
                Extraversion: 5,
                Openness: 5,
                //feedback: "You tend to avoid new challenges and prefer a more predictable life."
            },
            {
                text: "Neither Agree nor Disagree",
                nueroticism: 3,
                agreableness: 3,
                Conscientiousness: 3,
                Extraversion:3 ,
                Openness: 3,
                //feedback3: "You are selective about the challenges you take on."
            }
        ]
    },
    {
        question: "I cannot usually manage my anger.",
        options: [
            {
                text: "Agree",
                nueroticism: 4,
                agreableness: 4,
                Conscientiousness: 4,
                Extraversion: 4,
                Openness: 2,
                //feedback: "You are open to new experiences and challenges in your life."
            },
            {
                text: "Strongly Agree",
                nueroticism: 5,
                agreableness: 5,
                Conscientiousness: 5,
                Extraversion: 5,
                Openness: 1,
                //feedback: "You actively seek out and thrive in challenging situations."
            },
            {
                text: "Disagree",
                nueroticism: 2,
                agreableness: 2,
                Conscientiousness: 2,
                Extraversion: 2,
                Openness: 4,
                //feedback: "You prefer to stick to familiar routines and avoid major challenges."
            },
            {
                text: "Strongly Disagree",
                nueroticism: 1,
                agreableness: 1,
                Conscientiousness: 1,
                Extraversion: 1,
                Openness: 5,
                //feedback: "You tend to avoid new challenges and prefer a more predictable life."
            },
            {
                text: "Neither Agree nor Disagree",
                nueroticism: 3,
                agreableness: 3,
                Conscientiousness: 3,
                Extraversion: 3,
                Openness: 3,
                //feedback: "You are selective about the challenges you take on."
            }
        ]
    },
    {
        question: "I like social gathering or public places.",
        options: [
            {
                text: "Agree",
                nueroticism: 2,
                agreableness: 2,
                Conscientiousness: 2,
                Extraversion: 4,
                Openness: 4,
                //feedback: "You are open to new experiences and challenges in your life."
            },
            {
                text: "Strongly Agree",
                nueroticism: 1,
                agreableness: 1,
                Conscientiousness: 1,
                Extraversion: 5,
                Openness: 5,
                //feedback: "You actively seek out and thrive in challenging situations."
            },
            {
                text: "Disagree",
                nueroticism: 4,
                agreableness: 4,
                Conscientiousness: 4,
                Extraversion: 2,
                Openness: 2,
                //feedback: "You prefer to stick to familiar routines and avoid major challenges."
            },
            {
                text: "Strongly Disagree",
                nueroticism: 5,
                agreableness: 5,
                Conscientiousness: 5,
                Extraversion: 1,
                Openness: 1,
                //feedback: "You tend to avoid new challenges and prefer a more predictable life."
            },
            {
                text: "Neither Agree nor Disagree",
                nueroticism: 3,
                agreableness: 3,
                Conscientiousness: 3,
                Extraversion: 3,
                Openness: 3,
                //feedback: "You are selective about the challenges you take on."
            }
        ]
    },
    {
        question: "I like trying out new activities.",
        options: [
            {
                text: "Agree",
                nueroticism: 2,
                agreableness: 2,
                Conscientiousness: 4,
                Extraversion: 4,
                Openness: 4,
                //feedback: "You are open to new experiences and challenges in your life."
            },
            {
                text: "Strongly Agree",
                nueroticism: 1,
                agreableness: 1,
                Conscientiousness: 5,
                Extraversion: 5,
                Openness: 5,
                //feedback: "You actively seek out and thrive in challenging situations."
            },
            {
                text: "Disagree",
                nueroticism: 4,
                agreableness: 4,
                Conscientiousness: 2,
                Extraversion: 2,
                Openness: 2,
                //feedback: "You prefer to stick to familiar routines and avoid major challenges."
            },
            {
                text: "Strongly Disagree",
                nueroticism: 5,
                agreableness: 5,
                Conscientiousness: 1,
                Extraversion: 1,
                Openness: 1,
                //feedback: "You tend to avoid new challenges and prefer a more predictable life."
            },
            {
                text: "Neither Agree nor Disagree",
                nueroticism: 3,
                agreableness: 3,
                Conscientiousness: 3,
                Extraversion: 3,
                Openness: 3,
                //feedback: "You are selective about the challenges you take on."
            }
        ]
    },
    {
        question: "I am very considerate of what others feel.",
        options: [
            {
                text: "Agree",
                nueroticism: 4,
                agreableness: 4,
                Conscientiousness: 2,
                Extraversion: 4,
                Openness: 2,
                //feedback: "You are open to new experiences and challenges in your life."
            },
            {
                text: "Strongly Agree",
                nueroticism: 5,
                agreableness: 5,
                Conscientiousness: 1,
                Extraversion: 5,
                Openness: 1,
                //feedback: "You actively seek out and thrive in challenging situations."
            },
            {
                text: "Disagree",
                nueroticism: 2,
                agreableness: 2,
                Conscientiousness: 4,
                Extraversion: 2,
                Openness: 4,
                //feedback: "You prefer to stick to familiar routines and avoid major challenges."
            },
            {
                text: "Strongly Disagree",
                nueroticism: 1,
                agreableness: 1,
                Conscientiousness: 5,
                Extraversion: 1,
                Openness: 5,
                //feedback: "You tend to avoid new challenges and prefer a more predictable life."
            },
            {
                text: "Neither Agree nor Disagree",
                nueroticism: 3,
                agreableness: 3,
                Conscientiousness: 3,
                Extraversion: 3,
                Openness: 3,
                //feedback: "You are selective about the challenges you take on."
            }
        ]
    },
    {
        question: "I usually conceal my feelings.",
        options: [
            {
                text: "Agree",
                nueroticism: 4,
                agreableness: 2,
                Conscientiousness: 4,
                Extraversion: 2,
                Openness: 2,
                //feedback: "You are open to new experiences and challenges in your life."
            },
            {
                text: "Strongly Agree",
                nueroticism: 5,
                agreableness: 1,
                Conscientiousness: 5,
                Extraversion: 1,
                Openness: 1,
                //feedback: "You actively seek out and thrive in challenging situations."
            },
            {
                text: "Disagree",
                nueroticism: 2,
                agreableness: 4,
                Conscientiousness: 2,
                Extraversion: 4,
                Openness: 4,
                //feedback: "You prefer to stick to familiar routines and avoid major challenges."
            },
            {
                text: "Strongly Disagree",
                nueroticism: 1,
                agreableness: 5,
                Conscientiousness: 1,
                Extraversion: 5,
                Openness: 5,
                //feedback: "You tend to avoid new challenges and prefer a more predictable life."
            },
            {
                text: "Neither Agree nor Disagree",
                nueroticism: 3,
                agreableness: 3,
                Conscientiousness: 3,
                Extraversion: 3,
                Openness: 3,
                //feedback: "You are selective about the challenges you take on."
            }
        ]
    },
    {
        question: "I enjoy taking on new challenges.",
        options: [
            {
                text: "Agree",
                nueroticism: 2,
                agreableness: 2,
                Conscientiousness: 4,
                Extraversion: 4,
                Openness: 4,
                //feedback: "You are open to new experiences and challenges in your life."
            },
            {
                text: "Strongly Agree",
                nueroticism: 1,
                agreableness: 1,
                Conscientiousness: 5,
                Extraversion: 5,
                Openness: 5,
                //feedback: "You actively seek out and thrive in challenging situations."
            },
            {
                text: "Disagree",
                nueroticism: 4,
                agreableness: 4,
                Conscientiousness: 2,
                Extraversion: 2,
                Openness: 2,
                //feedback: "You prefer to stick to familiar routines and avoid major challenges."
            },
            {
                text: "Strongly Disagree",
                nueroticism: 5,
                agreableness: 5,
                Conscientiousness: 1,
                Extraversion: 1,
                Openness: 1,
                //feedback: "You tend to avoid new challenges and prefer a more predictable life."
            },
            {
                text: "Neither Agree nor Disagree",
                nueroticism: 3,
                agreableness: 3,
                Conscientiousness: 3,
                Extraversion: 3,
                Openness: 3,
                //feedback: "You are selective about the challenges you take on."
            }
        ]
    },{
        question: "I am nervous before big events.",
        options: [
            {
                text: "Agree",
                nueroticism: 4,
                agreableness: 4,
                Conscientiousness: 2,
                Extraversion: 2,
                Openness: 2,
                //feedback: "You are open to new experiences and challenges in your life."
            },
            {
                text: "Strongly Agree",
                nueroticism: 5,
                agreableness: 5,
                Conscientiousness: 1,
                Extraversion: 1,
                Openness: 1,
                //feedback: "You actively seek out and thrive in challenging situations."
            },
            {
                text: "Disagree",
                nueroticism: 2,
                agreableness: 2,
                Conscientiousness: 4,
                Extraversion: 4,
                Openness: 4,
                //feedback: "You prefer to stick to familiar routines and avoid major challenges."
            },
            {
                text: "Strongly Disagree",
                nueroticism: 1,
                agreableness: 1,
                Conscientiousness: 5,
                Extraversion: 5,
                Openness: 5,
                //feedback: "You tend to avoid new challenges and prefer a more predictable life."
            },
            {
                text: "Neither Agree nor Disagree",
                nueroticism: 3,
                agreableness: 3,
                Conscientiousness:3 ,
                Extraversion: 3,
                Openness: 3,
                //feedback: "You are selective about the challenges you take on."
            }
        ]
    },
    {
        question:"I enjoy setting long term goals.",
        options: [
            {
                text: "Agree",
                nueroticism: 2,
                agreableness: 2,
                Conscientiousness: 4,
                Extraversion: 2,
                Openness: 4,
                //feedback: "You are open to new experiences and challenges in your life."
            },
            {
                text: "Strongly Agree",
                nueroticism: 1,
                agreableness: 1,
                Conscientiousness: 5,
                Extraversion: 1,
                Openness: 5,
                //feedback: "You actively seek out and thrive in challenging situations."
            },
            {
                text: "Disagree",
                nueroticism: 4,
                agreableness: 4,
                Conscientiousness: 2,
                Extraversion: 4,
                Openness: 2,
                //feedback: "You prefer to stick to familiar routines and avoid major challenges."
            },
            {
                text: "Strongly Disagree",
                nueroticism: 5,
                agreableness:5 ,
                Conscientiousness: 1,
                Extraversion: 5,
                Openness: 1,
                //feedback: "You tend to avoid new challenges and prefer a more predictable life."
            },
            {
                text: "Neither Agree nor Disagree",
                nueroticism: 3,
                agreableness:3 ,
                Conscientiousness: 3,
                Extraversion: 3,
                Openness: 3,
                //feedback: "You are selective about the challenges you take on."
            }
        ]
    }
   
];


let currentQuestionIndex = 0;
let result_nueroticism=0,result_agreableness=0,result_conscientiousness=0,result_extraversion=0,result_openness=0;
let per_neur=0,per_agree=0,per_cons=0,per_extra=0,per_open=0;

const questionContainer = document.querySelector('.question-container');
const optionsList = document.querySelector('.options');
const submitButton = document.getElementById('submit-btn');

function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    document.querySelector('.question').textContent = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;
    optionsList.innerHTML = '';
    
    currentQuestion.options.forEach((option, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <label for="question${String.fromCharCode(97 + index)}"><input type="radio" id="question${String.fromCharCode(97 + index)}" name="q${currentQuestionIndex}" value="${String.fromCharCode(97 + index)}" neuroticism="${option.nueroticism}" agreableness="${option.agreableness}" conscientiousness="${option.Conscientiousness}" extraversion="${option.Extraversion}" openness="${option.Openness}">
            ${option.text}
            </label>
        `;
        optionsList.appendChild(listItem);
    });
}

function submitAnswer() {
    const selectedOption = document.querySelector(`input[name="q${currentQuestionIndex}"]:checked`);
    if (!selectedOption) {
        alert('Please select an option before submitting.');
        return;
    }

    const userAnswer = selectedOption.value;
    result_nueroticism += parseInt(selectedOption.getAttribute("neuroticism"));
    result_agreableness += parseInt(selectedOption.getAttribute("agreableness"));
    result_conscientiousness += parseInt(selectedOption.getAttribute("Conscientiousness"));
    result_extraversion += parseInt(selectedOption.getAttribute("Extraversion"));
    result_openness += parseInt(selectedOption.getAttribute("Openness"));
        
	per_neur=result_nueroticism*100/75;
	per_agree=result_agreableness*100/65;
	per_cons=result_conscientiousness*100/75;
	per_extra=result_extraversion*100/75;
	per_open=result_openness *100/75;
	
    currentQuestionIndex++;
	
    if (currentQuestionIndex < quizQuestions.length) {
        displayQuestion();
    } else {
		var myArray = [per_neur, per_agree, per_open, per_extra, per_cons];
		localStorage.setItem('myArray', JSON.stringify(myArray));
		questionContainer.innerHTML = '<p>Quiz completed!<button type="button" id="viewResult" class="mx-2 btn btn-primary" onclick="window.location.href = \'result.html\';">View result</button></p>';	
        optionsList.innerHTML = '';
        submitButton.style.display = 'none';    
	}
}

submitButton.addEventListener('click', () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
        submitAnswer();
        submitButton.textContent = 'Next';
    } else {
        submitAnswer();
        submitButton.style.display = 'none';
    }
});

displayQuestion();
/*$(function () {
    $("#viewResult").bind("click", function () {
        $.cookie("Neuroticism",per_neur);
        $.cookie("Agreableness", per_agree);
        $.cookie("Openness",per_open);
        $.cookie("Extraversion", per_extra);
        $.cookie("Conscientiousness", per_cons);
        window.location.href = "result.html";
    });
});*/

