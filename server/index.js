const express = require('express');
const mongoose = require('mongoose');

const route = require("./route");

const app = express();

app.use(express.json());

app.use("/", route);

console.log("-----------FFFFFFFFFFF------------------")

app.listen(5000, () => {
    console.log(`Server Started at 5000`)
})