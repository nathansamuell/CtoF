// TODO: 
// debug the calculate button. That's it for now!
// next is ensure the calculation returns properly
// the button might actually be working correctly, 
// but my node server might not be able to handle
// requests like that that have to update. 
// further research is needed



const http= require('http');
const fs = require('fs');
const port = 3000;



// Creates a server, below is the logic structure (sorry for the callbacks)
//  1. use http to create a createServer object
//  2. create the function that this server runs and pass it to the createServer call
//  3. read the html file in the same directory
//  4. pass the readFile call an error handling function in case the file is missing/bad
//  5. write the data out
//  6. end the response
const server = http.createServer(function (req, res) {   //this function lists all the ways the server handles requests
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('./index.html', function(error, data) {
        if (error) {
            res.writeHead(404);
            res.write('Error: file not found');
        } else {
            res.write(data);
        }
        res.end();
    })
    
});

server.listen(port, function(error) { // this function handles the response for any errors
    if (error) {
        console.log('Something went wrong', error);
    } else {
        console.log('Server is listening on port ' + port);
    }
})

function convertTemp() {
    var tempInF = document.getElementById("input").value;
    var result = tempInF * 9;
    document.getElementById("result").innerHTML = result;
}