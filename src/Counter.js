import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    count: 0
  }
  
  incrementCounter = (amount) => this.setState(prevState => ({
    count: prevState.count + amount
  }));

  hardSetCounter = (newCount) => this.setState({
    count: newCount
  })

  render() {
    const { count } = this.state;
    return (
      <section className="Counter">
        <h1>Count: {count}</h1>
        <button onClick={() => this.incrementCounter(1)} className="full-width">Increment</button>
        <button onClick={() => this.incrementCounter(-1)} className="full-width">Decrement</button>
        <button onClick={() => this.hardSetCounter(0)} className="full-width">Reset</button>
      </section>
    );
  }
}
