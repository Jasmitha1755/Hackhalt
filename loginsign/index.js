const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./Employee");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    EmployeeModel.findOne({email : email})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json("Success");
            }else{
                res.json("The password is incorrect");
            }
        }else{
            res.json("No record existed");
        }
    });
});

app.post("/register", (req, res) => {
    const { name, email, password } = req.body;
    EmployeeModel.create({ name, email, password })
        .then(employee => res.status(201).json(employee))
        .catch(err => res.status(500).json({ error: err.message }));
});

app.listen(3001, () => {
    console.log("Login server is running on port 3001");
});
