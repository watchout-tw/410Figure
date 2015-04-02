/** @jsx React.DOM */

var React = require('react/addons');
var Hintpoint = require('../Hintpoint/Hintpoint.jsx');

require('./Progress.css');

var Progress = React.createClass({
  
  getInitialState(){
    return {
      currentIssue: "",
      clean: true
    }
  },

  _onSetFocusIssue(i, event){
    //console.log(i);
    this.setState({
      currentIssue: i,
      clean: false

    })
  },
  
  render () {
    var data = this.props.data;
    var state = this.state;
    var classSet = React.addons.classSet;
  
    /*==================
           進度條
      ================== */
    var issueCount = 0;
  	var progressBricks = data.map((item,key)=>{
        var itemClasses = classSet({
          "Progress-item" : item.type === "challenge",
          "Progress-point" : item.type !== "challenge",
          "is-first" : key === 0,
          "is-last" : key == data.length-1
        });

        var lableClasses = classSet({
          "Progress-label" : item.type === "challenge",
          "Progress-circle" : item.type !== "challenge"
        })

        var issues = (item.issues) ? item.issues

        .map((i,k)=>{
            issueCount ++;
            var boundClick = this._onSetFocusIssue.bind(null,i);
            var issueClasses = classSet({
                  "Progress-issue" : true,
                  "is-focused" : i.index === this.state.currentIssue.index
                });
            var hintItem = (issueCount === 2 && state.clean) ? <Hintpoint /> : "";
            return (
              <a className={issueClasses}
                 key={k}
                 onClick={boundClick}
                 >

                 {hintItem}
                 
                 <div className="Progress-issueMain">{i.title}</div>
              </a>
            );
        }):"";

        return (
           <div className={itemClasses}
                key={key}>
                <div className="Progress-unitPoint" />
                <div className={lableClasses}>
                  <div>{item.stage}</div>
                </div>
                <div className="Progress-issues">{issues}</div>
           </div>
        )
    });

    /*==================
           關注訴求
      ================== */
 
    var currentIssue = this.state.currentIssue;
    var currentIssueItem = (currentIssue) ? (
        <div className="Progress-focus"> 
            <div className="Progress-focusTitle">訴求 <br/> {currentIssue.title}</div>
            <div className="Progress-focusItem">
                <div className="Progress-focusItemLeft">現行法律</div>
                <div className="Progress-focusItemMain">{currentIssue.currentLaw}</div>
            </div>
            <div className="Progress-focusItem">
                <div className="Progress-focusItemLeft">修改草案</div>
                <div className="Progress-focusItemMain">{currentIssue.proposedLaw}</div>
            </div>
            <div className="Progress-focusItem">
                <div className="Progress-focusItemLeft">政府回應</div>
                <div className="Progress-focusItemMain">{currentIssue.govState}</div>
            </div>
        </div>
      ) : "";

    
    
    return (
      
      <div className="Progress">
          
          <div className="Progress-bricks">
            {progressBricks}
          </div>
          
          {currentIssueItem}
          
      </div>
          
    );
  }
});

module.exports = Progress;


