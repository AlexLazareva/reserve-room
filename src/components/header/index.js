import React from 'react';
import { Link } from 'react-router'
import './styles/styles.less';

export default class Header extends React.Component {

    render() {
        return (
            <header className='header'>
                <div className='container'>
                    <div className="logo">
                        <h1 className='header__title'>Co-working center</h1>
                    </div>
                    <div className='header__menu'>
                        <ul className='header__list'>
                            <li className='header__link'><Link to='/' >Бронирование переговорок</Link></li>
                            <li className='header__link'><Link to='/orders' >Тарифы</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}
