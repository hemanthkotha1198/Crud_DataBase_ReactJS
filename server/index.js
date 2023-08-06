const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "cruddb"
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get("/api/get",(req,res)=>{
    const sqlSelect="select * from userinfo";
    db.query(sqlSelect,(error,result)=>{
        res.send(result);
    })
})
// app.get("/",(req,res)=>{
//     const sqlInsert = "insert into contactdetails(namel,email,contact)  values('Tarun','tarunbattula12@gmail.com','9347588140')";
//     db.query(sqlInsert,(error,result)=>{
//         console.log("error",error);
//         console.log("result",result);
//     })
//     res.send("Hello Express");

// })

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})