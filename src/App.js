import React, { Component } from 'react';
import { connect } from 'react-redux'; //Meaning that we want to connect our App component to a slice of the store's state specified in mapStateToProps()
import './App.css';


class App extends Component {

  handleOnClickItems() {
    this.props.store.dispatch({
      type: 'GET_COUNT_OF_ITEMS',
    });
  }

  handleOnClickUsers() {
    this.props.store.dispatch({
      type: 'GET_COUNT_OF_USERS',
    });
  }

  render() {
    //debugger;
    return (
      <div className="App">
          <button onClick={() => this.handleOnClickItems()}>
            Click to change items count
            </button>
          <button onClick={() => this.handleOnClickUsers()}>
            Click to change user count
          </button>
          <p>{this.props.items.length}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { items: state.items } //This return value is the value of the props that are added to the App component
}
 
export default connect(mapStateToProps)(App);
