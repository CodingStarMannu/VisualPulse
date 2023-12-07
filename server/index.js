const express = require('express');
const app = express();
require('./models/importData');
const cors = require('cors');
const apiRoute = require('./routes/api');

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api',apiRoute);

app.listen(port, (error)=>{
    if(error){
        console.log(`Error in running server ${error}`);
    }
    console.log(`Server is up and running on port:${port}`);
})