import React from 'react';
/*import { bindAll } from 'lodash';
import { connect } from 'react-redux';*/
import classnames from 'classnames';
/*import moment from 'moment';*/
import './styles.less';
import RoomsList from '../../components/rooms/rooms';
import Day from "../../components/day/day";

export default class ReserveRoomPage extends React.Component {
    static path = '/';

    constructor(props){
        super(props);

        this.state = {
            rooms: [
                {
                    title: 'Зеленая',
                    person: 5
                },
                {
                    title: 'Красная',
                    person: 15
                },
                {
                    title: 'Синяя',
                    person: 25
                },
                {
                    title: 'Фиолетовая',
                    person: 25
                }
            ]
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
                <div className='table'>
                    <div className='table__row-group'>
                        <div className='table__row'>
                            <div className='table__head'>Комната</div>
                            <div className='table__head'>Month</div>
                        </div>
                        <div>
                            <RoomsList rooms={this.state.rooms}/>
                            <Day/>
                            <Day/>
                            <Day/>
                            <Day/>
                            <Day/>
                        </div>


                    </div>

                </div>

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



