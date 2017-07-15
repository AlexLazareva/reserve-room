import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app';

import { ReserveRoomPage, ReserveRoomRoutes } from './pages/reserve-room/index';

export default (
    <Route component={ App } path={ App.path }>
        <IndexRoute component={ ReserveRoomPage } />

        { ReserveRoomRoutes }

    </Route>
);
