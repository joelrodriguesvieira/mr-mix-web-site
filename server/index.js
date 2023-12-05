import express from 'express';
import { PORT } from './constants/index.js';
import cors from 'cors';
import { productsRoute } from './routes/products.js';
import { cartRouter } from './routes/shopping.js';
import { form } from './routes/form.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('client'));
app.use(cors());
app.use(express.json());
app.use(form);
app.use(productsRoute);
app.use(cartRouter);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});

