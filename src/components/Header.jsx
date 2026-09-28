function Header(props) {
  const cartCount = props.cartCount

  return (
    <header className="header">
      <div className="header__inner">
        <a href="/" className="logo">
            MyShop
        </a>

        <nav className="nav">
          <a href="#catalog">Каталог</a>
          <a href="#about">О нас</a>
          <a href="">+7 (123) 456-78-90</a>
        </nav>

        <div className="header__actions">
          <input className="search" type="search" placeholder="Поиск..." />

          <button className="cart-btn" type="button">
            🛒 <span className="cart-btn__count">{cartCount}</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header