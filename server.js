const express=require('express');
const mongoose=require('mongoose');
const routes=require('./routes/ToDoRoute');
require('dotenv').config();
const cors=require('cors');
const app=express();
const PORT=process.env.port || 5000;
app.use(express.json());
app.use(cors());
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URL).then(()=>console.log(`connected to mongo db`)).catch((err)=>console.log(err));

app.use(routes);

app.listen(PORT,()=>console.log(`app listening on ${PORT}`));
