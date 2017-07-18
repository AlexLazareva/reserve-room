import React from 'react';
import Hour from './../hour/hour';
import './styles.less';

export default class Day extends React.Component {



    render() {
        const hours1 = ['9:00', '10:00', '11:00', '12:00', '13:00'];
        const hours2 = ['14:00', '15:00', '16:00', '17:00', '18:00'];
        return (
            <td className='day'>
                <div className='day__column'>{ hours1.map((h, i) => <Hour key={i} hour={h} />) }</div>
                <div className='day__column'>{ hours2.map((h, i) => <Hour key={i} hour={h} />) }</div>
            </td>
        );
    }
}
