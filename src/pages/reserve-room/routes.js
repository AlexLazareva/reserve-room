import React from 'react';
import { Route } from 'react-router';
import ReserveRoomPage from './reserve-room';

export default (
    <Route>
        <Route component={ ReserveRoomPage } path={ReserveRoomPage.path}/>
    </Route>
);
