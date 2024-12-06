'use client';

import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import { AppInitialState, AppState } from './states';
import reducer from './reducers';
import LocalStorageService from '@local-storage';

interface AppStateContextProps {
    state: AppState;
    dispatch: React.Dispatch<any>;
}

const AppStateContext = createContext<AppStateContextProps | undefined>(undefined);

const usePersistentReducer = (key: string): [AppState, React.Dispatch<any>] => {
    const [state, dispatch] = useReducer(reducer, AppInitialState, (initial) => {
      const persisted = LocalStorageService.getItem(key);
      return persisted ? JSON.parse(persisted) : initial;
    });
  
    useEffect(() => {
      LocalStorageService.setItem(key, JSON.stringify(state));
    }, [key, state]);
  
    return [state as AppState, dispatch as React.Dispatch<any>];
  }

const useAppStore = () => {
    const [state, dispatch] = usePersistentReducer('appState');
    return { state, dispatch };
}

const AppStateProvider = ({ children }: { children: ReactNode }) => {
    const { state, dispatch } = useAppStore();
    return (
        <AppStateContext.Provider value={{state, dispatch}}>
            {children}
        </AppStateContext.Provider>  
    )
}

export const useAppState = () => {
    const context = useContext(AppStateContext);
    if (context === undefined) {
        throw new Error('useAppState must be used within an AppStateProvider');
    }
    return context;
}

export default AppStateProvider;