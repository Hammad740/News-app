import { useEffect, useState } from 'react';

const defaultImage =
  'https://c0.wallpaperflare.com/preview/105/94/569/administration-articles-bank-black-and-white.jpg';

const NewsData = ({ search }) => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getNews = async (search) => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?q=${search}&apiKey=37798908ced74fde96503f97764d1d31`
      );
      console.log(response);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setIsLoading(false);
      setNews(data.articles);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  useEffect(() => {
    getNews(search); // Call getNews inside useEffect
  }, [search]); // Dependency on 'search' to fetch news when it changes

  const setImage = (event) => {
    event.target.src = defaultImage;
  };

  // Conditional rendering based on isLoading state
  return (
    <div className="news">
      {isLoading ? (
        <p style={{ fontSize: '1.5rem', marginTop: '2rem' }}>Loading...</p>
      ) : (
        <div className="container">
          <div className="row">
            {news.map((item, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
                <div className="card border-dark h-100">
                  <img
                    className="card-img-top"
                    src={item.urlToImage || defaultImage}
                    onError={setImage}
                    alt="News"
                  />
                  <div className="card-body">
                    <h6 className="card-title">{item.title}</h6>
                    <p className="card-text">{item.description}</p>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsData;
