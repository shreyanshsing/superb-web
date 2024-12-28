/* eslint-disable @typescript-eslint/no-explicit-any */
export enum NAVIGATION_ACTIONS {
    SET_CURRENT_INDEX = 'SET_CURRENT_INDEX',
    SET_IS_COLLAPSED = 'SET_IS_COLLAPSED',
}

export enum USER_ACTIONS {
    SET_USER = 'SET_USER',
    UPDATE_USER = 'UPDATE_USER',
}

export enum LOCAL_POST_ACTIONS {
    SET_TITLE = 'SET_TITLE',
    SET_CONTENT = 'SET_CONTENT',
    SET_MEDIA = 'SET_MEDIA',
    SET_MENTIONS = 'SET_MENTIONS',
    SET_TAGS = 'SET_TAGS',
}

export type ACTION_TYPES = {
    type: NAVIGATION_ACTIONS | USER_ACTIONS | LOCAL_POST_ACTIONS,
    payload: any
}

export type APP_ACTION_TYPES = ACTION_TYPES;