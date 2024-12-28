export interface NavigationState {
    currentIndex: number;
    isCollapsed: boolean;
}

export interface UserState {
    user: unknown;
}

export interface UserCompact {
    id: string;
    name: string;
}

export interface CommunityCompact {
    id: string;
    name: string;
}

export interface LocalPostState {
    title: string;
    content: string;
    media?: File[];
    mentions?: UserCompact[];
    tags?: CommunityCompact[];
}

export const localPostInitialState: LocalPostState = {
    title: '',
    content: '',
    media: [],
    mentions: [],
    tags: []
}

export const navigationInitialState: NavigationState = {
    currentIndex: 0,
    isCollapsed: false
}

export interface SnackbarState {
    snackbar: unknown[];
}

export const snackbarInitialState: SnackbarState = {
    snackbar: []
}

export type AppState = {
    user: unknown,
    navigation: NavigationState,
    localPost: LocalPostState,
}

export const AppInitialState: AppState = {
    user: null,
    navigation: navigationInitialState,
    localPost: localPostInitialState
}