// Obtener referencias a los elementos del DOM
var modal = document.getElementById("myModal");
var videoModal = document.getElementById("videoModal");
var thirdImageModal = document.getElementById("thirdImageModal");
var imgModalTrigger = document.getElementById("imgModalTrigger");
var videoModalTrigger = document.getElementById("videoModalTrigger");
var thirdImageModalTrigger = document.getElementById("thirdImageModalTrigger");
var closeModalBtn = document.getElementById("closeModalBtn");
var closeVideoModalBtn = document.getElementById("closeVideoModalBtn");
var closeThirdImageModalBtn = document.getElementById("closeThirdImageModalBtn");

// Abrir el modal de funciones
imgModalTrigger.onclick = function () {
    modal.style.display = "block";
};

// Abrir el modal del video de estructura de datos
videoModalTrigger.onclick = function () {
    videoModal.style.display = "block";
};

// Abrir el modal del video de manejo de errores
thirdImageModalTrigger.onclick = function () {
    thirdImageModal.style.display = "block";
};

// Cerrar el modal de funciones
closeModalBtn.onclick = function () {
    modal.style.display = "none";
};

// Cerrar el modal del video de estructura de datos
closeVideoModalBtn.onclick = function () {
    videoModal.style.display = "none";
};

// Cerrar el modal del video de manejo de errores
closeThirdImageModalBtn.onclick = function () {
    thirdImageModal.style.display = "none";
};

// Cerrar modales al hacer clic fuera de ellos
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    } else if (event.target == videoModal) {
        videoModal.style.display = "none";
    } else if (event.target == thirdImageModal) {
        thirdImageModal.style.display = "none";
    }
};