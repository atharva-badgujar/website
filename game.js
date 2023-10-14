const player = document.getElementById("player");
const destination = document.getElementById("destination");
const platforms = document.querySelectorAll(".platform");

let playerX = 50;
let playerY = 0;
let playerVelocityX = 0;
let playerVelocityY = 0;
const gravity = 0.2;
const jumpStrength = 5;
const platformFriction = 0.95;

const destinationZone = {
    x: 700,
    y: 50,
    width: 40,
    height: 40
};

function gameLoop() {
    // Update player position
    playerVelocityY += gravity;
    playerX += playerVelocityX;
    playerY += playerVelocityY;

    // Check for collisions with platforms
    for (const platform of platforms) {
        const rect = platform.getBoundingClientRect();
        if (
            playerY > rect.top - 20 && // Adjust this value for more accurate collision detection
            playerY < rect.bottom &&
            playerX > rect.left &&
            playerX < rect.right
        ) {
            playerY = rect.top - 20;
            playerVelocityY = 0;
        }
    }

    // Apply platform friction
    playerVelocityX *= platformFriction;

    // Check for destination zone
    if (
        playerX >= destinationZone.x &&
        playerX <= destinationZone.x + destinationZone.width &&
        playerY >= destinationZone.y &&
        playerY <= destinationZone.y + destinationZone.height
    ) {
        alert("You reached the destination!");
        location.reload();
    }

    // Update player position
    player.style.left = playerX + "px";
    player.style.bottom = playerY + "px";

    requestAnimationFrame(gameLoop);
}

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        playerVelocityX = 2;
    } else if (event.key === "ArrowLeft") {
        playerVelocityX = -2;
    } else if (event.key === "ArrowUp" && playerY === 0) {
        playerVelocityY = jumpStrength;
    }
});

gameLoop();
