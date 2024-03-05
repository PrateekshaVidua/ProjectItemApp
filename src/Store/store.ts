import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import itemsReducer from './CarSlice';

export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// Subscribe to store changes and save items to AsyncStorage whenever the store updates
store.subscribe(() => {
  const items = store.getState().items.items;
  AsyncStorage.setItem('items', JSON.stringify(items));
});
