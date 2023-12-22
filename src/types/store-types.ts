import { ThunkAction, Action } from '@reduxjs/toolkit';
import { useAppDispatch } from '../hooks/hooks';
import { store } from '../store/store';

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

// Define the type for the dispatch variable
type AppDispatchType = ReturnType<typeof useAppDispatch>;

export type { AppDispatch, RootState, AppThunk, AppDispatchType };
