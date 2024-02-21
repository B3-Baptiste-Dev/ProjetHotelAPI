// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import hotelReducer from './hotelService.js';

export const store = configureStore({
    reducer: {
        hotel: hotelReducer,
    },
});
