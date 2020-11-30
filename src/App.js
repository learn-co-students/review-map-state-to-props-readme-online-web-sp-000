import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';


class App extends Component {

  handleOnClickItems() {
    this.props.dispatch({
      type: 'GET_COUNT_OF_ITEMS',
    });
  }

  handleOnClickUsers() {
    this.props.dispatch({
      type: 'GET_COUNT_OF_USERS',
    });
  }

  render() {
    debugger;
    return (
      <div className="App">
          <button onClick={() => this.handleOnClickItems()}>
            Click to change items count
            </button>
          <button onClick={() => this.handleOnClickUsers()}>
            Click to change user count
          </button>
          <p>{this.props.orangePeel.length}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // debugger;
  return { orangePeel: state.items }
}

// const vanilla = (milkshake) => {
//   debugger;
//   return { items: milkshake.items }
// }

export default connect(mapStateToProps)(App);
