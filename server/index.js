const express = require('express');
const app = express();

const port = 3000;


app.listen(port, (error)=>{
    if(error){
        console.log(`Error in running server ${error}`);
    }
    console.log(`Server is up and running on port:${port}`);
})