import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import commonRouter from './routes/common';
import adminRouter from './routes/admin';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/uploads/files', express.static(path.join(__dirname, 'uploads', 'files')));

app.use('/api/common', commonRouter)
app.use('/api/admin', adminRouter)

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});