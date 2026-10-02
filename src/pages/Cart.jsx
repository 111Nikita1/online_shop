import { Link } from 'react-router-dom'

function Cart(props) {
  const cart = props.cart
  const onRemove = props.onRemove

  if (cart.length === 0) {
    return (
      <main className="container">
        <h1 className="page-title">Корзина пуста</h1>
        <Link to="/catalog" className="cart-empty-link">
          Перейти в каталог
        </Link>
      </main>
    )
  }

  let total = 0
  cart.forEach(function (item) {
    total = total + item.price
  })

  return (
    <main className="container">
      <h1 className="page-title">Корзина</h1>

      <ul className="cart-list">
        {cart.map(function (item, index) {
          return (
            <li key={index} className="cart-item">
              <div className="cart-item__image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="cart-item__info">
                <div className="cart-item__title">{item.title}</div>
                <div className="cart-item__price">{item.price} ₽</div>
              </div>

              <button
                className="cart-item__remove"
                type="button"
                onClick={function () { onRemove(index) }}
              >
                Удалить
              </button>
            </li>
          )
        })}
      </ul>

      <div className="cart-total">
        <span>Итого:</span>
        <b>{total} ₽</b>
      </div>

      <button className="cart-checkout" type="button">
        Оформить заказ
      </button>
    </main>
  )
}

export default Cart