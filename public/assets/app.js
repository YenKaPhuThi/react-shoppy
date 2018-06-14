console.log('js');

// JSX - Javascript XML
var template = <p>Element</p>
var template = React.createElement(
  "p",
  {className: "title"},
  "Element"
);

var appRoot = document.getElementById('root');

ReactDOM.render(template, appRoot);
