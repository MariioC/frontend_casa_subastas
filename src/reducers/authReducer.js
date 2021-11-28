import { types } from "../types/types";

const initialState = {
    logged: false
}

export const authReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case types.login:
            return action.payload;
            
        case types.logout:
            return initialState;

        default:
            return state;
    }
}
