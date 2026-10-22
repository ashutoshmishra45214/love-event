/* ===================================
   LOVE ADVENTURE ❤️
   SCRIPT.JS
=================================== */

// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", () => {

    const petals = document.getElementById("petals");
    const stars = document.getElementById("stars");

createStars();
function createStars() {

    for (let i = 0; i < 150; i++) {

        const star = document.createElement("div");

        star.classList.add("star");

        star.style.left = Math.random() * window.innerWidth + "px";
        star.style.top = Math.random() * window.innerHeight + "px";

        const size = Math.random() * 3 + 1;

        star.style.width = size + "px";
        star.style.height = size + "px";

        star.style.animationDelay = Math.random() * 2 + "s";

        stars.appendChild(star);

    }

}
function createShootingStar() {

    const shootingStars = document.getElementById("shooting-stars");

    const star = document.createElement("div");

    star.style.position = "absolute";
    star.style.top = Math.random() * 250 + "px";
    star.style.left = "-150px";

    star.style.width = "140px";
    star.style.height = "2px";

    star.style.background =
        "linear-gradient(to right, white, rgba(255,255,255,0))";

    star.style.transform = "rotate(-25deg)";
    star.style.boxShadow = "0 0 12px white";

    shootingStars.appendChild(star);

    star.animate(
        [
            {
                transform: "translate(0,0) rotate(-25deg)",
                opacity: 1
            },
            {
                transform: "translate(1500px,500px) rotate(-25deg)",
                opacity: 0
            }
        ],
        {
            duration: 1800,
            easing: "linear"
        }
    );

    setTimeout(() => {
        star.remove();
    }, 1800);

}
    function createPetal() {

      const petal = document.createElement("img");

        petal.classList.add("petal");
        const tulips = [
    "images/tulips/petal1.png",
    "images/tulips/petal2.png",
    
];

petal.src = tulips[Math.floor(Math.random() * tulips.length)];

        // Random horizontal position
        petal.style.left = Math.random() * window.innerWidth + "px";

        // Random size
        const size = 30 + Math.random() * 25;

petal.style.width = size + "px";
petal.style.height = "auto";

petal.style.pointerEvents = "none";
petal.style.userSelect = "none";
        // Random falling speed
        const duration = 6 + Math.random() * 5;

        petal.animate(
            [
                {
                    transform: "translateY(-50px) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform: `translateY(${window.innerHeight + 100}px) translateX(${Math.random() * 200 - 100}px) rotate(720deg)`,
                    opacity: 0.8
                }
            ],
            {
                duration: duration * 1000,
                easing: "linear"
            }
        );

        petals.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, duration * 1000);

    }

    // Create a new petal every 300ms
   if (window.innerWidth < 768) {
    setInterval(createPetal, 700);
} else {
    setInterval(createPetal, 300);
}
    setInterval(createShootingStar, 5000);
    const giftBtn = document.getElementById("giftBtn");
const envelopeContainer = document.getElementById("envelope-container");
const envelope = document.getElementById("envelope");
const closeEnvelope = document.getElementById("closeEnvelope");



    giftBtn.addEventListener("click", () => {

    envelopeContainer.style.display = "flex";

    envelope.classList.remove("open");

    requestAnimationFrame(() => {

        setTimeout(() => {

            envelope.classList.add("open");

        }, 300);

    });

});

closeEnvelope.addEventListener("click", () => {

    envelope.classList.remove("open");

    setTimeout(() => {

        envelopeContainer.style.display = "none";

    }, 500);

});

// ===== Memory Card Scroll Animation =====

const cards = document.querySelectorAll(".memory-card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.25
});

cards.forEach(card => observer.observe(card));

// ===== Forever Counter =====

const startDate = new Date("2023-05-05T00:00:00");

function updateForeverCounter() {

    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }

    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));

    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = years * 12 + months;
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;

}

updateForeverCounter();
setInterval(updateForeverCounter, 60000);

// ===== Final Surprise =====

const surpriseBtn = document.getElementById("surpriseBtn");
const loveMessage = document.getElementById("loveMessage");

const tulipGame = document.getElementById("tulipGame");

surpriseBtn.addEventListener("click", () => {

    surpriseBtn.style.display = "none";

    tulipGame.style.display = "block";

    loveMessage.style.display = "none";

    for(let i = 0; i < 40; i++){

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = (20 + Math.random()*30) + "px";
        heart.style.pointerEvents = "none";
        heart.style.transition = "transform 5s linear, opacity 5s linear";
        heart.style.zIndex = "9999";

        document.body.appendChild(heart);

        requestAnimationFrame(() => {
            heart.style.transform = `translateY(-120vh)`;
            heart.style.opacity = "0";
        });

        setTimeout(() => heart.remove(), 5000);
    }

});

// ===========================
// LOADING SCREEN
// ===========================

const loadingScreen = document.getElementById("loading-screen");

window.addEventListener("load", () => {

    setTimeout(() => {

        loadingScreen.classList.add("hide");

    }, 2000);

});


// ===========================
// CLICK HEARTS
// ===========================

document.addEventListener("click", (e) => {

    for(let i = 0; i < 5; i++){

        const heart = document.createElement("div");

        heart.className = "click-heart";
        heart.innerHTML = "❤️";

        heart.style.left = (e.clientX + (Math.random()*60 - 30)) + "px";
        heart.style.top = (e.clientY + (Math.random()*30 - 15)) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 2000);

    }

});
// ===========================
// ENDING STARS
// ===========================

