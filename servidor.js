const express = require('express');
const cors = require('cors');
require('dotenv').config();

const {probarConexion, pool} = require('./configuracion_DB/baseDatos')
const {obtenerUsuarios} = require("./controladores/formulario");
const {verificarCredenciales} = require("./controladores/formulario");


const app = express();

const puerto = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
app.use(express.static(__dirname));



app.get('/', (req, res) => {

    res.sendFile(__dirname + "/src/login/index.html")

});

app.get('/api/usuarios', obtenerUsuarios);

app.post('/', verificarCredenciales);



const iniciarServidor = async () => {
    try {

        await probarConexion();

        app.listen(puerto, () => {
            console.log(`Servidor ejecutandose en http:localhost:${puerto}`);
        });
    } catch (error) {
        console.error('Error al iniciar', error.message)
    }
};


iniciarServidor();