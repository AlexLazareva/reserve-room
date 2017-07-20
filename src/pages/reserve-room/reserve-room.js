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
            m: this.props.moment

        }
    }

    prevMonth(event) {
        event.preventDefault();
        console.log('PrevMonth button clicked!', event.target);
    }

    nextMonth(event) {
        event.preventDefault();
        console.log('NextMonth button clicked!', event.target);
    }

    render() {
        const { m } = this.state;
        const weeks = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'];

        return (
            <div className='reserve-widget'>
                <div className='reserve-widget__header'>
                    <h2 className='reserve-widget__title'>Бронирование переговорок</h2>
                </div>
                <table className='table'>
                    <thead className='table__thead'>
                        <tr className='table__thead-row'>
                            <th rowSpan='2'>Комната</th>
                            <th className='toolbar' colSpan='5'>
                                <button className='btn btn__prev-month' onClick={ this.prevMonth }>
                                    <i className='fa fa-arrow-left' />
                                </button>
                                <span className='current-date'>Июль</span>
                                <button className='btn btn__next-month' onClick={ this.nextMonth }>
                                    <i className='fa fa-arrow-right' />
                                </button>
                            </th>
                        </tr>
                        <tr>
                            { weeks.map((w, i) => <th key={i}>{ w }</th>)}
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



