import React, { Component } from "react";

export default class Settings extends Component {
  componentDidMount() {
    this.setState({
      disableWheel: true,
    });
  }
  componentWillUnmount() {
    this.setState({
      disableWheel: false,
    });
  }
  render() {
    return (
      <div className="settings">
        <div className="center-image">
          <img
            src="https://cdn.iconscout.com/icon/free/png-512/apple-settings-1-493162.png"
            alt="settings"
          />
        </div>
      </div>
    );
  }
}
