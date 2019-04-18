import React, { Component } from 'react';
import logo from './logo.svg';
import './Box.css';

class Box extends Component {


    getClassName() {
        let extra= '';

        if (this.props.value != null) {
            extra = `box-${this.props.value}`;
        }

        return `box ${extra}`;
    }

    render() {
        const value = this.props.value == 0 ? '' : this.props.value;
        return (
            <div className={this.getClassName()}>
                <span>
                    {value}
                </span>

            </div>
        );
    }
}


export default Box;
