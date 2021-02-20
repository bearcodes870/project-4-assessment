import React, { Component } from 'react';
import CircleSelector from '../../components/CircleSelector/CircleSelector';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
          selColorIdx: '',
          ...this.getInitialState(),
        };
      }
    
      getInitialState() {
        return {
            selColorIdx: 1
        };
      }
    

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
            Selected Color: {this.state.selColorIdx}
          <CircleSelector />
        </main>
      </div>
    );
  }
}

export default App;