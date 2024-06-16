import { useEffect, useState } from 'react';

const defaultImage =
  'https://c0.wallpaperflare.com/preview/105/94/569/administration-articles-bank-black-and-white.jpg';

const NewsData = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/top-headlines?country=in&apiKey=37798908ced74fde96503f97764d1d31'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    getNews(); // Call getNews inside useEffect
  }, []); // Empty dependency array means this effect runs only once

  const setImage = (event) => {
    event.target.src = defaultImage;
  };

  return (
    <div className="news">
      <div className="row">
        {news.map((item) => (
          <div
            className="col col-lg-4 col md-6 col-sm-12"
            key={item.publishedAt}
          >
            <div className="card  border-dark ">
              <img
                className="card-img-top"
                src={item.urlToImage || defaultImage}
                onError={setImage}
                alt="Image"
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
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
  );
};

export default NewsData;
