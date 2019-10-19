import React, { Component } from 'react';
import './Cell.css';

export default class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'purple'
        }
    }
    render() {
        return (
            <div className="grid-cell">
            </div>
        )
    }
}
