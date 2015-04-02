/** @jsx React.DOM */

var React = require('react/addons');
var Hintpoint = require('../Hintpoint/Hintpoint.jsx');

require('./Progress.css');

var Progress = React.createClass({
  
  getInitialState(){
    return {
      currentIssue: "",
      expanded: {},
      clean: true
    }
  },

  _onToggleFocusIssue(i, event){

    var expanded = this.state.expanded;
    if(!expanded[i.index])
       expanded[i.index] = false;
    expanded[i.index] = !expanded[i.index];
    this.setState({
        expanded: expanded,
        clean: false
    });
    
  },

  _onSetFocusIssue(i, event){
    this.setState({
        currentIssue: i,
        clean: false
    })

  },
  
  render () {
    var { data, govReportLink } = this.props;
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
            var boundClick = (window.innerWidth > 600) ?  this._onSetFocusIssue.bind(null,i) :
            this._onToggleFocusIssue.bind(null,i);
            
            var isFocused = (window.innerWidth > 600) ? (i.index === this.state.currentIssue.index) : (this.state.expanded[i.index]);
            var issueClasses = classSet({
                  "Progress-issue" : true,
                  "is-focused" : isFocused
                });
            var hintItem = (issueCount === 2 && state.clean) ? <Hintpoint /> : "";

            /* 訴求詳細版，mobile */
            var fullItem = 
            (isFocused) ? 
            <div className="Progress-issueFull">
                <div className="Progress-focusItem">
                    <div className="Progress-focusItemLeft">現行法律</div>
                    <div className="Progress-focusItemMain">{i.currentLaw}</div>
                </div>
                <div className="Progress-focusItem">
                    <div className="Progress-focusItemLeft">修改草案</div>
                    <div className="Progress-focusItemMain">{i.proposedLaw}</div>
                </div>
                <div className="Progress-focusItem">
                    <div className="Progress-focusItemLeft">政府回應</div>
                    <div className="Progress-focusItemMain">{i.govState}</div>
                </div>
                <div className="Progress-note">「政府回應」係整理自立法院第8屆第7會期內政委員會第6次全體委員會議中，內政部、中選會之<a className="Progress-link" href={govReportLink} target="_blank">專題報告</a>內容。</div>
            </div> : "";
            return (
              <a className={issueClasses}
                 key={k}
                 onClick={boundClick} >
                 {hintItem}
                 <div className="Progress-issueMain">{i.title}</div>
                 {fullItem}
              </a>
            );
        }):"";

        //在委員會旁邊加上「實質審查」
        
        var debateContentItem = (item.stage==="委員會") ?
        <div>
          <div className="Progress-labelSidenote">實質審查</div>
          <div className="Progress-tri"></div>
        </div>
        : "";
        return (
           <div className={itemClasses}
                key={key}>
                <div className="Progress-unitPoint" />
                {debateContentItem}
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
            <div className="Progress-note">「政府回應」係整理自立法院第8屆第7會期內政委員會第6次全體委員會議中，內政部、中選會之<a className="Progress-link" href={govReportLink} target="_blank">專題報告</a>內容。</div>
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


