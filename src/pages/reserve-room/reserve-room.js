import React from 'react';
import './styles.less';

export default class ReserveRoomPage extends React.Component {
    static path = '/';

    render() {
        return (
            <div className='reserve-widget'>
                <div className='reserve-widget__header'>
                    <h2 className='reserve-widget__title'>Бронирование переговорок</h2>
                </div>
                <p>Резервировать здесь</p>
            </div>
        );
    }
}
