var fs = require('fs');
fs.readFile('mapcy.txt', 'utf8',function(err,data){
    console.log(data);
});