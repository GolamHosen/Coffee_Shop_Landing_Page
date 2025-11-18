import { createSlice } from '@reduxjs/toolkit';

// Load favorites from localStorage or default to empty array
const getInitialFavorites = () => {
  const savedFavorites = localStorage.getItem('favorites');
  return savedFavorites ? JSON.parse(savedFavorites) : [];
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: getInitialFavorites(),
  },
  reducers: {
    addFavorite: (state, action) => {
      const itemId = action.payload;
      if (!state.items.includes(itemId)) {
        state.items.push(itemId);
        localStorage.setItem('favorites', JSON.stringify(state.items));
      }
    },
    removeFavorite: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter(id => id !== itemId);
      localStorage.setItem('favorites', JSON.stringify(state.items));
    },
    toggleFavorite: (state, action) => {
      const itemId = action.payload;
      const index = state.items.indexOf(itemId);
      if (index > -1) {
        state.items.splice(index, 1);
      } else {
        state.items.push(itemId);
      }
      localStorage.setItem('favorites', JSON.stringify(state.items));
    },
    clearAllFavorites: (state) => {
      state.items = [];
      localStorage.setItem('favorites', JSON.stringify(state.items));
    },
  },
});

export const { addFavorite, removeFavorite, toggleFavorite, clearAllFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;

