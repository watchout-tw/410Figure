/** @jsx React.DOM */

var React = require('react/addons');

require('./Intro.css');
var Intro = React.createClass({
  
  mixins: [React.addons.LinkedStateMixin],
  
  getInitialState(){
    return {
      
    }
  },
  
  render () {
  	
    var data = this.props.data;
    console.log(data.content);
    var paraItems = "";
    if(data.content){
        paraItems = data.content.map((item,key)=>{
            return (
               <p key={key}>{item}</p>
            )
        });
    }
    return (

      <div className="Intro">
          <div className="Intro-item">
            <div className="Intro-itemTitle">{data.title}</div>
            <div className="Intro-itemContent">
                {paraItems}
            </div>
          </div>

          
      </div>
      
    );
  }
});

module.exports = Intro;


