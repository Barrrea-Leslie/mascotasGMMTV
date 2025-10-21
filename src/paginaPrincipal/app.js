

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

//Funcion para el menu de opciones




/* container.addEventListener("mouseover", (e) => {
    const tarjeta = e.target.closest(".target-mascot");
    if (tarjeta) {

        
        
        const containerMenu = document.createElement("div");
        containerMenu.classList.add("container-Menu");

        containerMenu.innerHTML = `
        
            <h1>...</h1>
        `;

        tarjeta.prepend(containerMenu);
    }
}); */

container.addEventListener("mouseover", () => {
    agregarMenuTarjetas();
})

function agregarMenuTarjetas() {
    const tarjetas = document.querySelectorAll(".target-mascot");

    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener("mouseenter", () => {
            if (tarjeta.querySelector(".container-Menu")) return;
            const containerMenu = document.createElement("div");
            containerMenu.classList.add("container-Menu");

            containerMenu.innerHTML = `
        
            <img src = "../../assets/menu_icon.png" id = "menu_icon"/>
            <div id = "menu-target">
                <button>Update</button>
                <button>Delete</button>
            </div>
            `;

            tarjeta.prepend(containerMenu);

            const menuIcon = document.getElementById("menu_icon");
            menuIcon.addEventListener("click", () => {
                const menuTarget = document.getElementById("menu-target");
                menuTarget.style.display = "block";
            })
        })

        tarjeta.addEventListener("mouseleave", () => {
            const containerMenu = tarjeta.querySelector(".container-Menu");
            if (containerMenu) tarjeta.removeChild(containerMenu);
        });

    });
}
