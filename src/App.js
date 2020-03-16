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
        // debugger;
        return (
        <div className="App">
            <button onClick={() => this.handleOnClickItems()}>
                Click to change items count
            </button>

            <button onClick={() => this.handleOnClickUsers()}>
                Click to change user count
            </button>

            {/* <p>{this.props.items.length}</p> */}
            <p>{this.props.orangePeel.length}</p>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    // debugger;
    // return { items: state.items }
    return { orangePeel: ['a', 'b', 'c'] }  /* this return value, is the value of the props being added to the App component. */
}

export default connect(mapStateToProps)(App);

/*
NOTE:
with a dugger present in the method...
if you type in this.props while inside the render function,
you will see that this.props.orangePeel returns an array of numbers.

so by changing the key to the return value in mapStateToProps()
you changed the name of the prop in App.
*/
