"use strict";
const logger = require('./logger')

function sayHello(name) {
    console.log(name)
}

sayHello('pruthvi')
//console.log(window)

// Global objects in node
// console object is a global object that can be accessed anywhere
// other global func's -- setTimeOut()-  to start execution of fn with delay ;
// clearTimeOut()
//setInterval() -- calls repeatedlyfn  with sleeps in btw 
// clearInterval()-- resets rpeat calls

//Browser vs Node objs:
// window vs global
var msg = 'hello pruthvi'
// in browser can access via window as window.msg
// in node global can access as global.{globalfn's} only not vars
 
//eg
global.console.log(msg)
//console.log(global.msg) // => returns undefined

// declaring variables and functions using var keyword makes them global
// avoid such scenariois keep them private to the file or modular (app.js)

//console.log(module)


//var logger = require('./logger')


//console.log(logger.log('hello'))
console.log(logger) //prints module info
console.log(logger('intro to module'));

//dis advantage of requiring a module with var
//logger = 1

// erros out //possible solution to above is use const instead of var
logger('intro to module'); //TypeError: logger.log is not a function
//TOols like "jshint" help to overcome these erros


//In node every module is wrapped inside a function called module function that takes different params require, exports, module, _file, _dir)
// thos params helps to export and require different moduleas objects and functions
// console.log(x)

var x  = {
    'a': 'b'
};
console.log([1,2]==[1,2])
var x = [1,3]
console.log(x.a)