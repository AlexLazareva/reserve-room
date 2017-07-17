import React, { Component } from 'react';
import { bindAll } from 'lodash';
import './styles.less';

export default class RoomsList extends Component {
    constructor(props) {
        super(props);

        bindAll(this, ['renderRooms']);
    }

    renderRooms(item, idx) {
        return (
            <div key={ idx } className='rooms'>
                <h3 className='rooms__title'>{ item.title }</h3>
                <p className='rooms__description'>(до { item.person } персон)</p>
            </div>
        );
    }

    render() {

        return (
            <div>
                {this.props.rooms.map(this.renderRooms)}
            </div>
        );
    }
}
