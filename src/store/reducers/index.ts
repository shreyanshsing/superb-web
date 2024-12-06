import { APP_ACTION_TYPES, NAVIGATION_ACTIONS, USER_ACTIONS } from "../actions";
import { AppInitialState } from "../states";

const rootReducer = (state = AppInitialState, action: APP_ACTION_TYPES) => {
    switch (action.type) {
        case NAVIGATION_ACTIONS.SET_CURRENT_INDEX:
            return {
                ...state,
                navigation: {
                    ...state.navigation,
                    currentIndex: action.payload
                }
            }
        case NAVIGATION_ACTIONS.SET_IS_COLLAPSED:
            return {
                ...state,
                navigation: {
                    ...state.navigation,
                    isCollapsed: action.payload
                }
            }
        case USER_ACTIONS.SET_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}


export default rootReducer;