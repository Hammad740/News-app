import { useState } from 'react';

const Hero = ({ setSearch }) => {
  const [name, setName] = useState('');
  const searchNews = () => {
    setSearch(name);
  };
  return (
    <div>
      <header>
        <div className="hero">
          <div className="hero-banner">
            <h3>News Store</h3>
            <p>All new news is an old news happening to new people</p>
            <input
              type="text"
              placeholder="Enter text..."
              className="input-bar"
              onChange={(e) => setName(e.target.value)}
            />
            <button className="hero-btn" onClick={searchNews}>
              Search
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
