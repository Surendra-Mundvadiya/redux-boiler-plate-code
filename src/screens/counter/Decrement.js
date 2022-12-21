import React, { Component } from "react";
import { connect } from "react-redux";
import constants from "../../constants";
export class Decrement extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    isValid = (num) => {
        if (num !== undefined && num !== null && !isNaN(num)) {
            return true;
        } else {
            return false;
        }
    };

    handleDecrement = () => {
        const { dispatch, counter } = this.props;
        dispatch({
            type: constants("counter").sagas.increment,
            payload: this.isValid(counter.count) ? counter.count - 1 : 0,
        });
    };

    render() {
        return <button onClick={this.handleDecrement}>Decrement</button>;
    }
}

const mapStateToProps = (state) => ({
    counter: state.counter,
});

export default connect(mapStateToProps)(Decrement);
