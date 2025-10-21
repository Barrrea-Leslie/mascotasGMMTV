async function cargarMascotas() {
    try {
        const respuesta = await fetch('/api/mascotas');
        const datosMascotas = await respuesta.json();

        if (!datosMascotas.exito) throw new Error(datosMascotas.mensaje);

        const container = document.getElementById("container-targets");
        container.innerHTML = "";

        datosMascotas.datos.forEach(mascota => {
            const div = document.createElement("div");
            div.classList.add("target-mascot");
            div.id = "target-mascot";

            div.innerHTML = `
                
                <div class="imagen" style="border-color: ${mascota.colormascot};">
                <img src="${mascota.url}" >
                </div>
                <h2 style="color: ${mascota.colormascot};">${mascota.name.toUpperCase()}</h2>
                <h3 style="color: ${mascota.colorship};">${mascota.ship.toUpperCase()}</h3>
            `;
            console.log('carga la pagina');
            container.appendChild(div);
        });
    } catch (error) {
        console.error("Error al cargar las mascotas", error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    cargarMascotas();
});

//Funcion para leer el formulario y crear la mascota

const formCreate = document.getElementById("form-create");

formCreate.addEventListener("submit", async (e) => {
    e.preventDefault(); // evita recargar la página

    const formData = new FormData(formCreate);
    const datos = Object.fromEntries(formData.entries());

    try {
        const respuesta = await fetch("/create-mascot", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(datos),
        });

        const resultado = await respuesta.json();

        if (resultado.exito) {
            console.log("Mascota creada correctamente");

            
            cargarMascotas();

            
            document.getElementById("container-modal").style.display = "none";
            formCreate.reset();

        } else {
            console.error("Error al crear mascota:", resultado.mensaje);
        }
    } catch (error) {
        console.error("Error al enviar el formulario:", error);
    }
});

