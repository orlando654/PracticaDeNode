const express = require('express');
const axios = require('axios');


const port = 8080;
const app = express();


    url = 'https://pokeapi.co/api/v2/pokemon/ditto';

    app.get('/', (req, res) => {
        res.send('Hello World');
    });

    app.get('/api/user', async (req, res) => {
        try {
            const jsonResponse = await axios.get(url);
            const response = jsonResponse.data;
            res.status(200).json({
                response
            });
        } catch (error) {
            console.log(error);

            res.status.json({
                error: 'hubo un error al consumir el servicio'
            });
        }
    });

    app.listen(port, () => {
        console.log(`servidor corriendo en el puer ${port}`);
    });


module.exports = {
 url

}