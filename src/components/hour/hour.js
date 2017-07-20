import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { bindAll } from 'lodash';
import { LocalStorageManager } from './../../utils/index';
import './styles.less';

export default class Hour extends React.Component {

    static propTypes = {
        hour: PropTypes.any.isRequired
    };

    constructor(props) {
        super(props);

        bindAll(this, ['handleBooking']);

        this.state = {
            isBooking: false
        }
    }

    handleBooking() {
        if(!this.state.isBooking) this.toggle();
    }

    toggle() {
        const isBooking = !this.state.isBooking;
        this.setState({ isBooking });
    }

    render() {
        const { isBooking } = this.state;
        const { hour } = this.props.hour;
        const hourClasses = classnames('hour', { 'active': isBooking });
        LocalStorageManager.set('hour', isBooking);
        return (
            <div className={ hourClasses } onClick={this.handleBooking}>
                <span className='hour__value'>{this.props.hour}</span>
                <span className='reserve-button'><i className='fa fa-plus' /></span>
            </div>
        );
    }
}
