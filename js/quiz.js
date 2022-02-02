let questions = [{
        id: 1,
        question: "The number of oscillations or vibrations per second is called ",
        answer: "Frequency",
        options: [
            "Hertz",
            "Pitch",
            "Frequency",
            "Amplitude"
        ]
    },
    {
        id: 2,
        question: "Which of the following liquid does not conduct electricity?",
        answer: "Distilled water",
        options: [
            "Lemon Juice",
            "Sea Water",
            "Tap water",
            "Distilled water"
        ]
    },
    {
        id: 3,
        question: "Taps and towel rails are usually coated with ",
        answer: "Chromium",
        options: [
            "Chromium",
            "Zinc",
            "Silver",
            "Iron"
        ]
    },
    {
        id: 4,
        question: "The angle of incidence is the angle between the normal and the",
        answer: "Incident Ray",
        options: [
            "Mirror",
            "Reflected Ray",
            "Incident Ray",
            "None of these"
        ]
    },
    {
        id: 5,
        question: "In which of the following the process of electrolysis is used?",
        answer: "Electrplating",
        options: [
            "Electrplating",
            "Electrorefining",
            "Electrotyping",
            "All of the above"
        ]
    },
    {
        id: 6,
        question: "Other than the sun,the nearest star to the earth is",
        answer: "Alpha Centauri",
        options: [
            "Sirius",
            "Alpha Centauri",
            "Pole star",
            "Polaris"
        ]
    },
    {
        id: 7,
        question: "What is the distance between the Sun and the earth?",
        answer: "150 million km",
        options: [
            "100 billion km",
            "100 million km",
            "150 billion km",
            "150 million km"
        ]
    },
    {
        id: 8,
        question: "Which of the following is not a contact force?",
        answer: "Magnetic Force",
        options: [
            "Muscular Force",
            "Magnetic Force",
            "Frction",
            "None of these"
        ]
    },
    {
        id: 9,
        question: "What is the size of the asteroid Ceres?",
        answer: "772km",
        options: [
            "772km",
            "727km",
            "1027km",
            "872km"
        ]
    },
    {
        id: 10,
        question: "Halley's comet comes after every ",
        answer: "76yrs",
        options: [
            "73yrs",
            "86yrs",
            "78yrs",
            "76yrs"
        ]
    },
    {
        id: 11,
        question: "Which of the following produces sound in humans?",
        answer: "Vocal Cords",
        options: [
            "Vocal Cords",
            "Trachea",
            "Tongue",
            "Stapes"
        ]
    },
    {
        id: 12,
        question: "A force can do which of the follwing?",
        answer: "All the above",
        options: [
            "Change direction of motion",
            "Speed up motion",
            "Slow down motion",
            "All the above"
        ]
    },
    {
        id: 13,
        question: "Most of the liquids that conducts electricity are?",
        answer: "All the above",
        options: [
            "Acids",
            "Bases",
            "salts",
            "All the above"
        ]
    },
    {
        id: 14,
        question: "Light enters the eyes through",
        answer: "Cornea",
        options: [
            "Cornea",
            "Iris",
            "Lens",
            "Pupil"
        ]
    },
    {
        id: 15,
        question: "How many images will be produced by two plane mirrors placed at right angle to each other?",
        answer: "3",
        options: [
            "2",
            "3",
            "4",
            "5"
        ]
    },
    {
        id: 16,
        question: "In which of the following beautiful patterns are formed due to multiple reflection?",
        answer: "kaleidoscope",
        options: [
            "Periscope",
            "Telescope",
            "kaleidoscope",
            "None of the above"
        ]
    },
    {
        id: 17,
        question: "What is the audible range of sound that humans can hear?",
        answer: "20 to 20000hz",
        options: [
            "20 to 20000hz",
            "10 to 20000hz",
            "20 to 30000hz",
            "10 to 30000hz"
        ]
    },
    {
        id: 18,
        question: "Sound cannot travel through?",
        answer: "vacuum",
        options: [
            "vacuum",
            "solids",
            "liquids",
            "gases"
        ]
    },
    {
        id: 19,
        question: "The force of interaction which exists between two magnetic poles is called?",
        answer: "Magnetic force",
        options: [
            "Magnetic force",
            "Electrostatic force",
            "Gravitational force",
            "None of the above"
        ]
    },
    {
        id: 20,
        question: "To draw water from the well we have to_______ at the rope?",
        answer: "pull",
        options: [
            "pull",
            "push",
            "both push and pull",
            "none of the above"
        ]
    },



];

let value = JSON.stringify(questions);
localStorage.setItem("question", value);


let question_count = 0;
let points = 0;

window.onload = function () {
    show(question_count);
};

function next() {
    if (question_count == questions.length) {
        location.href = "end.html";
    }
    console.log(question_count);

    let user_answer = document.querySelector("li.option.active").innerHTML;
    if (user_answer == questions[question_count].answer) {
        points += 1;
        sessionStorage.setItem("points", points);
    } else {
        points += 0;
        sessionStorage.setItem("points", points);
    }
    console.log(points);

    question_count++;
    show(question_count);
}

function show(count) {
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;

    question.innerHTML = `
    <h2>${questions[count].question}</h2>
     <ul class="option_group">
    <li class="option">${first}</li><br><br>
    <li class="option">${second}</li><br><br>
    <li class="option">${third}</li><br><br>
    <li class="option">${fourth}</li><br><br>
  </ul> 
    `;
    toggleActive();
}

function toggleActive() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let i = 0; i < option.length; i++) {
                if (option[i].classList.contains("active")) {
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        };
    }
}