

//Funcion para el scroll con el mouse

const container = document.getElementById('container-targets');

container.addEventListener('wheel', (evt) => {
    const isHorizontalScroll = Math.abs(evt.deltaY) > Math.abs(evt.deltaX);
    if (isHorizontalScroll) {
        evt.preventDefault();
        container.scrollLeft += evt.deltaY;
    }
});

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