document.querySelectorAll(".titulo").forEach(titulo => {
    titulo.addEventListener("mouseover", () => {
        titulo.nextElementSibling.style.display = "block";
    });

    titulo.addEventListener("mouseout", () => {
        titulo.nextElementSibling.style.display = "none";
    });
});
