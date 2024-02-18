import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

export default function configureAppStore(initialState = {}) {
    return configureStore({
        reducer: rootReducer,
        preloadedState: initialState,
    });
}