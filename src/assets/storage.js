// const { Version } = require("@angular/compiler");

// // step One
// window.indexedDB = window.indexedDB|| window.mozIndexedDB|| window.webkitIndexedDB|| window.msIndexedDB;

// // Step two
// window.IDBTransaction = window.IDBTransaction||window.webkitIDBtransaction||window.msIDBTransaction;

// // step Three
// window.IDBKeyRange = window.IDBKeyRange|| window.IDBKeyRange || window.msIDBKeyRange;
// if(!window.indexedDB){
//     alert("Your Browser doesnot support IndexDB")
// }
// var db;
// // Version number = 1
// var request = window.indexedDB.open("codetodo",1)
// request.onerror =function(event){
//     console.log("error"+ event.target.result)
// }

// request.onsuccess = function(event){
// db= request.result;
// console.log("sucess"+db)
// }

// request.onupgradeneeded = function(event){
//     var db = event.target.result;
//     var objectstore = db.objectstore("CodeToDodb")
// }