import React, { Component } from "react";
import { connect } from "react-redux";
import constants from "../../constants";
export class Increment extends Component {
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
    handleIncrement = () => {
        const { dispatch, counter } = this.props;
        dispatch({
            type: constants("counter").sagas.increment,
            payload: this.isValid(counter.count) ? counter.count + 1 : 0,
        });
    };

    render() {
        return <button onClick={this.handleIncrement}>Increment</button>;
    }
}

const mapStateToProps = (state) => ({
    counter: state.counter,
});

export default connect(mapStateToProps)(Increment);
