/** @jsx React.DOM */

var React = require('react/addons');

//英國國會
//http://services.parliament.uk/bills/2013-14/transparencyoflobbyingnonpartycampaigningandtradeunionadministration.html

require('./Progress.css');

var data = [
  {
    "stage":"尚未提案",
    "issues" : [
        {
          "index":"3",
          "topic":"選罷法",
          "title":"建立電子提案及連署系統",
          "currentLaw" : "選罷法76條，提議人名冊，應依規定格式逐欄詳實填寫，並填具提議人國民身分證統一編號及戶籍地址分村（里）裝訂成冊。選罷法80條，連署人名冊，應依規定格式逐欄詳實填寫，並填具連署人國民身分證統一編號及戶籍地址，分村（里）裝訂成冊，連署人名冊未依規定格式提出者，選舉委員會應不予受理。",
          "proposedLaw" : "",
          "govState" : ""
        }
    ]
  },
  {
    "stage":"程序委員會",
    "issues" : [
        {
          "index":"5",
          "topic":"公投法",
          "title":"建立電子提案及連署系統",
          "currentLaw" : "公投法9、10條，提案或連署人需要親筆簽名，並註明身分證字號及戶籍地址。完成後將紙本送交中選會提出",
          "proposedLaw" : "",
          "govState" : "應視社會各界對電子投票的共識性及信賴度而定"
        },
        {
          "index":"1",
          "topic":"選罷法",
          "title":"提案門檻降低。刪除軍公職不得提議之規定",
          "currentLaw" : "選罷法76條，提案罷免人數須在原選舉區選舉人總數2%以上；選罷法77條，現役軍人、服替代役之現役役男或公務人員，不得為罷免案提議人",
          "proposedLaw" : "",
          "govState" : "罷免影響政治秩序安定，制度上有一定限制。但門檻攸關人民參政權，支持理性討論"
        },
        {
          "index":"2",
          "topic":"選罷法",
          "title":"連署門檻降低、期間延長",
          "currentLaw" : "選罷法80條，立委、直轄市議員、市長，縣市首長的罷免案，連署期為30天；選罷法81條，連署罷免人數須在原選舉區選舉人總數13%以上",
          "proposedLaw" : "",
          "govState" : "罷免影響政治秩序安定，制度上有一定限制。但門檻攸關人民參政權，支持理性討論"
        },
        {
          "index":"4",
          "topic":"選罷法",
          "title":"廢除50%投票門檻",
          "currentLaw" : "選罷法90條，「罷免案投票人數不足原選舉區選舉人總數二分之一以上或同意罷免票數未超過有效票二分之一以上」，均視為罷免案遭到否決。",
          "proposedLaw" : "",
          "govState" : "罷免影響政治秩序安定，制度上有一定限制。但門檻攸關人民參政權，支持理性討論"
        },
        {
          "index":"5",
          "topic":"選罷法",
          "title":"廢除不合理程序限制",
          "currentLaw" : "選罷法81條，同一罷免案的提議人不得為連署人，應分開計算；選罷法86條，罷免可設辦事處，但除了連署支必要活動之外，不得有宣傳罷免的行為；選罷法87條，罷免投票不得與其他選舉同時舉行",
          "proposedLaw" : "",
          "govState" : "支持刪除「罷免不得宣傳」"
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
          "topic":"公投法",
          "title":"擴大全國性公投適用範圍",
          "currentLaw" : "依據《公民投票法》第2條，公投適用範圍為：法律之複決、立法原則創制、重大政策之創制複決、憲法修正案之複決；另外，也適用於地方自治事項。但是，預算、租稅、投資、薪俸及人事事項，不適用於公民投票的範圍。",
          "proposedLaw" : "",
          "govState" : ""
        },
        {
          "index":"2",
          "topic":"公投法",
          "title":"廢除公投審議委員會",
          "currentLaw" : "公投法33、34條，行政院應設公投審議委員會，就全國性公民投票事項之認定、是否於期限內重複提案，進行審議。",
          "proposedLaw" : "",
          "govState" : "審議委員會有協助人民行使創制複決功能，且已修法規定委員會內同黨委員不得超過總額二分之一，具有公正性及獨立性"
        },
        {
          "index":"3",
          "topic":"公投法",
          "title":"降低提案門檻",
          "currentLaw" : "公投法10條，公民投票提案人數，應達最近一次總統選舉總人數5/1000以上",
          "proposedLaw" : "",
          "govState" : "門檻能確保提案的公共性，門檻過低、動輒公投恐造成社會過度動員、政府公共經費支出"
        },
        {
          "index":"4", 
          "topic":"公投法",
          "title":"降低連署門檻",
          "currentLaw" : "公投法12條，連署人數應達到最近一次總統大選選舉人總數5/100以上",
          "proposedLaw" : "",
          "govState" : "門檻能確保提案的公共性，門檻過低、動輒公投恐造成社會過度動員、政府公共經費支出"
        },
        {
          "index":"6", 
          "topic":"公投法",
          "title":"廢除50%投票門檻",
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
       currentTopic: "公投法", //選罷法
       currentIssue: {
          "index":"1",
          "topic":"公投法",
          "title":"擴大全國性公投適用範圍",
          "currentLaw" : "依據《公民投票法》第2條，公投適用範圍為：法律之複決、立法原則創制、重大政策之創制複決、憲法修正案之複決；另外，也適用於地方自治事項。但是，預算、租稅、投資、薪俸及人事事項，不適用於公民投票的範圍。",
          "proposedLaw" : "",
          "govState" : ""
        }
    }
  },

  _onSetFocusTopic(t, event){
    console.log(t);
    
    var defaultObj = (t === "公投法") ? {
          "index":"1",
          "topic":"公投法",
          "title":"擴大全國性公投適用範圍",
          "currentLaw" : "依據《公民投票法》第2條，公投適用範圍為：法律之複決、立法原則創制、重大政策之創制複決、憲法修正案之複決；另外，也適用於地方自治事項。但是，預算、租稅、投資、薪俸及人事事項，不適用於公民投票的範圍。",
          "proposedLaw" : "",
          "govState" : ""
        } : {
          "index":"1",
          "topic":"選罷法",
          "title":"提案門檻降低。刪除軍公職不得提議之規定",
          "currentLaw" : "選罷法76條，提案罷免人數須在原選舉區選舉人總數2%以上；選罷法77條，現役軍人、服替代役之現役役男或公務人員，不得為罷免案提議人",
          "proposedLaw" : "",
          "govState" : "罷免影響政治秩序安定，制度上有一定限制。但門檻攸關人民參政權，支持理性討論"
        };
    
    this.setState({
      currentTopic: t,
      currentIssue: defaultObj
    })

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

        var issues = (item.issues) ? item.issues

        .filter((item)=>{
            return item.topic === this.state.currentTopic
        })
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
                <div className="Progress-issues">{issues}</div>
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

    var topics = ["公投法", "選罷法"];
    var buttonItems = topics.map((item,key)=>{
        var boundClick = this._onSetFocusTopic.bind(null,item);
        var buttonClasses = classSet({
                             "Progress-button" : true,
                             "is-focused" : item === this.state.currentTopic
                           })
        return (
           <div className={buttonClasses}
                key={key}
                onClick={boundClick}>{item}</div>
        );
    });
    
    return (
      
      <div className="Progress">
          {buttonItems}
          
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


