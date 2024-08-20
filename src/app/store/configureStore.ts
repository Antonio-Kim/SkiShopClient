import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from '../../features/cart/CartSlice';
import { catalogSlice } from '../../features/catalog/catalogSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    catalog: catalogSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
