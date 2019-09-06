import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import Counter from './components/counter';
import './App.css';

export default class App extends Component {
  state = { 
    counters: [
        {id: 1, value: 4},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0}
    ]
  };

  handleIncrement = counter => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index].value++;
      this.setState({counters})
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    if(counters[index].value > 0) {
      counters[index].value--;
      this.setState({counters})
    }
  };
  
  handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value = 0;
        return c;
    });
    this.setState({counters})
  };

  handleAdd = () => {
    const total = this.state.counters.length;
    const newID = this.state.counters[total-1].id + 1;
    const newCounter = {id: newID, value: 0};
    const counters = [...this.state.counters, newCounter];
    this.setState({counters});
  };

  handleDelete = counterId => {
      const counters = this.state.counters.filter(c =>  c.id !== counterId);
      this.setState({counters});
  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters = {this.state.counters.filter(c => c.value > 0).length}/>
        <main className = "container">
          <Counters counters = {this.state.counters} onReset = {this.handleReset} onAdd = {this.handleAdd} onIncrement = {this.handleIncrement} onDecrement = {this.handleDecrement} onDelete = {this.handleDelete}/>
        </main>
      </React.Fragment>
    );
  }
}
