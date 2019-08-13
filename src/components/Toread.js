import React, { Component } from 'react';

// This is JSX
class Toreads extends Component {
 render() {
   // .map is a high order array method and returns an array from an array
   // use .map here to loop (like a for each) through the array and output JSX
  return this.props.toreads.map((toread) => (
    <h3>{ toread.title }</h3>
  ));
 }
}

export default Toreads;
