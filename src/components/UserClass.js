import axios from "axios";
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Abhishek",
        location: "Bihar",
      },
    };
  }

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/akshaymarch7`)
      .then((response) =>
        this.setState({
          userInfo: response?.data,
        })
      )
      .catch((error) => console.log("error", error));
  }

  render() {
    const { name, location } = this.state.userInfo;
    return (
      <div className="user-card">
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <h3>contact: 7903802495</h3>
      </div>
    );
  }
}

export default UserClass;
