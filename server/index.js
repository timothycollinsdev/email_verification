const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const route = require("./route");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/", route);

app.listen(5000, () => {
    console.log(`Server Started at 5000`)
})