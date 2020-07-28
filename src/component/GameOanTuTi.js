import React, { Component } from "react";
import Play from "./Play";


export default class GameOanTuTi extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url('./img/bgGame.png')`,
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          position: 'relative',
          backgroundPosition: 'center center'
        }}
      >
        <Play />
      </div>
    );
  }
}
