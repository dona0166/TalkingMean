const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');

mongoose.connect(config.uri, (err) => {
    if(err){
        console.log("Could not connetc to database ", err);
    }
    else{
        console.log('Connect to database: ' + config.db);
    }
});


//rather than sending text to the index.js you can send the content of you
//production index.html, by using express static
app.use(express.static(__dirname + '/client/dist/'));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

/* app.get('*', (req, res) => res.send('<h1>This call back message means express works</h1>'));
 */

app.listen(8082, () => console.log('Listening on port 8082'));

