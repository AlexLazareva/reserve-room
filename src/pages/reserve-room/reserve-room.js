import React from 'react';
import './styles.less';

export default class ReserveRoomPage extends React.Component {
    static path = '/';

    render() {
        return (
            <div className='reserve-widget'>
                <p>Резервировать здесь</p>
            </div>
        );
    }
}
