/** @jsx React.DOM */

var React = require('react/addons');

require('./BottomNav.css');
var BottomNav = React.createClass({
  getInitialState(){
    return {
      
    }
  },
  
  render () {
    var props = this.props;
  	return (

      <div className="BottomNav">
           {props.page}
           <div className="BottomNav-pageDown"
               onClick={props.pageDownHandler}>next</div>
      </div>
      
    );
  }
});

module.exports = BottomNav;


