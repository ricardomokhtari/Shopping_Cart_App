import React, { Component } from 'react';

export default class Counter extends Component{
    handleIncrement = () => {
        this.setState({value: this.state.value + 1});
    };

    render() {
        return (
        <div>
            <h4>Item # {this.props.counter.id}</h4>
            <span className={this.getBadgeClasses()}>{this.formatValue()}</span> 
            <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-success btn-m m-2">+</button>
            <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-dark btn-m m-2">-</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-m m-2">Delete</button>
        </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatValue(){
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}