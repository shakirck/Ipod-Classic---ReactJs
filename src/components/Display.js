import React, { Component } from "react";
import Settings from "./Settings";
import Games from "./Games";
import Songs from "./Songs";

export default class Display extends Component {
  render() {
    // console.log("Display", this.props);
    const { showMenu, showSubMenu, select } = this.props;

    return (
      <div className="display-wrapper">
        <div className="display-screen">
          {showMenu && !showSubMenu && !select && (
            <div className="menu-wrapper">
              <div className="logo">iPod Classic</div>
              <ul className="menu">
                <li className="menu-item " id="songs">
                  Songs
                </li>

                <li className="menu-item" id="games">
                  Games
                </li>
                <li className="menu-item" id="settings">
                  Settings
                </li>
              </ul>
            </div>
          )}

          {showSubMenu && !select && (
            <div className="menu-wrapper">
              <div className="logo">iPod Classic</div>
              <ul className="menu">
                <li className="menu-item" id="allsongs">
                  All Songs
                </li>
                <li className="menu-item" id="album">
                  Album
                </li>
                <li className="menu-item" id="artist">
                  Artist
                </li>
                <li className="menu-item" id="playlist">
                  Playlist
                </li>
              </ul>
            </div>
          )}

          {select && this.props.settings && <Settings />}
          {select && this.props.games && <Games />}
          {select && this.props.songs && select && <Songs {...this.props} />}
          {/* {select && this.props.games && <Games />} */}
        </div>
        {/* {showMenu || (showSubMenu && <div>SIde</div>)} */}
      </div>
    );
  }
}
