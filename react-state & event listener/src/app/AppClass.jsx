import React from "react";
import { CounterClass } from "../components/CounterClass";
export default class AppClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "jiang",
            age: 12,
        };
    }
    render() {
        return (
            <div>
                <h1
                    onClick={() => {
                        this.setState({ name: "cyclone", age: 15 });
                    }}
                >
                    Hi {this.state.name} {this.state.age}
                </h1>
                <CounterClass />
            </div>
        );
    }
}
