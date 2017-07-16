import React from 'react';
import { connect } from 'react-redux';
import RoomsRow from './../../components/row/index';
import './styles.less';

class ReserveRoomPage extends React.Component {
    static path = '/';

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='reserve-widget'>
                <div className='reserve-widget__header'>
                    <h2 className='reserve-widget__title'>Бронирование переговорок</h2>
                </div>
                <RoomsRow/>
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



