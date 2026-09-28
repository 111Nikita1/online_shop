function ProductCard(props) {
  const product = props.product
  const onAdd = props.onAdd

  function handleClick() {
    onAdd(product)
  }

  return (
    <article className="card">
      <div className="card__image">
        {product.badge ? (
          <span className="card__badge">{product.badge}</span>
        ) : null}

        <img
        className="card__img"
        src={product.image}
        alt={product.title}
        />
      </div>

      <div className="card__body">
        <span className="card__category">{product.category}</span>
        <h3 className="card__title">{product.title}</h3>

        <div className="card__prices">
          <span className="card__price">
            {product.price.toLocaleString('ru-RU')} ₽
          </span>

          {product.oldPrice ? (
            <span className="card__old-price">
              {product.oldPrice.toLocaleString('ru-RU')} ₽
            </span>
          ) : null}
        </div>

        <button className="card__btn" type="button" onClick={handleClick}>
          В корзину
        </button>
      </div>
    </article>
  )
}

export default ProductCard