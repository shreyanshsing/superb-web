import { APP_ACTION_TYPES, LOCAL_POST_ACTIONS, NAVIGATION_ACTIONS, USER_ACTIONS } from "../actions";
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
        case USER_ACTIONS.UPDATE_USER:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload
                }
            }
        case LOCAL_POST_ACTIONS.SET_TITLE:
            return {
                ...state,
                localPost: {
                    ...state.localPost,
                    title: action.payload
                }
            }
        case LOCAL_POST_ACTIONS.SET_CONTENT:
            return {
                ...state,
                localPost: {
                    ...state.localPost,
                    content: action.payload
                }
            }
        case LOCAL_POST_ACTIONS.SET_MEDIA:
            return {
                ...state,
                localPost: {
                    ...state.localPost,
                    media: action.payload
                }
            }
        case LOCAL_POST_ACTIONS.SET_MENTIONS:
            return {
                ...state,
                localPost: {
                    ...state.localPost,
                    mentions: action.payload
                }
            }
        case LOCAL_POST_ACTIONS.SET_TAGS:
            return {
                ...state,
                localPost: {
                    ...state.localPost,
                    tags: action.payload
                }
            }
        default:
            return state;
    }
}


export default rootReducer;