import React from 'react';
import './styles/styles.less';

export default class Header extends React.Component {

    render() {
        return (
            <header className='header'>
                <div className='container'>
                    <h1 className='header__title'>Бронирование переговорок</h1>
                </div>
            </header>
        );
    }
}
