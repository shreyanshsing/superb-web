export interface NavigationState {
    currentIndex: number;
    isCollapsed: boolean;
}

export interface UserState {
    user: any;
}

export const navigationInitialState: NavigationState = {
    currentIndex: 0,
    isCollapsed: false
}

export interface SnackbarState {
    snackbar: any[];
}

export const snackbarInitialState: SnackbarState = {
    snackbar: []
}

export type AppState = {
    user: any,
    navigation: NavigationState,
}

export const AppInitialState: AppState = {
    user: null,
    navigation: navigationInitialState,
}