import { Link, useLocation } from 'react-router-dom'

function Header(props) {
  const cartCount = props.cartCount
  const searchQuery = props.searchQuery
  const onSearchChange = props.onSearchChange

  const location = useLocation()
  const isCatalog = location.pathname === '/catalog'

  function handleInputChange(event) {
    onSearchChange(event.target.value)
  }

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="logo">MyShop</Link>

        <nav className="nav">
          <Link to="/" className="nav__link">Главная</Link>
          <Link to="/catalog" className="nav__link">Каталог</Link>
        </nav>

        <div className="header__actions">
          {isCatalog && (
            <input
              className="search"
              type="search"
              placeholder="Поиск по категории..."
              value={searchQuery}
              onChange={handleInputChange}
            />
          )}

          <button className="cart-btn" type="button">
            🛒 <span className="cart-btn__count">{cartCount}</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header