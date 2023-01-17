// Difficulty: 3

function* getStop() {
    yield "Navvab"
    yield "Sadi"
    yield "Imam Khomeini"
    yield "15 Khordad"
    yield "Monirieh"
}

const tehranTrainline = getStop();
const nextStopButton = document.querySelector("#next-stop");
nextStopButton.addEventListener("click", () => {
  let currStop = tehranTrainline.next();
  if (currStop.done) {
    console.log("We made it!");
    nextStopButton.setAttribute("disabled", true);
  } else {
    console.log(currStop.value);
  }
});