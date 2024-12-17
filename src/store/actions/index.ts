export enum NAVIGATION_ACTIONS {
    SET_CURRENT_INDEX = 'SET_CURRENT_INDEX',
    SET_IS_COLLAPSED = 'SET_IS_COLLAPSED',
}

export enum USER_ACTIONS {
    SET_USER = 'SET_USER',
    UPDATE_USER = 'UPDATE_USER',
}

export type ACTION_TYPES = {
    type: NAVIGATION_ACTIONS | USER_ACTIONS,
    payload: any
}

export type APP_ACTION_TYPES = ACTION_TYPES;