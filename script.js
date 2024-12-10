// Variables
const modal = document.getElementById("modal");
const input = document.getElementById("link");
const btn = document.getElementById("btn");
const close = document.getElementsByClassName("close")[0];

btn.addEventListener("click", openPopup);
close.addEventListener("click", closePopup);

// Open popup function
function openPopup(e) {
    e.preventDefault();
    modal.style.display = "block";
    startCountDown();
}

// Close popup
function closePopup() {
    // e.preventDefault();
    modal.style.display = "none";
}

window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}

// Counter function
let reverseCounter = 10;
let progressBar = document.getElementById("pbar");
let counting = document.getElementById("counting");

function startCountDown() {
    let downloadTimer = setInterval(() => {
        progressBar.value = 10 - (--reverseCounter);
        if (reverseCounter <= -1) {
            clearInterval(downloadTimer);
            closePopup();
            window.open(input.value, "_blank");
        }
        counting.innerHTML = reverseCounter;
    }, 1000)
    reverseCounter = 10;
    progressBar.value = 10 - (--reverseCounter);
}