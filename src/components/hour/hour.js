import React, { PropTypes } from 'react';
import { bindAll } from 'lodash';
import './style.less';

export default class Hour extends React.Component {

    static propTypes = {
        hour: PropTypes.any.isRequired
    };

    constructor(props) {
        super(props);

        bindAll(this, 'bookingTime');
    }

    bookingTime(event) {
        console.log('Element clicked!', event.target);
    }

    render() {
        return (
            <div className='hour' onClick={this.bookingTime}>
                <span className='hour__value'>{this.props.hour}</span>
                <span className='reserve-button'>&#43;</span>
            </div>
        );
    }
}
