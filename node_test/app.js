
var http = require("http");
http.createServer(function(request,response){
    console.log(request.url)
 response.writeHead(200,{"Content-Type":"text/html"})
 response.write("<h1>Hello</h1>")
 response.end()
}).listen(8080);


console.log(__dirname)
console.log(__filename)


var path =require("path");

//抓取資料夾路徑
console.log(path.dirname('vue-exercise-gh-pages/node_test/app.js'))

//路徑合併：
console.log(path.join(__dirname,'/xx')); 
//抓檔名： 
console.log(path.basename('vue-exercise-gh-pages/node_test/app.js')); 
//抓副檔名： 
console.log(path.extname('node_test/app.js'));  
//分析路徑： 
console.log(path.parse('node_test/app.js'));

var express = require("express");

console.log(express)