const express=require("express");
const cors=require("cors");

const authRouter=require("./routers/auth.js")

const app=express();
const PORT=process.env.PORT||5000;

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/",(req,res)=>{
    res.send("hello NodeJs")
});

app.use("/auth",authRouter);

const getListen=()=>{
    console.log(`Server Runing in Port ${PORT}`);
}
app.listen(PORT,getListen);