const heading = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"}, [React.createElement("h1", {id: "child1"}, "hello h1 tag"), React.createElement("h2", {id: "child2"}, "hello h2 tag")]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);