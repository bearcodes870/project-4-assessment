import React, { Component } from 'react';
import CircleSelector from '../../components/CircleSelector/CircleSelector';
import Circles from '../../components/Circles/Circles';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
          ...this.getInitialState()
        };
      }
    
      getInitialState() {
        return {
            selColorIdx: 1
        };
      }

    handleClick = (idx) => {
        this.setState({selColorIdx: idx});
      }
    

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
            Selected Color: {this.state.selColorIdx}
          <CircleSelector 
           selColorIdx = {this.state.selColorIdx}
           handleClick = {this.handleClick}
          />
          <Circles />
        </main>
      </div>
    );
  }
}

export default App;