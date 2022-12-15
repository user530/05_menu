export default function Menu({ menuItems }) {
  return (
    <div className="section-center">
      {menuItems.map((item) => {
        const { id, title, img, desc, price } = item;

        return (
          <article className="menu-item" key={id}>
            <img src={img} alt={`${title}-image`} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
