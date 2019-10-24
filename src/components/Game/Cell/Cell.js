import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: {
                backgroundColor: 'purple',
                borderRight: '1px solid white',
                borderBottom: '1px solid white'
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.gem !== {} ? true : false;
    }

    componentDidMount() {
        if (this.props.gem) {
            let { style } = this.state;
            style = { ...style, backgroundColor: this.props.gem.color }
            this.setState({ style });
        }
    }

    render() {
        return (
            <div style={this.state.style}>
            </div>
        )
    }
}
