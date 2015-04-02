/** @jsx React.DOM */

var React = require('react/addons');

var AppStore = require('../../stores/AppStore');
var AppActions = require('../../actions/AppActions');

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

function getBooks(){
  return AppStore.getBooks();
}

var App = React.createClass({
  
  mixins: [React.addons.LinkedStateMixin],
  
  getInitialState(){
    return {
       currentIndex: 0
    }
  },
  
  // //把 view 註冊到 stores，當 store 有改變/emit change 的時候，用 _onChange 這個 callback 處理
  // componentDidMount () {
  //   AppStore.addChangeListener(this._onChange);
    
  // },
  
  // componentWillUnmount () {
  //   AppStore.removeChangeListener(this._onChange);
  // },

  _onPageDown (i, event) {
     var next = this.state.currentIndex+1;
     var next = next > 10 ? 4 : next;
  	 this.setState({
        currentIndex: next
     });
     var target = $(".App-block"+next);
     $("html,body").animate({
        scrollTop: target.offset().top
     }, 500);
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


