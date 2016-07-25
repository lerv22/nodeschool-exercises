var mymodule = require('./module.js');

var path = process.argv[2];
var filter = process.argv[3];
mymodule(path, filter, function(err, data){
  if(err) return;
  data.forEach(function(x){
    console.log(x);
  });
});
