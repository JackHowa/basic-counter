import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    count: 0
  }
  
  // better to have one reference rather than instantiate each time 
  // on render for perf 
  incrementCounter = () => this.setState(prevState => ({
    count: prevState.count + 1
  }));

  decrementCounter = () => this.setState(prevState => ({
    count: prevState.count - 1
  }));

  resetCounter = () => this.setState({
    count: 0
  })

  render() {
    const { count } = this.state;
    return (
      <section className="Counter">
        <h1>Count: {count}</h1>
        <button onClick={this.incrementCounter} className="full-width">Increment</button>
        <button onClick={this.decrementCounter} className="full-width">Decrement</button>
        <button onClick={this.resetCounter} className="full-width">Reset</button>
      </section>
    );
  }
}
