const heading = React.createElement("h1", {id:"heading"}, "Hello world From React js");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); 


/* 
<div id="parent">
    <div id="child1">
        <h1>Hello world<h1>
        <h3>Hello world<h3>
    </div>
    <div id="child2">
        <h1>Hello world<h1>
        <h3>Hello world<h3>
    </div>
</div> 
*/


const parent = React.createElement("div",{id:"parent"}, [
    React.createElement("div",{id:"child1"},[ React.createElement("h1",{ },"Hello World"), React.createElement("h3",{ },"Hello World 2")]),React.createElement("div",{id:"child2"},[ React.createElement("h1",{ },"Hello World"), React.createElement("h3",{ },"Hello World 2")])] );
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(parent);