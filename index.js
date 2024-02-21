import express from 'express';
import {router as clientsRoutes} from './routes/clients.route.js';
import {router as hotelRoutes} from './routes/hotels.route.js'
import cors from "cors";

const app = express();
const PORT = 3000;
app.use(cors());

app.use('', clientsRoutes);


app.use('/admin', hotelRoutes);

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});

