import React from 'react';
import './style.less';

export default class Hour extends React.Component {

    render() {
        return (
            <div className='hour'>
                <span className='hour__value'>{this.props.hour}</span>
                <span className='reserve-button'>&#43;</span>
            </div>
        );
    }
}
