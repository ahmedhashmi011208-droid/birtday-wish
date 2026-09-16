// ===============================
// Birthday Surprise JavaScript
// ===============================

const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseMessage = document.getElementById("surpriseMessage");


// Button Click
surpriseBtn.addEventListener("click", () => {

    // Show surprise message
    surpriseMessage.classList.remove("hidden");

    // Change button text
    surpriseBtn.innerHTML = "🎉 Happy Birthday Abdullah!";

    // Disable button
    surpriseBtn.disabled = true;

    // Start celebration
    createConfetti();
    createFireworks();

});


// ===============================
// CONFETTI
// ===============================

function createConfetti() {

    const colors = [
        "#a855f7",
        "#ec4899",
        "#ffd166",
        "#4cc9f0",
        "#06d6a0",
        "#ffffff"
    ];

    for (let i = 0; i < 120; i++) {

        const confetti = document.createElement("div");

        confetti.style.position = "fixed";
        confetti.style.width = "8px";
        confetti.style.height = "14px";

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";

        confetti.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        confetti.style.zIndex = "10";

        confetti.style.pointerEvents = "none";

        confetti.style.borderRadius = "2px";

        confetti.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        const duration = Math.random() * 3 + 2;

        confetti.style.transition =
            `top ${duration}s linear, transform ${duration}s linear`;

        document.body.appendChild(confetti);


        // Start falling
        setTimeout(() => {

            confetti.style.top = "110vh";

            confetti.style.transform =
                `rotate(${Math.random() * 1000}deg)`;

        }, 50);


        // Remove
        setTimeout(() => {

            confetti.remove();

        }, duration * 1000 + 500);

    }

}


// ===============================
// FIREWORKS
// ===============================

function createFireworks() {

    for (let i = 0; i < 12; i++) {

        setTimeout(() => {

            const firework = document.createElement("div");

            firework.style.position = "fixed";

            firework.style.left =
                (10 + Math.random() * 80) + "vw";

            firework.style.top =
                (10 + Math.random() * 65) + "vh";

            firework.style.width = "6px";
            firework.style.height = "6px";

            firework.style.borderRadius = "50%";

            firework.style.background = "#fff";

            firework.style.zIndex = "9";

            firework.style.boxShadow = `
                0 -70px #ff4d6d,
                50px -50px #ffd166,
                70px 0 #06d6a0,
                50px 50px #4cc9f0,
                0 70px #c77dff,
                -50px 50px #ff8fab,
                -70px 0 #ffffff,
                -50px -50px #a855f7
            `;

            firework.style.animation =
                "fireworkExplosion 1.2s ease-out forwards";

            document.body.appendChild(firework);


            setTimeout(() => {

                firework.remove();

            }, 1300);

        }, i * 250);

    }

}


// ===============================
// Firework Animation
// ===============================

const style = document.createElement("style");

style.innerHTML = `

@keyframes fireworkExplosion {

    0% {
        transform: scale(0);
        opacity: 1;
    }

    40% {
        transform: scale(1);
        opacity: 1;
    }

    100% {
        transform: scale(1.8);
        opacity: 0;
    }

}

`;

document.head.appendChild(style);