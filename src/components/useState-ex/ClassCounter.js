import React from 'react';
import './App.css';

class ClassCounter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    };

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    };

    render() {
        return (
            <div className="App">
                <button onClick={this.incrementCount}>Count: {this.state.count} </button>
            </div>
          )
        };
}
  

export default ClassCounter;