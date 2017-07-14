import React from 'react';
import { DevTools } from './utils/index';
import { Header } from './components/index';
import './styles.less';


export default class App extends React.Component {
    static path = '/';

    render() {
        return (
            <div className='wrapper'>
                <Header/>
                <h1>Hello world!</h1>
                { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
            </div>
        );
    }
}
