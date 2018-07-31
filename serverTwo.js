var http = require("http");
// Ports
var PORT1 = 7000;
var PORT2 = 7500;
// handle function
function handleRequestGood(request, response){
    response.end("You are looking good " + request.url);
}

function handleRequestBad(request, response){
    response.end("You are not looking so well " + request.url);
}
// Making my server
var server1 = http.createServer(handleRequestGood);
var server2 = http.createServer(handleRequestBad);

// Listening for a hit
server1.listen(PORT1, function(){
    console.log("Server listening on: http://localhost:" + PORT1);
});

server2.listen(PORT2, function(){
    console.log("Server listening on: http://localhost:" + PORT2);
});