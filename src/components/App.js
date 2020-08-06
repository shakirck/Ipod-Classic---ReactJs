import Wheel from "./Wheel";
import Display from "./Display";
import ZingTouch from "zingtouch";

import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    //state
    this.state = {
      showMenu: false,
      songs: false,
      album: false,
      artist: false,
      playlist: false,
      recent: false,
      select: false,
      showSubMenu: false,
      games: false,
      settings: false,
      disableWheel: false,
      allsongs: false,
    };
  }
  componentDidMount() {}

  //handling clicking on menu btn
  handleClickMenu = () => {
    if (!this.state.select) {
      this.state.showMenu && !this.state.showSubMenu
        ? this.setState({
            showMenu: false,
            select: false,
          })
        : this.setState({
            showMenu: true,
            showSubMenu: false,
          });
    } else {
      this.setState({
        select: false,
      });
    }
  };

  //handling  active item in menu
  handleActiveItem = (activeItem, notActiveItem) => {
    const active = document.getElementById(activeItem);
    if (!active) {
      return;
    }
    // console.log(active);
    active.classList = "menu-item active";

    let newState = {
      [active.id]: true,
    };
    for (let item of notActiveItem) {
      const notActive = document.getElementById(item);
      // console.log(item);
      notActive.classList = "menu-item ";
      newState = {
        ...newState,
        [notActive.id]: false,
      };
    }
    this.setState({
      ...this.state,
      ...newState,
    });
  };

  //handling rotation wheel
  handleWheelRotation = (props) => {
    // console.log(this.state);
    // const { showSubMenu, showMenu } = this.state;

    const wheel = document.getElementById("circle-outside");
    const wheelRotate = new ZingTouch.Region(wheel);
    let angle = 0;
    wheelRotate.bind(wheel, "rotate", (e) => {
      angle = angle + e.detail.distanceFromLast;

      if (this.state.disableWheel) {
        return;
      }
      if (this.state.showMenu) {
        if (angle <= 20 && angle >= 0) {
          this.handleActiveItem("songs", ["games", "settings"]);
        } else if (angle >= 20 && angle <= 40) {
          this.handleActiveItem("games", ["songs", "settings"]);
        } else if (angle >= 40 && angle <= 60) {
          this.handleActiveItem("settings", ["songs", "games"]);
        }
      }
      if (this.state.showSubMenu) {
        if (angle <= 20 && angle >= 0) {
          this.handleActiveItem("allsongs", ["artist", "album", "playlist"]);
        } else if (angle >= 20 && angle <= 40) {
          this.handleActiveItem("album", ["artist", "allsongs", "playlist"]);
        } else if (angle >= 40 && angle <= 60) {
          this.handleActiveItem("artist", ["allsongs", "album", "playlist"]);
        } else if (angle >= 60 && angle <= 80) {
          this.handleActiveItem("playlist", ["allsongs", "album", "artist"]);
        }
      }
    });
  };

  //handling middle btn click
  handleSelectClick = () => {
    // console.log("handle click", this.state);
    // const { select } = this.state;
    if (this.state.songs && !this.state.showSubMenu) {
      this.setState({
        showMenu: false,
        showSubMenu: true,
      });
    } else {
      this.setState({
        select: true,
      });
    }
  };
  render() {
    // console.log("State APP", this.state);
    return (
      <div className="App">
        <Display {...this.state} />
        <Wheel
          onClickMenu={this.handleClickMenu}
          onRotate={this.handleWheelRotation}
          onSelect={this.handleSelectClick}
        />
      </div>
    );
  }
}
