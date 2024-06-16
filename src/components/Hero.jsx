const Hero = () => {
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
            />
            <button className="hero-btn">Search</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Hero;
