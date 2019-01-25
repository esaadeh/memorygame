import React from "react";

function Scoreboard(props) {
    return (
        <div className="row">
        <div className="col-md-12">
          <header>
            <p>Score: {props.score}</p>
            <p>Tally: {props.tally}</p>
          </header>
        </div>
      </div>
    )

}


export default Scoreboard;
