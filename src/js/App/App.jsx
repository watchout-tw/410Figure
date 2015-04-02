/** @jsx React.DOM */

var React = require('react/addons');


var $ = require("jquery");

var introData1 = require("./data/intro1");
var introData2 = require("./data/intro2");
var introData3 = require("./data/intro3");

var dismissData = require("./data/dismiss");//選罷
var referendumData = require("./data/referendum");//公投



var Intro = require('../Intro/Intro.jsx');
var Progress = require('../Progress/Progress.jsx');
var BottomNav = require('../BottomNav/BottomNav.jsx');

require('./App.css');



var App = React.createClass({
  
  getInitialState(){
    return {
       currentIndex: 0
    }
  },
  

  render () {
    var classSet = React.addons.classSet;
  	var state = this.state;

    var storyArray = [
      // <div className="App-title">那些年，我們錯過的公投、罷免權</div>, 
      // <div>累了嗎？先來看看兩個小故事....</div>,
      // <Intro data={introData1}/>,
      // <Intro data={introData2}/>,
      // <Intro data={introData3}/>,
      //<Progress data={dismissData.data} issues={dismissData.issues}/>,
      <Progress data={referendumData.data} issues={referendumData.issues}/>
 
    ];
    var storyItems = storyArray.map((item,key)=>{
        var itemClasses = classSet({
          "App-block" : true,
          "is-hide" : key !== state.currentIndex
        });
        itemClasses += " App-block"+key;
        return (
           <div className={itemClasses}
                key={key}>
             {item}
           </div>
        )
    });
    // <BottomNav pageDownHandler={this._onPageDown}
    //                  page={state.currentIndex} />
    return (
      <div className="App">
          {storyItems}  

          
      </div>
      
    );
  }
});

module.exports = App;


