import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], filter: '' },
  reducers: {
    add(state, action) {
      state.items.unshift(action.payload);
    },
    remove(state, action) {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
    filter(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'contactsItems',
  storage,
  whitelist: ['items'],
};

export const persistedContactsSlice = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { add, remove, filter } = contactsSlice.actions;
