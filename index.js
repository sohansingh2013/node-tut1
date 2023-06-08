console.log("Welcode to node JS to run in terminal- node .\index.js ");
var a = 20;
var b = 30;
var c = 40;
// console.warn(a+b+c);

var x = '70';
// === to cheack the value type also if else condation
if (x === 70) {
  console.log(" not Match");
}
var x = 20;
if (x == 20) {
  //  console.log("Match");
}
// for loop exmple
for (i = 0; i <= 10; i++) {
  //  console.log(i);
}
// arry define and filter uses 
const arr = [2, 4, 7, 1, 3, 8, 9, 3];
//console.log(arr);
//console.log(arr[2]);

arr.filter((item) => {
  //  console.log(item);

})

let result = arr.filter((item) => {

  // return item ===3
  // return item >4
  return item >= 4
})
// console.log(result);

// imports the class or prog or function in node js
const app = require('./app')

//console.log(app);
//console.log(app.z());
//console.log(app.x);
//console.log(app.y);

// Globle and non globle function crete the file , check the file name and directory

const fs1 = require('fs');
// console.log("Consloe....... is globle function no need to import");
fs1.writeFileSync("hello.txt", "This message need to write in file - code step by step  file syste is need to import that means non globle");
// console.log("->>", __dirname);
// console.log("->>>", __filename);

// const fs = require('fs').writeFileSync;
// fs("abc.txt", "this way also create the file");

// Make basic server output on browser and stop the node js server to use the ctr +c
// http://localhost:4500/

//const http = require('http');

// Tis is use arrow function .....
//http.createServer((req , resp) => {
//resp.write("<h1>Hello this is sohan singh....</h1>");
//resp.end();
//}).listen(4500);

// anoter way to pass the req and response  without arrow function 

function dataControl(req, resp) {
  resp.write("<h1>Hello , This is Sohan Kumar Singh....</h1>");
  resp.end();
}

// http.createServer(dataControl).listen(4500);

// all About Package .json
// git configration done
// git command
// open vs code on cmd go to folder locatin and type - code . it should open vscode if install
//git init
// git status
//git add index.js
//git status
//git commit -m "initial commit"
//git log
// if you want to open git online type - https://vscode.dev/github/sohansingh2013/node-tut

//npm init
//npm i colors
//npm i simple-node-logger

// if deleted the node-modeule you can use npm install

var colors = require('colors');
console.log('hello'.green);

console.log("Package.json".red);

// Nodemon ...time saving
// if got the erro like
// you can reun like - nodemon .\index.js

//nodemon: File C: \Users\Singh\AppData\Roaming\npm\nodemon.ps1 cannot be loaded because running scripts is disabled on this system.For more
//information, see about_Execution_Policies at https: /go.microsoft.com/fwlink /? LinkID = 135170.
//At line: 1 char: 1
// + nodemon.\index.js
//  + ~~~~~~~
// + CategoryInfo          : SecurityError: (:)[], PSSecurityException
//  + FullyQualifiedErrorId : UnauthorizedAccess

// you can open powersel as admin and run the command - Set-ExecutionPolicy RemoteSigned -Scope CurrentUser


// Make a simple API

//const http = require('http');

//const data = require('./data');

// Tis is use arrow function .....
//http.createServer((req, resp) => {
// resp.writeHead(200, { 'Content-Type': 'application\json' });
// resp.writeHead(500, { 'Content-Type': 'application\json' });
// resp.write(JSON.stringify(data));
//resp.end();
// }).listen(4500);

// input from command line

//console.log(process);

// console.log(process.argv);
//  node index.js apple.txt 'this is created by comand promt'  

// const fs = require('fs');

//const input = process.argv;
//if (input[2] == 'add') {
// node index.js add apple1.txt 'this is created by comand promt' 
//fs.writeFileSync(input[3], input[4])
//} else if (input[2] == 'remove') {
//node index.js remove apple1.txt
//fs.unlinkSync(input[3])
//}
//else {
//console.log("Invalid input")
//}
// fs.writeFileSync(input[2], input[3]);

// create multiple file in specif directory 

// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'files');

// for (i = 0; i < 5; i++) {
//   fs.writeFileSync(dirPath + "/hellow" + i + ".txt", "a simple test file");
//   // fs.writeFileSync('hellow ${i}.txt',"a simple file to create");

// }

//read the file

// fs.readdir(dirPath, (err, files) => {

//   files.forEach((item) => {
//     console.log("File Name is : ", item);

//   })
// })

// Curd with file Systeam


const fs = require('fs');
const path = require('path');
const { promises } = require('dns');
const { rejects } = require('assert');
const dirPath = path.join(__dirname, 'curd');
const filePath = `${dirPath}/apple.txt`;

// write the file
//fs.writeFileSync(filePath, 'This is simple test file');

// read the file

// fs.readFile(filePath, 'utf8', (err, item) => {
//   console.log(item);
// })

// update the file

// fs.appendFile(filePath, ' and file name is apple.txt', (err) => {
//   if (!err)
//     console.log("File Updated sucessfully");
// })

// file name rename

// fs.rename(filePath, `${dirPath}/frut.txt`, (err) => {
//   console.log("File name updated/rename  Sucessfully");

// })

// fs.unlinkSync(`${dirPath}/frut.txt`);
// console.log("File deleted  Sucessfully");

// Asynchronouse and Synchronouse

// so node js is Asynchronouse programing languge

// console.log("1.Start exect...");

// setTimeout(() => {
//   console.log("2.logic exect...");
// }, 2000);


// console.log("3.Complete exect...");

// drow back simple example

// let a1 = 10;
// let b1 = 0;
// setTimeout(() => {
//   b1 = 20;
// }, 2000);
// console.log(a1 + b1);

// resolve or handle Asynchronouse Data in Node Js

// let a1 = 10;
// let b1 = 0;

// let waitingData = new Promise((resolve, rejects) => {
//   setTimeout(() => {
//     resolve(30);
//   }, 2000);
// })

// waitingData.then((data) => {
//   b1 = data;
//   console.log(a1 + b1);
// })

// express js is the framewwork , like java having spring and hibernet ,
//java script having  anglue framewor
// php having framework larawell

// const express = require('express');
// const appp = express();

// appp.get('', (req, res) => {

//   res.send('hello This is home Page');

// });

// appp.get('/about', (req, res) => {
//   res.send('Hellow this is about page');
// });

// appp.get('/help', (req, res) => {
//   res.send('Hellow this is help page');
// });
// appp.listen(4500);


// midle ware use 