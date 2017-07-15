import React from 'react';
import { DevTools } from './utils/index';
import { Header } from './components/index';
import './styles/styles.less';


export default class App extends React.Component {
    static path = '/';

    render() {
        return (
            <div className='wrapper'>
                <Header/>

                { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
            </div>
        );
    }
}
