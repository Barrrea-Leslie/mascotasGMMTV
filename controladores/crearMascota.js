//Funcion para crear mascota en el modal

const {pool} = require("../configuracion_DB/baseDatos");

const crearMascota = async (req, res) => {

    try {
        
        const {nameMascot, nameShip, url, colorName, colorShip} = req.body;

        const consulta = `INSERT INTO mascots (name, ship, url, colormascot, colorship) VALUES ($1, $2, $3, $4, $5) RETURNING *`

        const valores = [nameMascot, nameShip, url, colorName, colorShip];
        const resultado = await pool.query(consulta, valores);

        console.log("Mascota creada exitosamente");

        res.status(201). json({
            exito: true,
            mensaje: "Mascota creada exitosamente",
            datos: resultado.rows[0]
        });


    } catch (error) {
        res.status(500).json({
            exito: false,
            mensaje: 'Error al crear el videojuego',
            error: error.message
        });
    }

}

module.exports = {crearMascota}