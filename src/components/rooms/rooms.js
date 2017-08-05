import React, { Component } from 'react';
import { bindAll } from 'lodash';
import Day from "../../components/day/day";
import './styles.less';

export default class RoomsList extends Component {
    constructor(props) {
        super(props);

        bindAll(this, ['renderRooms', 'renderDayCells']);
    }


    renderRooms(item, idx) {

        const weeksDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт'];

        return (
            <tr key={ idx } className='rooms'>
                <td className='rooms__label'>
                    <h3 className='rooms__title'>{ item.title }</h3>
                    <p className='rooms__description'>(до { item.person } персон)</p>
                </td>
                { weeksDays.map((i) => <Day key={i} onClick="" />) }

            </tr>
        );
    }



    render() {
        return (
            <tbody>
                {this.props.rooms.map(this.renderRooms)}
            </tbody>
        );
    }
}
