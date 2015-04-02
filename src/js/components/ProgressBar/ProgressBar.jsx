/** @jsx React.DOM */

var React = require('react/addons');

//英國國會
//http://services.parliament.uk/bills/2013-14/transparencyoflobbyingnonpartycampaigningandtradeunionadministration.html

require('./ProgressBar.css');

var data = [
  {
    "stage":"程序委員會",
    "state":"completed"
  },
  {
    "stage":"一讀",
    "state":"completed",
    "meetings":[{
      "date" : "2013.10.25",
      "desition" : "交司法及法制委員會審查。",
      "chairperson" : "王金平",
      "link" : "http://lis.ly.gov.tw/lgcgi/lypdftxt?10205801;0014;0014"
    }]
  },
  {
    "stage":"委員會",
    "state":"current",
    "meetings":[{
      "date" : "2013.12.22",
      "desition" : "另定期繼續審查",
      "chairperson" : "尤美女",
      "link" : "http://lis.ly.gov.tw/lgcgi/lypdftxt?10400501;0069;0105",
      "briefTitle" : "婚姻平權法初審 法務部反對",
      "briefContent" : "立法院司法法制委員會首度排審攸關婚姻平權的「民法親屬編、繼承編部分條文修正草案」，這是東亞國家史上首次在國會審議婚姻平權法案。不過法務部對於同性婚姻法案持反對態度。法務部次長陳明堂報告時指出，婚姻平權法案仍有不少爭議，將衝擊現有婚姻制度，若為了保障同性伴侶的婚姻權益，徑將親屬編、繼承編中「男、女、夫、妻、父、母」兩性用語全部移除，與我國親屬人倫觀念嚴重不合，難被大多數人民接受。"
    }]
  },
  {
    "stage":"黨團協商",
    "state":"locked"
  },
  {
    "stage":"二讀",
    "state":"locked"
  },
  {
    "stage":"三讀",
    "state":"locked"
  }
];
var versions = [
  {
    "proposer" : "尤美女",
    "link" : "http://ly.g0v.tw/bills/1150L14506",
  },
  {
    "proposer" : "吳宜臻",
    "link" : "http://ly.g0v.tw/bills/1150L13008",
  },
  {
    "proposer" : "鄭麗君",
    "link" : "http://ly.g0v.tw/bills/1150L15359",
  },
  {
    "proposer" : "王惠美",
    "link" : "http://ly.g0v.tw/bills/1150L17048",
  }
]

var ProgressBar = React.createClass({
  
  getInitialState(){
    return {
       currentMeeting: {}
    }
  },

  _onSetMeetings(i, event){
    console.log(i);
    this.setState({
      currentMeeting: i
    })
  },
  
  render () {
    var classSet = React.addons.classSet;
  	var progressBricks = data.map((item,key)=>{
        
        var brickClasses = classSet({
          "ProgressBar-brick" : true,
          "is-first" : key === 0,
          "is-last" : key == data.length-1,
          "is-completed" : item.state === "completed",
          "is-current" : item.state === "current"
        })

        var meetings = (item.meetings) ? item.meetings.map((i,k)=>{
            var boundClick = this._onSetMeetings.bind(null,i);
            return (
              <a className="ProgressBar-date"
                 href={i.link}
                 key={k}
                 target="_blank">{i.date}</a>
            );
        }):"";

        return (
           <div className="ProgressBar-item">
              <div className={brickClasses}
                key={key}>
                <div>{item.stage}</div>
              </div>
              {meetings}
           </div>
        )
    });
    var versionItems = versions.map((item,key)=>{
      var path = "./images/"+item.proposer+".png";
      var imgURL = require(path);
      return (
         <a className="ProgressBar-version"
            key={key}
            href={item.link}
            target="_blank">
              <img className="ProgressBar-img"
                   src={imgURL}/>
              <div className="ProgressBar-proposer">{item.proposer}</div>
         </a>

      )
    });
    return (
      <div className="ProgressBar">
           <div className="ProgressBar-title">婚姻平權</div>
           <div className="ProgressBar-section">進度：委員會審查中</div>
           {progressBricks}
           <div className="ProgressBar-section">版本：4 提案版本</div>
           {versionItems}

      </div>
    );
  }
});

module.exports = ProgressBar;


