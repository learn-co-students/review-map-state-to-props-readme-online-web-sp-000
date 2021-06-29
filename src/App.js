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
    // debugger;
    return (
      <div className="App">
          <button onClick={() => this.handleOnClickItems()}>
            Click to change items count
            </button>
          <button onClick={() => this.handleOnClickUsers()}>
            Click to change user count
          </button>
          <h1>Items: {this.props.items.length}</h1>
          <h1>Users: {this.props.users.length}</h1>
          
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // debugger;
  return { items: state.items, users: state.users }
}

export default connect(mapStateToProps)(App);
