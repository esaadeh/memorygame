import React, { Component } from 'react';
import './App.css';
import cards from "./cards.json";
import Scoreboard from "./components/Scoreboard";
import Card from "./components/Card";

class App extends Component {

  state = {
    randomNum: 0,
    score: 0,
    tally: 0,
    objects: cards
  };

  handleClick = id => {
    this.setState({
      tally: this.state.tally + 1
    });
    alert(`Clicked object: ${id}`);
  }

  render() {
    return (
      <div className="container">
       <Scoreboard score={this.state.score} tally={this.state.tally}/>
            <div className="row">
          {this.state.objects.map(object => (
            // <div 
            // style={{backgroundImage: `url(${object.image})`}}
            // key={object.id}
            // className="chi-card col-md-4" 
            // // () => is to not run the on click when rendering the object but wait for onClicks
            // onClick={() => this.handleClick(object.id)}
            // >
            // {object.name}
            // </div>
            <Card 
            id={object.id}
            key={object.id}
            name={object.name}
            image={object.image}
            handleClick={this.handleClick}

            />
          ))}

        </div>

      </div>
    );
  }
}

export default App;
