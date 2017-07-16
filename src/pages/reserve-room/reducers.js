import { RESERVE_ROOM } from './actions';

const initialState = {
    reserve: state
};

function reserveReducer(state = initialState, action) {
        switch(action.type) {
            case RESERVE_ROOM:
                return state;
            default:
                return state;
        }
}

const ReserveRoomReducer = {
    reserve: reserveReducer
};

export default ReserveRoomReducer;
