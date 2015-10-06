var data = [{grade: "7th",
             standard:"Argue from evidence"},
            {grade: "8th",
             standard:"Argue form evidence"}];

var GradeStandardContent = React.createClass({
  render: function(){
    var standardsContentStyle = {
      position: "absolute",
      right: 0
    };
    if(this.props.isHovered){
      return <div style={standardsContentStyle}>{this.props.content}</div>
      } else{
        return <div></div>
      }
    }
});

var GradeStandard = React.createClass({
  getInitialState: function(){
    return {hover: false, active: false}
  },

  mouseOver: function(){
    this.setState({hover: true});
  },

  mouseOut: function(){
    this.setState({hover: false});
  },
   
  render: function() {
    var current = false;
      if(this.state.hover){
        current = true;
        }
    return <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
             This lesson covers the {this.props.data.grade} standards to the right.
             <GradeStandardContent isHovered={current} content={this.props.data}></GradeStandardContent>
           </div>
  }
});

var StandardsList = React.createClass({
  render: function() {
    return (
      <ul>
        {this.props.standardsData.map(function(standard) {
          return <GradeStandard key={standard.id} data={standard} />
         })}
      </ul>
    );
  }    
});

var StandardsBox = React.createClass({
  render : function() {
    var boxStyle = {
      backgroundColor: "purple"
    };

    return (
      <div style={boxStyle} className="standardsBox">
        <h1>This lesson covers:</h1>
        <StandardsList standardsData={data} />
      </div>
    );
  }
});

React.render(
  React.createElement(StandardsBox, null),
  document.getElementById('content')
);

var listStyle = {
  backgroundColor: "blue"
};
