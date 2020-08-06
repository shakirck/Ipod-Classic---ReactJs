import React, { Component } from "react";

export default class Songs extends Component {
  render() {
    const { allsongs, album, playlist, artist, select } = this.props;
    // console.log(allsongs, "ALLSONGS");
    // console.log("SONGS", this.props);
    return (
      <div className="songs">
        <h1>songs</h1>
        {allsongs && select && (
          <div className="all-songs">
            <div className="cover-container">
              <img
                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440"
                alt="cover"
              ></img>
            </div>
            <div className="album-details-container">
              <div>
                <h3>Album Name</h3>
              </div>
            </div>
          </div>
        )}

        {album && select && <div>ALBUMs</div>}
        {playlist && select && <div>Playlists</div>}
        {artist && select && <div>Artists</div>}
      </div>
    );
  }
}
