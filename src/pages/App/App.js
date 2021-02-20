import React, { Component } from 'react';
import CircleSelector from '../../components/CircleSelector/CircleSelector';
import Circles from '../../components/Circles/Circles';
import './App.css';

const selButton = ['1','2','3','4'];

class App extends Component {
    constructor() {
        super();
        this.state = {
          ...this.getInitialState()
        };
      }
    
      getInitialState() {
        return {
            selButtonIdx: 1
        };
      }

    handleClick = (selButton) => {
        this.setState({selButtonIdx: selButton});
      }
    
    handleSelect = (idx) => {
        this.setState({selButtonIdx: idx});
    }
    

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector 
           selButton={selButton}
           selButtonIdx = {this.state.selButtonIdx}
           handleClick = {this.handleClick}
          />
          <Circles 
            selButton={selButton}
            selButtonIdx = {this.state.selButtonIdx}
          />
        </main>
      </div>
    );
  }
}

export default App;