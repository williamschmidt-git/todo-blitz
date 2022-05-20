import * as express from 'express';
import router from './routes/index.routes';
import error from './middlewares/error';
import * as cors from 'cors';

const app = express();
app.use(express.json())
app.use(cors());

app.use('/todo', router);
app.use(error);

export default app;
