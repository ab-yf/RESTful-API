// const express = require ('express'); // 
// Can also use the above variable to call and initialize express //
// The import method was introduced in a newer form of Node and is more easier to use //

import express from 'express';
import bodyParser from 'body-parser'; // Allows us to take incoming POST requests and their body.//

import routesFromUsers from './routes/users.js';

const app = express(); // Intitializing Express by calling it as a function.
                       // The basis of our entire application lies on this function. 

const PORT = process.env.PORT || 8080;     // I am from a Java background, so I will select this port for listening.


app.use(bodyParser.json()); // We are going to be using JSON Data in our application.
                                 // Common format in REST APIs for sending and requesting data.

app.use('/users', routesFromUsers);

app.get('/', (req,res) =>  { // Initialzing our GET Request on the homepage.
    res.send ('Hello, Abdullah');
}); 



                        
app.listen(PORT, () => console.log (`The server is running on port: http://localhost:${PORT}`));
/* Here, we are establising our server's port and we are making a callback function in JS so that we can show on our console when the 
   server is up and running  */