const { coinCount } = require ('./p3-module.js');
const { coins } = require ('./p3-module.js');
const http = require('http');
const fs = require('fs'); 
const hostname = '127.0.0.1';
const port = 8080;

const fastify = require("fastify")();
fastify.get("/", (request, reply) =>
{
    //test functionality
    //console.log(1, "/ 'Route'");
    fs.readFile(`${__dirname}/index.html`, (err, data) => 
    {
        if (err) 
        {
            console.log(err);
            reply.code(500);
            reply.header('Content-Type', 'text/html');
            reply.send("Error processing request");
        }
        else
        {
            //test functionality
            //console.log("URL: ", request.url);
            reply.code(200);
            reply.header('Content-Type', 'text/html');
            reply.send(data);
        }
    });
});
fastify.get("/coin", (request, reply) =>
{
    let {denom = 0, count = 0} = request.query;
    let coinValue = coinCount(request.query);
    //test functionality 
    //console.log(request.query);
    //console.log('denom =', denom);
    //console.log('count =', count);
    reply
 .code(200)
 .header("Content-Type", "text/html; charset=utf-8")
 .send(`<h2>Value of ${count} of ${denom} is ${coinValue}</h2><br /><a href="/">Home</a>`);
});
fastify.get("/coins", (request, reply) =>
{
    let option = request.query.option;
    //test functionality
    //console.log(option);
    switch(option)
    {
        case "1":
            coinValue = coinCount({ denom: 5, count: 3 }, { denom: 10, count: 2 });
            //test functionality
            //console.log(coinValue);
            break;
        case "2":
            //instead import 'coins' arr from p3-module
            //coins = [{denom: 25, count: 2},{denom: 1, count: 7}];
            coinValue = coinCount(...coins);
            //test functionality
            //console.log(coinValue);
            break;
    };
    reply
 .code(200)
 .header("Content-Type", "text/html; charset=utf-8")
 .send(`<h2>Option ${option} value is ${coinValue}</h2><br /><a href="/">Home</a>`);
});

const listenIP = "localhost";
const listenPort = 8080; 

 fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`)
  console.log(listenPort);
  console.log(listenIP); 
  });
// /Users/mylesdavis/Documents/UO_documents/cit281/p3/index.html