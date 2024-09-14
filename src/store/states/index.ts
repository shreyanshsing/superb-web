export interface NavigationState {
    currentIndex: number;
    isCollapsed: boolean;
}

export const navigationInitialState: NavigationState = {
    currentIndex: 0,
    isCollapsed: false
}

export type AppState = {
    user: any,
    navigation: NavigationState
}

export const AppInitialState: AppState = {
    user: null,
    navigation: navigationInitialState
}