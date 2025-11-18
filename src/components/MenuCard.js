import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../redux/favoritesSlice';

const MenuCard = ({ item }) => {
  const favorites = useSelector((state) => state.favorites.items);
  const dispatch = useDispatch();
  const isFavorite = favorites.includes(item.id);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in">
      <div className="relative">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <button
          onClick={() => dispatch(toggleFavorite(item.id))}
          className={`absolute top-2 right-2 p-2 rounded-full transition-all duration-300 ${
            isFavorite
              ? 'bg-red-500 text-white'
              : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300'
          } hover:scale-110`}
          aria-label={`${isFavorite ? 'Remove from' : 'Add to'} favorites`}
        >
          <svg
            className="w-5 h-5"
            fill={isFavorite ? 'currentColor' : 'none'}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
        <span className="absolute top-2 left-2 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {item.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {item.name}
        </h3>
        <p className="text-2xl font-bold text-amber-600 dark:text-amber-400">
          {item.price}
        </p>
      </div>
    </div>
  );
};

export default MenuCard;

