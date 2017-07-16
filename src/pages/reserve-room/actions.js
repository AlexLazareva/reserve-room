export const RESERVE_ROOM = 'RESERVE_ROOM';

export function reserveRoom(state) {
    return {
        type: RESERVE_ROOM,
        state
    };
}
