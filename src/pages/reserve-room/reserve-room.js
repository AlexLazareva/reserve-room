import React from 'react';
import { bindAll } from 'lodash';
import { connect } from 'react-redux';
import classnames from 'classnames';
import RoomsRow from './../../components/row/index';
import './styles.less';

class ReserveRoomPage extends React.Component {
    static path = '/';

    constructor(props) {
        super(props);

        bindAll(this, ['isReserved']);

        this.state = {
            isReserved: false
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
                <RoomsRow onClick="" />
                <p>Резервировать здесь</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        reserve: state.reserve
    };
}

export default connect(mapStateToProps)(ReserveRoomPage);



