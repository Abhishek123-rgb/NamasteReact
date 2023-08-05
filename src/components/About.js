import React, {Component} from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent Contructor");
  }

  componentDidMount() {
    console.log("parent componentDidMount");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About</h1>
        <h3>This is namate React web series</h3>
        <UserClass name={"Abhishek (class)"} location={"Muzaffarpur"} />
      </div>
    );
  }
}

export default About;
