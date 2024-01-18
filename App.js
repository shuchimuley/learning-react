/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>Hello from React</h1>
 *          <h2>Hello I am an h2 tag</h2>
 *      </div>
 * </div>
 * 
 * ReactElement is a react element object which renders into an HTML
 */



// Create an element from react.development methods. It is actually an object. 
const reactElement = React.createElement(
    "div", 
    {id:"parent"} , 
    React.createElement(
        "div", 
        {id:"child"}, 
        [React.createElement(
            "h1", 
            {id:"heading1"}, 
            "Hello from React!"), 
        React.createElement(
                "h2", 
                {id:"heading2"}, 
                "Hello I am an h2 tag!"), 
        ] ));


console.log(reactElement);
// creates a root element
const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

// Render the object
reactRoot.render(reactElement);

// Creating new element again and again gets complicated to write, so we use JSX