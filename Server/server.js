const express=require('express');
const mongoose=require('mongoose');
const taskRoutes=require('./routes/taskManagerRoutes')
const cors=require('cors');


const app=express();
app.use(cors());
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/TaskManager')
.then((res)=>console.log('Database is Connected'))
.catch((err)=>console.log(err))

app.use('/api',taskRoutes);

app.listen(5000,()=>{
    console.log('Server is Runnung');
})

