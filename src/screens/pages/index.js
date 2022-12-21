import React, { Component } from "react";
import Counter from "../counter";

export class index extends Component {
    render() {
        return (
            <div className="flex align-center justify-center h-screen w-screen">
                <Counter />
            </div>
        );
    }
}

export default index;
