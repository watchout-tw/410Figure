/** @jsx React.DOM */

var React = require('react/addons');
var d3 = require("d3");

var Bar = require('../Bar/Bar.jsx');


var Chart = React.createClass({
  
  getDefaultProps: function() {
    return {
      title: '',
      data: []
    }
  },

  render: function() {
    /////////
    // NEEDS REWRITE
    ////////

    var props = this.props;

    var yScale = d3.scale.linear()
      .domain([0, d3.max(this.props.data)])
      .range([0, this.props.height]);

    var xScale = d3.scale.ordinal()
      .domain(d3.range(this.props.data.length))
      .rangeRoundBands([0, this.props.width], 0.05);
      

    
    var chart = <g></g>;
    
    if(props.type==="BarChart"){
    	// Bar Chart
        var colorIndex = 0;
        var previousPoint = -1;
        var bars = this.props.data.map(function(point, i) {
            var color = "lightblue";
            return (
             <Bar percentage={props.percentage}
                  value={point}
                  height={yScale(point)} 
                  width={xScale.rangeBand()} 
                  offset={xScale(i)} 
                  availableHeight={props.height} 
                  color={color} 
                  key={i} />
           )
        });
        chart = bars;

    }else if(props.type==="BubbleChart"){

    }else{

    }
        
    

    return (
      <svg width={this.props.width} 
             height={this.props.height}>{chart}</svg>
    );
  }
});

module.exports = Chart;


