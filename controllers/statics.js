const path = require('path');

function staticsHome(req, res){
  return res.sendFile(path.join(__dirname, '../src/index.html'));
}

module.exports = {
  home: staticsHome
};
