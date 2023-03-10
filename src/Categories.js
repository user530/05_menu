export default function Categories({ filterItems, categories }) {
  return (
    <div className="btn-container">
      {categories.map((category, index) => (
        <button
          type="button"
          className="filter-btn"
          key={index}
          onClick={() => {
            filterItems(category);
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
