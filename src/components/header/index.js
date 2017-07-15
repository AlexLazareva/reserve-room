import React from 'react';
import { Link } from 'react-router'
import './styles/styles.less';

export default class Header extends React.Component {

    render() {
        return (
            <header className='header'>
                <div className='container'>
                    <h1 className='header__title'>Бронирование переговорок</h1>
                    <nav>
                        <ul>
                            <li><Link to='/' >Бронирование переговорок</Link></li>
                            <li><Link to='/orders' >Тарифы</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}
