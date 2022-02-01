var points = sessionStorage.getItem("points");

var answerkeyb = document.getElementById("answerkeyb")
var head_result = document.getElementById("result-header");
var body_result = document.getElementById("result-body");

if (points >= 17) {
    head_result.innerText = "Excellent! You’ve got " + points + " out of 20 right";
    body_result.innerText = "You worked hard and it paid off! Nice work figuring out these tough questions, you earned it buddy!";
} else if (points >= 11) {
    head_result.innerText = "Good Job! You’ve got  " + points + " out of 20 right";
    body_result.innerText = "U prepared well but a little bit practice is required, but that doesn’t mean you shouldn’t try."
} else {
    head_result.innerText = "Not Bad! You’ve got only  " + points + " out of 20 right";
    body_result.innerText = "Not bad score but it can be improved.Practice more!!."
}

function reset() {
    location.href = "./index.html"
}

answerkeyb.onclick = () => {
    location.href = "./js/answerkey.html"
}