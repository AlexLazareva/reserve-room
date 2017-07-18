import React, { Component } from 'react';
import { bindAll } from 'lodash';
import Day from "../../components/day/day";
import './styles.less';

export default class RoomsList extends Component {
    constructor(props) {
        super(props);

        bindAll(this, ['renderRooms']);
    }

    renderRooms(item, idx) {
        return (
            <tr key={ idx } className='rooms'>
                <td>
                    <h3 className='rooms__title'>{ item.title }</h3>
                    <p className='rooms__description'>(до { item.person } персон)</p>
                </td>
                <Day/>
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
