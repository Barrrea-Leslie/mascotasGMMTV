const {pool} = require("../configuracion_DB/baseDatos");


const obtenerUsuarios = async (req, res) => {

    try {

        const consulta = "SELECT * FROM usuarios";
        const resultado = await pool.query(consulta);


        
        res.json({
            exito: true,
            mensaje: 'Usuarios obtenidos corectamente',
            datos: resultado.rows,
            total: resultado.rows.length
        });

        
        
    } catch (error) {

        console.error('Error: ', error);
        res.status(500).json({
            exito: false,
            mensaje: 'Error al obtener los ussuarios y contraseñas',
            error: error.message
        });

    }

}

const verificarCredenciales = async (req, res) => {

    try {
        console.log("Cuerpo recibido:", req.body);
        const { nAccount, nip } = req.body;
        console.log("Número de cuenta:", nAccount);
        console.log("NIP:", nip);


        const consulta = "SELECT * FROM usuarios WHERE users = $1 and passwords = $2";
        const resultado = await pool.query(consulta, [nAccount, nip]);

        if (resultado.rows.length === 0) {
            return res.status(401).json({
                exito: false,
                mensaje: "Credenciales incorrectas"
            });
        } else {
            res.redirect("/src/paginaPrincipal/index.html");
        }

    } catch (error) {
        console.error("Error: ", error);
        res.status(500).json({
            exito: false,
            mensaje: "Error al verificar las credenciales",
            error: error.message
        });
    }

};
module.exports = {obtenerUsuarios, verificarCredenciales}