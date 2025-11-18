# Coffee Shop Landing Page

A modern, fully responsive landing page for a coffee shop built with React.js, Redux Toolkit, and Tailwind CSS.

## Features

- ✨ **Modern Design**: Beautiful coffee shop aesthetic with smooth animations
- 🌓 **Theme Switcher**: Light/Dark mode toggle with localStorage persistence
- ❤️ **Favorites System**: Add menu items to favorites with a counter in the header
- 📱 **Fully Responsive**: Works perfectly on mobile, tablet, and desktop
- 🎯 **Smooth Scrolling**: Smooth navigation between sections
- 🍔 **Mobile Menu**: Hamburger menu for mobile devices

## Sections

1. **Hero Section**: Eye-catching introduction with coffee shop name and tagline
2. **Menu Section**: 8 coffee items with images, names, prices, and favorite buttons
3. **About Us**: Story about the coffee shop with statistics
4. **Testimonials**: 3 customer reviews with ratings
5. **Contact**: Location map embed and business hours

## Tech Stack

- React.js (Functional Components)
- Redux Toolkit (State Management)
- Tailwind CSS (Styling)
- LocalStorage (Theme & Favorites Persistence)

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation, favorites counter, theme toggle
│   ├── Hero.js            # Hero section
│   ├── MenuCard.js        # Individual menu item card
│   ├── MenuSection.js     # Menu section with all items
│   ├── About.js           # About us section
│   ├── Testimonials.js    # Customer testimonials
│   ├── Contact.js         # Contact information and map
│   └── Footer.js          # Footer with links
├── redux/
│   ├── themeSlice.js      # Theme state management
│   ├── favoritesSlice.js  # Favorites state management
│   └── store.js           # Redux store configuration
├── App.js                 # Main app component
├── index.js               # Entry point
└── index.css              # Global styles and Tailwind imports
```

## Redux Slices

### Theme Slice
- Manages light/dark mode
- Persists to localStorage
- Automatically applies theme to document

### Favorites Slice
- Manages favorite menu items
- Persists to localStorage
- Toggle favorite functionality

## Responsive Design

The landing page is fully responsive with breakpoints for:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Customization

- Menu items can be modified in `src/components/MenuSection.js`
- Theme colors can be adjusted in `tailwind.config.js`
- All content is easily editable in respective component files

