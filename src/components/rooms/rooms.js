import React, { Component } from 'react';

export default class RoomsList extends Component {
    constructor(props) {
        super(props);
    }

    renderRooms(item, idx) {
        return (
            <div key={ idx }>
                <h3>{ item.title }</h3>
                <p>(до { item.person } персон)</p>
            </div>
        );
    }

    render() {

        return (
            <div>
                {this.props.rooms.map(this.renderRooms.bind(this))}
            </div>
        );
    }
}