const endingStars = document.getElementById("ending-stars");
const finalSection = document.getElementById("final-surprise");

for(let i = 0; i < 80; i++){

    const star = document.createElement("div");

    star.className = "end-star";

    star.style.left = Math.random()*100 + "%";
    star.style.top = Math.random()*100 + "%";
    star.style.animationDelay = Math.random()*2 + "s";

    endingStars.appendChild(star);

}

const finalObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            endingStars.classList.add("active");

        }else{

            endingStars.classList.remove("active");

        }

    });

},{threshold:.4});

finalObserver.observe(finalSection);
// ===========================
// MUSIC PLAYER
// ===========================

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

bgMusic.volume = 0.35;

musicBtn.addEventListener("click", () => {

    if(bgMusic.paused){

        bgMusic.play();

        musicBtn.textContent = "⏸ Pause Music";

    }else{

        bgMusic.pause();

        musicBtn.textContent = "🎵 Play Our Song";

    }

})
});// ===========================
// TULIP GAME
// ===========================

const flowers = document.querySelectorAll(".flower");
const gameHint = document.getElementById("gameHint");
// Choose one random tulip every time the page loads

const tulipList = [];

flowers.forEach(flower => {

    if (flower.textContent.trim() === "🌷"){

        tulipList.push(flower);

    }

});

const randomTulip =
    tulipList[Math.floor(Math.random() * tulipList.length)];

randomTulip.classList.add("specialTulip");

flowers.forEach(flower => {

    flower.addEventListener("click", () => {

        if(flower.classList.contains("specialTulip")){

            gameHint.innerHTML = "🌷 You found my special flower! ❤️";

            flower.style.transform = "scale(1.6)";

            setTimeout(() => {

                document.getElementById("tulipGame").style.display = "none";

              loveMessage.style.display = "block";

setTimeout(() => {

    loveMessage.classList.add("showLetter");

},100); 
startTypewriter();

            },1500);

        }else{

            gameHint.innerHTML = "😊 Not this one... Try again ❤️";

            flower.style.transform = "scale(0.8)";

            setTimeout(()=>{

                flower.style.transform="scale(1)";

            },200);

        }

    });

});
// ===========================
// TYPEWRITER EFFECT
// ===========================

const typewriter = document.getElementById("typewriter");

const originalHTML = typewriter.innerHTML;

typewriter.innerHTML = "";

function startTypewriter(){

    typewriter.innerHTML = "";

    let i = 0;

    function type(){

        if(i < originalHTML.length){

            typewriter.innerHTML += originalHTML.charAt(i);

            i++;

            setTimeout(type,18);

        }

    }

    type();

}
// ===============================
// FINAL QUESTION
// ===============================

const finalQuestion = document.getElementById("finalQuestion");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const questionResponse = document.getElementById("questionResponse");

let noCount = 0;

// Show the question when the page reaches the bottom
window.addEventListener("scroll", () => {

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {

        finalQuestion.style.display = "block";

    }

});

yesBtn.addEventListener("click", () => {

    questionResponse.innerHTML =
    "💋🥰❤️ You just made me the happiest person alive! aaj 2 baje tak peeta but sawan hai ❤️💋";
    const yesRect = yesBtn.getBoundingClientRect();

const centerX = yesRect.left + yesRect.width / 2;
const centerY = yesRect.top + yesRect.height / 2;

for (let i = 0; i < 120; i++) {

    const heart = document.createElement("div");

    heart.className = "explode-heart";
    heart.innerHTML = "❤️";

    heart.style.left = centerX + "px";
    heart.style.top = centerY + "px";

    const angle = Math.random() * Math.PI * 2;
    const distance = 80 + Math.random() * 220;

    heart.style.setProperty("--x", Math.cos(angle) * distance);
    heart.style.setProperty("--y", Math.sin(angle) * distance);

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000);
}
setTimeout(() => {

    const finaleOverlay = document.getElementById("finaleOverlay");
document.getElementById("petals").style.display = "none";
document.getElementById("shooting-stars").style.display = "none";
    finaleOverlay.classList.add("show");

    const petalInterval = setInterval(() => {

        const petal = document.createElement("div");

        petal.className = "finale-petal";
        petal.innerHTML = "🌹";

        petal.style.left = Math.random() * 100 + "vw";
        petal.style.animationDuration = (4 + Math.random() * 3) + "s";
        petal.style.setProperty(
            "--drift",
            (Math.random() * 200 - 100) + "px"
        );

        document.body.appendChild(petal);

        setTimeout(() => {
            petal.remove();
        }, 7000);

    }, 180);

    setTimeout(() => {

    clearInterval(petalInterval);

    finaleOverlay.classList.remove("show");

    document
        .getElementById("finalPromise")
        .classList.remove("show");

}, 8000);

}, 3000);
});

noBtn.addEventListener("click", () => {

    noCount++;

    if(noCount === 1){

        questionResponse.innerHTML =
        "🥺 Really...?";

    }

    else if(noCount === 2){

        questionResponse.innerHTML =
        "😢 You don't want me forever?";

    }

    else if(noCount === 3){

        questionResponse.innerHTML =
        "😭 Think again...";

    }

    else{

        questionResponse.innerHTML =
        "🥹 I'll keep hoping you'll press YES ❤️";

    }

});
const secretHeart = document.getElementById("secretHeart");
const secretMessage = document.getElementById("secretMessage");

secretHeart.addEventListener("click", () => {
    secretMessage.classList.add("show");
});

secretMessage.addEventListener("click", () => {
    secretMessage.classList.remove("show");
});
