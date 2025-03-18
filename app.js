const express=require("express");
const app=express();
const cookieParser=require("cookie-parser");
const path=require("path");
const usersRouter=require("./routes/userRouter");
const indexRouter=require("./routes/index");
const router=express.Router();
require("dotenv").config();

const db=require("./config/mongoose-connection");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine","ejs");
app.set('views', path.join(__dirname, 'views'));
app.use("/",indexRouter); 
app.use("/users",usersRouter);

app.listen(3000);