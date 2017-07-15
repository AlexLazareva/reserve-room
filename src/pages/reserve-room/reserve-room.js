import React from 'react';
import './styles.less';

export default class ReserveRoomPage extends React.Component {
    static path = '/';

    render() {
        return (
            <div className='reserve-widget'>
                <div className='container'>
                    <p>Резервировать здесь</p>
                </div>
            </div>
        );
    }
}
