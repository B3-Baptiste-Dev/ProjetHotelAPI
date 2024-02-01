import express from 'express';
import {router as clientsRoutes} from './routes/clients.route.js';
import {router as hotelRoutes} from './routes/hotels.route.js'

const app = express();
const PORT = 3000;

app.use('', clientsRoutes);

app.use('/admin', hotelRoutes);

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});

