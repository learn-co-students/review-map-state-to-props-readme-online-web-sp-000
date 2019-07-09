import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    // debugger; /* Another place to put a debugger to check props */  The lesson here is that you can pass in any key for your state and it will always return as this.props.<whatever key you name>
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


// mapStateToProps takes in our state and then returns its current value. In this case, it is the count of items. ## The mapStateToProps() method is executed each time the store's state is updated. ## Putting a debugger here is a great way to remind yourself what props are beibng passed, sometimes you will have a prop that isn't rendered within a particular component, like number of users logged into the site. Can change your key/value pair for your state and it will always return as this.props.<whatever key you name>
const mapStateToProps = (state) => {
  // debugger; /* Another place to put a debugger to check props */
  return { items: state.items }
}

//here, connect allows us to allow our App component to part of the store's state -- the state that we mention in mapStateToProps, which is passed in as an argument. We can pass any function to connect, and the first arg will store state and then rerender the DOM each time state is changed. If state is ridiculously simple, you can even pass it as an arrow function. Ex: export default connect( state => ({ items: state.items }) )(App);
export default connect(mapStateToProps)(App);
