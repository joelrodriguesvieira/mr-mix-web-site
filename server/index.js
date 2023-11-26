import express from 'express';
import { PORT } from './constants/index.js';
import cors from 'cors';
import { productsRoute } from './routes/products.js';
import { cartRouter } from './routes/shopping.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(productsRoute);
app.use(cartRouter);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

