import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Home";
import Body from "./Body";

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "child1" }, "hello abhishe tag"),
    React.createElement("h2", { id: "child2" }, "hello h2 tag"),
  ])
);

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
