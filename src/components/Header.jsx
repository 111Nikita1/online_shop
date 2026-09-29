function Header(props) {
  const cartCount = props.cartCount
  const searchQuery = props.searchQuery
  const onSearchChange = props.onSearchChange

  function handleInputChange(event) {
    onSearchChange(event.target.value)
  }

  return (
    <header className="header">
      <div className="header__inner">
        <a href="/" className="logo">MyShop</a>

        <nav className="nav">
          <a href="#catalog">Каталог</a>
          <a href="#about">О нас</a>
          <a href="#contacts">Контакты</a>
        </nav>

        <div className="header__actions">
          <input
            className="search"
            type="search"
            placeholder="Поиск по категории..."
            value={searchQuery}
            onChange={handleInputChange}
          />

          <button className="cart-btn" type="button">
            🛒 <span className="cart-btn__count">{cartCount}</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header