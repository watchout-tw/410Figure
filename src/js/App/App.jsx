/** @jsx React.DOM */

var React = require('react/addons');

/* ===== GET JSON , Default set to 選罷法 ======= */
var hash = window.location.hash.substring(1); // remove #
if(hash === "referendum"){
  var data = require("../../data/referendum");//公投
}
if(hash === "dismiss"){
  var data = require("../../data/dismiss");//選罷
}

var Progress = require('../Progress/Progress.jsx');
var Intro = require('../Intro/Intro.jsx');

require('./App.css');

var App = React.createClass({
  
  render () {
    var result = (data) ?
        <Progress data={data.data} 
                  govReportLink={data.govReportLink}/> : "網址錯誤";

    return (
      <div className="App">
          <Intro/>
          <div className="App-block">
              {result}
          </div>
          <div className="App-update">資料更新日期：2015年4月5日</div>   
      </div>
      
    );
  }
});

module.exports = App;


