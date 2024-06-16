import { useState } from 'react';
import Hero from './components/Hero';
import NewsData from './components/NewsData';
import './index.css';
import Category from './components/Category';
const App = () => {
  const [search, setSearch] = useState('general');
  return (
    <>
      <Hero setSearch={setSearch} />
      <Category setSearch={setSearch} />
      <NewsData search={search} />
    </>
  );
};

export default App;
