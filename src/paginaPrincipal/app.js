document.addEventListener("DOMContentLoaded", async () => {

    try {

        const respuesta = await fetch('/api/mascotas');
        const datosMascotas = await respuesta.json();

        console.log("Respuesta del servidor:", datosMascotas);

        if (!datosMascotas.exito) throw new Error(datosMascotas.mensaje);

        const container = document.getElementById("container-targets");
        container.innerHTML = "";

        datosMascotas.datos.forEach(mascota => {
            const div = document.createElement("div");
            div.classList.add("target-mascot");

            div.innerHTML = `
                <div class="imagen" style="border-color: ${mascota.colormascot};">
                <img src="${mascota.url}" >
                </div>
                <h2 style="color: ${mascota.colormascot};">${mascota.name.toUpperCase()}</h2>
                <h3 style="color: ${mascota.colorship};">${mascota.ship.toUpperCase()}</h3>
            `;

            container.appendChild(div);

        });

    } catch (error) {
        console.error("Error al cargar las mascotas", error);
    }

});


const container = document.getElementById('container-targets');

container.addEventListener('wheel', (event) => {
    event.preventDefault();
    container.scrollLeft += event.deltaY;
});