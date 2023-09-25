import React from "react";
export class CounterClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }
    render() {
        return (
            <p
                onClick={() =>
                    this.setState(state => ({
                        counter: state.counter + 1,
                    }))
                }
            >
                current count number is: {this.state.counter}
            </p>
        );
    }
}
