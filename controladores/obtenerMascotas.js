const { Query } = require("pg");
const { pool } = require("../configuracion_DB/baseDatos");


//funcion para obtener mascotas de la base de datos

const obtenerMascotasBD = async (req, res) => {

    const consulta = "SELECT * FROM mascots ";
    const resultado = await pool.query(consulta);
    
    return resultado.rows;

}

//funcion para comprobar que si se pueda obtener las mascotas se ejecuta en /api/mascotas cpon GET

const obtenerMascotas = async (req, res) => {

    try {

        const datos = await obtenerMascotasBD();

        res.json({
            exito: true,
            mensaje: 'Mascotas obtenidas correctamente',
            datos: datos,
            total: datos.length
        })

        

    } catch (error) {
        console.error("Error", error);
        res.status(500).json({
            exito: false,
            mensaje: 'Error al obtener las mascotas',
            error: error.message
        })
    }

}




module.exports = { obtenerMascotas }