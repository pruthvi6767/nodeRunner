//module demo of global access and private restriction

var url = 'https://google.com';

//private / scoped to this module
// to make this visible use module.export
function log(msg) {
    console.log(msg);
    return msg
}
log('module');
//make the fns / vars in this module public as object
//module.exports.log = log;


// giving the varibale an alias name for public
//module.exports.endPoint = url;


//export just a function

module.exports = log

