document.addEventListener("DOMContentLoaded", function () {
    var container = document.querySelector(".hearts-container");

    function crearEmoji() {
        if (!container) return;

        var emoji = document.createElement("div");
        emoji.className = "heart";
        emoji.innerHTML = "🎉";

        emoji.style.left = Math.random() * 100 + "vw";

        container.appendChild(emoji);

        setTimeout(function () {
            emoji.remove();
        }, 4000);
    }

    setInterval(crearEmoji, 200);
});

function mostrarMensaje() {
    var extra = document.getElementById("extra");
    if (extra) {
        extra.style.display = "block";
    }
}
