// Get references to buttons and elements
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

// Function to handle updating the progress bar
function update() {
    // Update the active state of the circles
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });

    // Calculate the width of the progress bar
    const progressWidth = ((currentActive - 1) / (circles.length - 1)) * 100;
    progress.style.width = `${progressWidth}%`;

    // Enable or disable buttons based on currentActive
    prev.disabled = currentActive === 1;
    next.disabled = currentActive === circles.length;
}

// Event listeners for the buttons
next.addEventListener("click", () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
});

prev.addEventListener("click", () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    update();
});
