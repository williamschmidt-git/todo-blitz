import app from './app';

require('dotenv').config();

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => console.warn(`listening on port: ${PORT}`));
