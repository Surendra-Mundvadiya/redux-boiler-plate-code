import constants from "../constants";

const initial_state = {};

export default function auth(state = initial_state, action) {
    console.log("action", action);
    switch (action.type) {
        //increment
        case constants("counter").reducers.increment.load:
            return {
                ...state,
                loading: true,
            };
        case constants("counter").reducers.increment.success:
            return {
                ...state,
                success: true,
                loading: false,
                count: action.payload,
            };
        case constants("counter").reducers.increment.error:
            return {
                ...state,
                loading: false,
            };
        case constants("counter").reducers.increment.unload:
            return {
                ...state,
                loading: false,
            };

        //decrement
        case constants("counter").reducers.decrement.load:
            return {
                ...state,
                loading: true,
            };
        case constants("counter").reducers.decrement.success:
            return {
                ...state,
                success: true,
                loading: false,
                count: action.payload,
            };
        case constants("counter").reducers.decrement.error:
            return {
                ...state,
                loading: false,
            };
        case constants("counter").reducers.decrement.unload:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}
