document.addEventListener("DOMContentLoaded", function () {
    var container = document.querySelector(".hearts-container");

    function crearEmoji() {
        if (!container) return;

        var emoji = document.createElement("div");
        emoji.className = "heart";
        emoji.innerHTML = "🎉";
        emoji.style.fontSize = (Math.random() * 40 + 30) + "px";

        

        container.appendChild(emoji);

        setTimeout(function () {
            emoji.remove();
        }, 4000);
    }

    setInterval(crearEmoji, 50);
});

function mostrarMensaje() {
    var extra = document.getElementById("extra");
    if (extra) {
        extra.style.display = "block";
    }
}
