// index.js

import express from 'express';
import { tempRouter } from './routes/temp.route.js'; //경로수정

const app = express();
const port = 3000;

// router setting
app.use('/temp', tempRouter);

// error handling
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send(err.stack);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});