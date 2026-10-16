import express from 'express';
import dbConnnect from './connect/dbConnect.js';
import userRouter from './routes/userRouter.js';
import fileUpload from 'express-fileupload';
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors());
app.use(fileUpload());

const port = 2222;
dbConnnect();
app.use("/user", userRouter);

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})