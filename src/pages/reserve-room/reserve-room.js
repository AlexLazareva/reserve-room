import React from 'react';
/*import { bindAll } from 'lodash';
import { connect } from 'react-redux';*/
import classnames from 'classnames';
/*import moment from 'moment';*/
import './styles.less';
import Hour from '../../components/hour/hour';

export default class ReserveRoomPage extends React.Component {
    static path = '/';

    constructor(props){
        super(props);

        this.state = {
            text: 'String'
        }
    }

    render() {
        const { isReserved } = this.state;
        const reserveHour = classnames('hour', {'is-reserved': isReserved});

        return (
            <div className='reserve-widget'>
                <div className='reserve-widget__header'>
                    <h2 className='reserve-widget__title'>Бронирование переговорок</h2>
                </div>
                <p>{ this.state.text }</p>
                <Hour/>
            </div>
        );
    }
}

/*function mapStateToProps(state) {
    return {
        reserve: state.reserve
    };
}

export default connect(mapStateToProps)(ReserveRoomPage);*/



