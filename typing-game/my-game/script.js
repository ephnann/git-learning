// Get a reference to the image element
const image = document.getElementById("image");

// Function to set a random position for the image
function setRandomPosition() {
    const randomX = Math.random() * (window.innerWidth - image.width);
    const randomY = Math.random() * (window.innerHeight - image.height);

    // Set the image's position
    image.style.position = "absolute";
    image.style.left = randomX + "px";
    image.style.top = randomY + "px";
}

// Function to move the image
function moveImage(event) {
    const step = 10; // Adjust the step size as needed
    switch (event.key) {
        case "ArrowUp":
        case "W":
        case "w":
            image.style.top = (parseInt(image.style.top) - step) + "px";
            break;
        case "ArrowDown":
        case "S":
        case "s":
            image.style.top = (parseInt(image.style.top) + step) + "px";
            break;
        case "ArrowLeft":
        case "A":
        case "a":
            image.style.left = (parseInt(image.style.left) - step) + "px";
            break;
        case "ArrowRight":
        case "D":
        case "d":
            image.style.left = (parseInt(image.style.left) + step) + "px";
            break;
    }
}

// Set the initial random position
setRandomPosition();

// Get a reference to the refresh button
const refreshButton = document.getElementById("refreshButton");

// Add a click event listener to the refresh button
refreshButton.addEventListener("click", setRandomPosition);

// Add a keydown event listener to the document to move the image
document.addEventListener("keydown", moveImage);
