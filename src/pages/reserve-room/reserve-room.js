import React from 'react';
/*import { bindAll } from 'lodash';
import { connect } from 'react-redux';*/
import classnames from 'classnames';
/*import moment from 'moment';*/
import './styles.less';
import RoomsList from '../../components/rooms/rooms';

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
            ],
            days: [
                {
                    name: 'Понедельник'
                },
                {
                    name: 'Вторник'
                },
                {
                    name: 'Среда'
                },
                {
                    name: 'Четверг'
                },
                {
                    name: 'Пятница'
                }
            ],
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
                <table>
                    <thead>
                        <tr className='table__row'>
                            <th>Комната</th>
                            <th>Month</th>
                            <th></th>
                        </tr>
                    </thead>

                    <RoomsList rooms={this.state.rooms}/>


                </table>

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



