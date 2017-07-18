import React from 'react';
/*import { bindAll } from 'lodash';
import { connect } from 'react-redux';*/
import classnames from 'classnames';
import './styles.less';
import RoomsList from '../../components/rooms/rooms';

export default class ReserveRoomPage extends React.Component {
    static path = '/';

    static propTypes = {

    };

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
            m: this.props.moment,

        }
    }


    render() {
        const { m } = this.state;
        const weeks = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'];

        return (
            <div className='reserve-widget'>
                <div className='reserve-widget__header'>
                    <h2 className='reserve-widget__title'>Бронирование переговорок</h2>
                </div>
                <table>
                    <thead>
                        <tr className='table__row--head'>
                            <th rowSpan='2'>Комната</th>
                            <th className='toolbar' colSpan='5'>
                                <button className='btn prev-month'> &larr; </button>
                                <span className='current-date'>Июль</span>
                                <button className='btn next-month'> &rarr; </button>
                            </th>
                        </tr>
                        <tr>
                            { weeks.map((w, i) => <td key={i}>{ w }</td>)}
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



