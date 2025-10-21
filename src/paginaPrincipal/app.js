

//Funcion para el scroll con el mouse

const container = document.getElementById('container-targets');

container.addEventListener('wheel', (evt) => {

    const scrollSpeed = 2; // Aumenta o reduce para ajustar la fluidez

    // Desplazamiento horizontal fluido
    container.scrollBy({
        left: evt.deltaY * scrollSpeed,
        behavior: 'smooth'
    });
}, { passive: false });





//Funcion abrir modal

const containerModal = document.getElementById("container-modal");
const btnOpelModal = document.getElementById("btn-openModal");

btnOpelModal.addEventListener("click", () => {

    containerModal.style.display = "block";

})

//Cerrar modal

const bntCloseModal = document.getElementById("btn-close");

bntCloseModal.addEventListener("click", () => {
    containerModal.style.display = "none";
    console.log("click");
})