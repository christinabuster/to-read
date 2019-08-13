import React, { Component } from 'react';
import Toreads from './components/Toread';
import './App.css';

// This is JSX
class App extends Component {
  state = {
    toreads:[
      {
        id: 1,
        title: 'Learn Ruby The Hard Way',
        completed: false
      },
      {
        id: 2,
        title: 'Astrophysics for People in a Hurry',
        completed: false
      },
      {
        id: 3,
        title: 'Leviathan Wakes',
        completed: false
      },
    ]
  }
render() {
  // pass the toreads in the main components state into props or properties
  return (
    <div className="App">
     <Toreads toreads={this.state.toreads} />
    </div>
  );
 }
}

export default App;
