import React, { Component } from "react";

export default class Wheel extends Component {
  render() {
    console.log(this.props);
    const { onRotate, onSelect } = this.props;
    return (
      <div className="wheel-container">
        <div id="circle-outside" onClick={onRotate}>
          <span
            draggable="false"
            className="menu-btn controll-btns"
            onClick={this.props.onClickMenu}
          >
            MENU
          </span>
          <img
            draggable="false"
            className="prev-btn controll-btns"
            src="https://image.flaticon.com/icons/svg/25/25616.svg"
          />
          <img
            draggable="false"
            className="next-btn controll-btns"
            src="https://image.flaticon.com/icons/svg/25/25616.svg"
          />
          <img
            draggable="false"
            className="play-pause-btn controll-btns"
            src="https://image.flaticon.com/icons/svg/64/64595.svg"
          />

          <div className="circle-inside" onClick={onSelect}></div>
        </div>
      </div>
    );
  }
}
