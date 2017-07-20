import React from 'react';
import { bindAll } from 'lodash';
import { connect } from 'react-redux';
import classnames from 'classnames';
import RoomsList from '../../components/rooms/rooms';
import './styles.less';

export default class ReserveRoomPage extends React.Component {
    static path = '/';

    constructor(props){
        super(props);

       bindAll(this, ['prevMonth', 'nextMonth']);

        this.state = {
            rooms: [
                {
                    title: 'Желтая',
                    person: 5
                },
                {
                    title: 'Красная',
                    person: 15
                },
                {
                    title: 'Зеленая',
                    person: 5
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

    prevMonth(event) {
        event.preventDefault();
        alert('PrevMonth button clicked!');
    }

    nextMonth(event) {
        event.preventDefault();
        alert('NextMonth button clicked!');
    }

    render() {
        const { m } = this.state;
        const weeks = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'];
        const shortWeeksDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт'];

        return (
            <div className='reserve-widget'>
                <div className='reserve-widget__header'>
                    <h2 className='reserve-widget__title'>Бронирование переговорок</h2>
                </div>
                <table className='table'>
                    <thead className='table__thead'>
                        <tr className='table__thead-row'>
                            <th className='table__thead-row--first' rowSpan='2'>Комната</th>
                            <th className='toolbar' colSpan='5'>
                                <button className='btn btn__prev-month' onClick={ this.prevMonth } />
                                <span className='current-date'>Июль</span>
                                <button className='btn btn__next-month' onClick={ this.nextMonth } />
                            </th>
                        </tr>
                        <tr className='week'>
                            { weeks.map((w, i) => <th className='week__item' key={i}>{ w }</th>)}
                            { shortWeeksDays.map((w, i) => <th className='week__item week__item--short' key={i}>{ w }</th>)}
                        </tr>
                    </thead>

                    <RoomsList
                        rooms={this.state.rooms}
                    />


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



