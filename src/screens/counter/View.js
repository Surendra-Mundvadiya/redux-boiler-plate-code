import React, { Component } from "react";
import { connect } from "react-redux";

class View extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {
        const { counter } = this.props;
        return <h1>{counter.count}</h1>;
    }
}

const mapStateToProps = (state) => ({
    counter: state.counter,
});

export default connect(mapStateToProps)(View);
