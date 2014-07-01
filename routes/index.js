var path = require('path');
var childProcess = require('child_process');
var phantomjs = require('phantomjs');
var binPath = phantomjs.path;

var childArgs = [
  path.join(__dirname, '../scripts/script.js')
];

exports.index = function(req, res) {
  res.render('index', {status: '00 Ok'});
};

exports.generate = function(req, res) {
  var data = [10, 20, 30 , 100];

  /*
  childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
  });
  */

  res.render('index', {status: '00 Ok', graphData: data});
};
