const Category = ({ setSearch }) => {
  return (
    <div className="category">
      <ul>
        <li>
          <button
            className="btn btn-outline-success"
            onClick={() => setSearch('sports')}
          >
            Sports
          </button>
        </li>
        <li>
          <button
            className="btn btn-outline-danger"
            onClick={() => setSearch('health')}
          >
            Health
          </button>
        </li>
        <li>
          <button
            className="btn btn-outline-primary"
            onClick={() => setSearch('entertainment')}
          >
            Entertainment
          </button>
        </li>
      </ul>
      <ul>
        <li>
          <button
            className="btn btn-outline-danger"
            onClick={() => setSearch('technology')}
          >
            Technology
          </button>
        </li>
        <li>
          <button
            className="btn btn-outline-primary"
            onClick={() => setSearch('science')}
          >
            Science
          </button>
        </li>
        <li>
          <button
            className="btn btn-outline-success"
            onClick={() => setSearch('Business')}
          >
            Business
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Category;
