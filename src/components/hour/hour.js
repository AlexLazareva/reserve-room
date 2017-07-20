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

        bindAll(this, ['handleSelectHour']);

        this.state = {
            isSelected: false
        }
    }

    handleSelectHour() {
        if(!this.state.isSelected) this.toggle();
    }

    toggle() {
        const isSelected = !this.state.isSelected;
        this.setState({ isSelected });
    }

    render() {
        const { isSelected } = this.state;
        const { hour } = this.props.hour;
        const hourClasses = classnames('hour', { 'active': isSelected });
        LocalStorageManager.set('hour', isSelected);
        return (
            <div className={ hourClasses } onClick={this.handleSelectHour}>
                <span className='hour__value'>{this.props.hour}</span>
                <span className='reserve-button' />
            </div>
        );
    }
}
