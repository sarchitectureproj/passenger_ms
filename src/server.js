import express, { json } from 'express';
import {connect} from './database'
const app = express();

//Settings
app.set('port', process.env.PORT || 4002)

//Routes
import IndexRoutes from './routes/index.routes';
import Passengers from './routes/passengers.routes';

//middlewares
app.use(json());

//Use Routes
app.use(IndexRoutes);
app.use('/passengers', Passengers);

export default app ;