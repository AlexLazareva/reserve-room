import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';

import { ReserveRoomPage, ReserveRoomRoutes } from './pages/reserve-room/index';
import ErrorPage from './pages/error/error';

export default (
    <Route component={ App } path={ App.path }>
        <IndexRoute component={ ReserveRoomPage } />

        { ReserveRoomRoutes }
        <Route component={ ErrorPage } path='*'/>
    </Route>
);
