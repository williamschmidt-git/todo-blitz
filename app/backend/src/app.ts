import express from 'express';
import router from './routes/index.routes';
import error from './middlewares/error';

const app = express();

app.use('/', router);
app.use(error);

export default app;
