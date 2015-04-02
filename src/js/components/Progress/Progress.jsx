/** @jsx React.DOM */

var React = require('react/addons');

//英國國會
//http://services.parliament.uk/bills/2013-14/transparencyoflobbyingnonpartycampaigningandtradeunionadministration.html

require('./Progress.css');

var data = [
  {
    "stage":"程序委員會",
    "issues" : [
        {
          "index":"5",
          "title":"建立電子提案及連署系統",
          "currentLaw" : "公投法9、10條，提案或連署人需要親筆簽名，並註明身分證字號及戶籍地址。完成後將紙本送交中選會提出",
          "proposedLaw" : "",
          "govState" : "應視社會各界對電子投票的共識性及信賴度而定"
        }
       
    ]
  },
  {
    "stage":"一讀"
  },
  {
    "stage":"委員會",
    "issues" : [
        {
          "index":"1",
          "title":"擴大全國性公投適用範圍，包括對外締結的條約及協議",
          "currentLaw" : "依據《公民投票法》第2條，公投適用範圍為：法律之複決、立法原則創制、重大政策之創制複決、憲法修正案之複決；另外，也適用於地方自治事項。但是，預算、租稅、投資、薪俸及人事事項，不適用於公民投票的範圍。",
          "proposedLaw" : "",
          "govState" : ""
        },
        {
          "index":"2",
          "title":"廢除公投審議委員會",
          "currentLaw" : "公投法33、34條，行政院應設公投審議委員會，就全國性公民投票事項之認定、是否於期限內重複提案，進行審議。",
          "proposedLaw" : "",
          "govState" : "審議委員會有協助人民行使創制複決功能，且已修法規定委員會內同黨委員不得超過總額二分之一，具有公正性及獨立性"
        },
        {
          "index":"3",
          "title":"公投提案門檻降至萬分之一",
          "currentLaw" : "公投法10條，公民投票提案人數，應達最近一次總統選舉總人數5/1000以上",
          "proposedLaw" : "",
          "govState" : "門檻能確保提案的公共性，門檻過低、動輒公投恐造成社會過度動員、政府公共經費支出"
        },
        {
          "index":"4", 
          "title":"公投連署門檻降至百分之一‧五",
          "currentLaw" : "公投法12條，連署人數應達到最近一次總統大選選舉人總數5/100以上",
          "proposedLaw" : "",
          "govState" : "門檻能確保提案的公共性，門檻過低、動輒公投恐造成社會過度動員、政府公共經費支出"
        },
        {
          "index":"6", 
          "title":"廢除百分之五十投票門檻，改採簡單多數決",
          "currentLaw" : "公投法30條，公民投票案投票結果，投票人數達全國、直轄市、縣 (市) 投票權人總數二分之一以上，且有效投票數超過二分之一同意者，即為通過。",
          "proposedLaw" : "",
          "govState" : "公投門檻攸關投票效力及民主正當性，應妥善考量"
       }
    ]
  },
  {
    "stage":"黨團協商"
  },
  {
    "stage":"二、三讀"
  }
];


var Progress = React.createClass({
  
  getInitialState(){
    return {
       currentIssue: {}
    }
  },

  _onSetFocusIssue(i, event){
    console.log(i);
    this.setState({
      currentIssue: i
    })
  },
  
  render () {
    var classSet = React.addons.classSet;
  	var progressBricks = data.map((item,key)=>{
        
        
        var itemClasses = classSet({
          "Progress-item" : true,
          "is-first" : key === 0,
          "is-last" : key == data.length-1
        })

        

       
        var issues = (item.issues) ? item.issues.map((i,k)=>{
            var boundClick = this._onSetFocusIssue.bind(null,i);
            var issueClasses = classSet({
                  "Progress-issue" : true,
                  "is-focused" : i.index === this.state.currentIssue.index
                })
            return (
              <a className={issueClasses}
                 key={k}
                 onClick={boundClick}>
                 <div className="Progress-issueLeft">{i.index}</div>
                 <div className="Progress-issueMain">{i.title}</div>
              </a>
            );
        }):"";

        return (
           <div className={itemClasses}
                key={key}>
                <div className="Progress-label">
                  <div>{item.stage}</div>
                </div>
                {issues}
           </div>
        )
    });
 
    var currentIssue = this.state.currentIssue;
    var currentIssueItem = (currentIssue) ? (
        <div className="Progress-focus">
            <div className="Progress-focusTitle">訴求 {currentIssue.index} <br/> {currentIssue.title}</div>
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
      ) : <div className="Progress-focus"></div>;
    
    return (
      
      <div className="Progress">
          <div className="Progress-title">立法進度</div>  
          
          <div className="Progress-bricks">
            {progressBricks}
          </div>

          {currentIssueItem}

      </div>
          
    );
  }
});

module.exports = Progress;


