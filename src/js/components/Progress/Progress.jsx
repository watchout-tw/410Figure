/** @jsx React.DOM */

var React = require('react/addons');
require('./Progress.css');



var Progress = React.createClass({
  
  getInitialState(){
    return {
      currentIssue: this.props.issues[0]
    }
  },

  _onSetFocusIssue(i, event){
    console.log(i);
    this.setState({
      currentIssue: i
    })
  },
  
  render () {
    var data = this.props.data;
    var classSet = React.addons.classSet;
  
    /*==================
           進度條
      ================== */

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
            var boundClick = this._onSetFocusIssue.bind(null,i);
            var issueClasses = classSet({
                  "Progress-issue" : true,
                  "is-focused" : i.index === this.state.currentIssue.index
                });
            return (
              <a className={issueClasses}
                 key={k}
                 onClick={boundClick}>
                 
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
        <div>
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
          <div className="Progress-focus"> 
            {currentIssueItem}
          </div>
      </div>
          
    );
  }
});

module.exports = Progress;


