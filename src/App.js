import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from './redux/themeSlice';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const theme = useSelector((state) => state.theme.mode);
  const dispatch = useDispatch();

  // Initialize theme on app load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    dispatch(setTheme(savedTheme));
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main>
        <Hero />
        <MenuSection />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

