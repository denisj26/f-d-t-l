document.addEventListener("DOMContentLoaded", function () {

    const container = document.querySelector(".hearts-container");

    function crearEmoji() {
        if (!container) return;

        const emoji = document.createElement("div");
        emoji.classList.add("heart");
        emoji.innerHTML = "🎉";

        emoji.style.left = Math.random() * 100 + "vw";
        emoji.style.fontSize = (Math.random() * 20 + 15) + "px";
        emoji.style.animationDuration = (Math.random() * 2 + 3) + "s";

        container.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 5000);
    }

    setInterval(crearEmoji, 100);
});

/* 🎉 Mostrar mensaje + confeti */
function mostrarMensaje() {
    const extra = document.getElementById("extra");

    if (extra) {
        extra.style.display = "block";
    }

    for (let i = 0; i < 80; i++) {
        const confeti = document.createElement("div");
        confeti.classList.add("confeti");

        confeti.style.left = Math.random() * window.innerWidth + "px";
        confeti.style.backgroundColor = coloresRandom();

        document.body.appendChild(confeti);

        setTimeout(() => {
            confeti.remove();
        }, 3000);
    }
}

function coloresRandom() {
    const colores = ["#2196f3", "#64b5f6", "#1976d2", "#0d47a1", "#42a5f5"];
    return colores[Math.floor(Math.random() * colores.length)];
}
