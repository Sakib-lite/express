
const express = require('express');


const app = express();

app.get('/', (req, res) => {
    res.json({
        status: 'success',

    })
})

app.listen(5000, () => {
    console.log("App is running at http://localhost:5000");
})