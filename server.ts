import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import path from 'path';
import SwaggerUI from 'swagger-ui-express';
import Swagger from './docs/Swagger';

import Router from './src/routes';
import { handleError } from './src/utils/error';
dotenv.config();

const app = express();
const PORT = 6969;

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'src/public')));
var cssOptions = {
    customCssUrl: '/custom.css',
    customSiteTitle: 'Poopcode APIs',
};
app.get('/', (req, res, next) => {
    res.redirect('/docs');
});
app.use('/docs', SwaggerUI.serve, SwaggerUI.setup(Swagger, cssOptions));
app.use('/api', Router);
app.use(handleError);
app.listen(PORT, () => {
    console.log('Connecting 🚀');
});
