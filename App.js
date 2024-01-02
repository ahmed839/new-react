const parent = React.createElement(
"div", 
{id:"parent"},
React.createElement(
    "div", 
    {id:"child"},
    [React.createElement("h1",{},"I am h1 Tag"),React.createElement("h2",{},"I am h2 Tag"),React.createElement("a",{},"I am h2 Tag")]
    )
);
const heading = React.createElement("h1",{id:"heading"},"Hello World From ReactJs!!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);