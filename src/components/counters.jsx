import React, { Component } from 'react';
import Counter from './counter';

export default class Counters extends Component {
    render() { 
        return (
            <div>
                <button onClick = {this.props.onReset} className="btn-primary btn-m m-2">Reset Active Items to Zero</button>
                {this.props.counters.map(counter => (
                    <Counter key = {counter.id} onIncrement = {this.props.onIncrement} onDecrement = {this.props.onDecrement} counter = {counter} onDelete = {this.props.onDelete} onReset = {this.props.onReset}>
                    </Counter>
                ))}
                <button onClick = {this.props.onAdd} className="btn-primary btn-m m-2">Add Counter</button>
            </div>
        );
    }
}