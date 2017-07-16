import React from 'react';
import './style.less';

export default class Hour extends React.Component {

    render() {
        return (
            <div className='hour'>
                <span className='hour__value'>9:00</span>
                <span className='reserve-button'>+</span>
            </div>
        );
    }
}
