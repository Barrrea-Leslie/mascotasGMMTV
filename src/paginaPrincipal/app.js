document.addEventListener("DOMContentLoaded", async () => {

    try {

        const respuesta = await fetch('/api/mascotas');
        const datosMascotas = await respuesta.json();

        console.log("Respuesta del servidor:", datosMascotas);

        if(!datosMascotas.exito) throw new Error(datosMascotas.mensaje);
        
        const container = document.getElementById("container-targets");
        container.innerHTML = "";

        datosMascotas.datos.forEach(mascota => {
            const div = document.createElement("div");
            div.classList.add("target-mascot");

            div.innerHTML = `
                <img src="${mascota.url}" >
                <h2>${mascota.name}</h2>
                <h3>${mascota.ship}</h3>
            `;

            container.appendChild(div);

        });
        
    } catch (error) {
        console.error("Error al cargar las mascotas", error);
    }

});