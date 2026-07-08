const PASSWORD = "1107";

const login = document.getElementById("login");
const main = document.getElementById("main");
const password = document.getElementById("password");
const error = document.getElementById("error");
const music = document.getElementById("music");
const heartContainer = document.getElementById("heart-container");

password.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        checkPassword();
    }
});

function checkPassword() {

    if (password.value === PASSWORD) {

        login.style.display = "none";
        main.style.display = "flex";

        if (music) {
            music.play().catch(() => {});
        }

        confetti({
            particleCount: 250,
            spread: 120,
            origin: { y: 0.6 }
        });

        startHearts();

    } else {

        error.innerHTML = "❌ Wrong Password!";
        error.style.color = "#ffb3c7";

        password.value = "";

        password.focus();

    }

}

function startHearts() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = "💖";

        heart.style.left = Math.random() * 100 + "%";

        heart.style.animationDuration =
            (4 + Math.random() * 4) + "s";

        heart.style.fontSize =
            (20 + Math.random() * 30) + "px";

        heartContainer.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        },8000);

    },250);

}function hearts() {

    confetti({
        particleCount: 400,
        spread: 180,
        origin: { y: 0.5 }
    });

    for (let i = 0; i < 120; i++) {

        setTimeout(() => {

            const heart = document.createElement("div");

            heart.className = "heart";

            const emojis = ["💖","💕","💗","💝","❤️","💞"];

            heart.innerHTML =
                emojis[Math.floor(Math.random()*emojis.length)];

            heart.style.left = Math.random()*100 + "%";

            heart.style.animationDuration =
                (3 + Math.random()*3) + "s";

            heart.style.fontSize =
                (20 + Math.random()*35) + "px";

            heartContainer.appendChild(heart);

            setTimeout(()=>{
                heart.remove();
            },7000);

        }, i*35);

    }

    const msg = document.createElement("div");

    msg.innerHTML =
    "💖 I am so lucky to have you 💖";

    msg.style.position="fixed";
    msg.style.left="50%";
    msg.style.top="50%";
    msg.style.transform="translate(-50%,-50%)";
    msg.style.padding="25px 40px";
    msg.style.background="rgba(255,255,255,.15)";
    msg.style.backdropFilter="blur(15px)";
    msg.style.borderRadius="20px";
    msg.style.fontSize="32px";
    msg.style.fontWeight="700";
    msg.style.color="white";
    msg.style.textAlign="center";
    msg.style.boxShadow="0 0 35px hotpink";
    msg.style.zIndex="9999";

    document.body.appendChild(msg);

    setTimeout(()=>{

        msg.style.transition="1s";
        msg.style.opacity="0";

        setTimeout(()=>{
            msg.remove();
        },1000);

    },3500);

}

/* Cursor Hearts */

document.addEventListener("click",(e)=>{

    const heart=document.createElement("div");

    heart.innerHTML="💖";

    heart.style.position="fixed";

    heart.style.left=e.clientX+"px";

    heart.style.top=e.clientY+"px";

    heart.style.fontSize="30px";

    heart.style.pointerEvents="none";

    heart.style.transition="1.5s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform="translateY(-120px) scale(2)";

        heart.style.opacity="0";

    },20);

    setTimeout(()=>{

        heart.remove();

    },1600);

});

/* Auto Focus */

window.onload=()=>{

    password.focus();

};
