/** @jsx React.DOM */

var React = require('react/addons');

/* ===== GET JSON , Default set to 選罷法 ======= */

var data = require("../../data/dismiss");//選罷
var hash = window.location.hash.substring(1); // remove #
if(hash === "referendum"){
  data = require("../../data/referendum");//公投
}

var Progress = require('../Progress/Progress.jsx');

require('./App.css');

var App = React.createClass({
  
  render () {
    var classSet = React.addons.classSet;
    return (
      <div className="App">
          <div className="App-block">
              <Progress data={data.data} issues={data.issues}/>
          </div>          
      </div>
      
    );
  }
});

module.exports = App;


