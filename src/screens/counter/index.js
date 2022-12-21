import React, { Component } from "react";
import { connect } from "react-redux";
import Decrement from "./Decrement";
import Increment from "./Increment";
import View from "./View";

export class Counter extends Component {
    render() {
        return (
            <div className="flex gap-1">
                <Increment />
                <View />
                <Decrement />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    counter: state.counter,
});

export default connect(mapStateToProps)(Counter);
