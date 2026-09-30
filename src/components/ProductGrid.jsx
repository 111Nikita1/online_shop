import { useState } from 'react'
import ProductCard from './ProductCard'

function ProductGrid(props) {
  const products = props.products
  const onAdd = props.onAdd
  const searchQuery = props.searchQuery

  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  const query = searchQuery.trim().toLowerCase()
  const min = minPrice === '' ? 0 : Number(minPrice)
  const max = maxPrice === '' ? Infinity : Number(maxPrice)

  const filteredProducts = products.filter(function (p) {
    const matchesSearch =
      query === '' ||
      p.category.toLowerCase().includes(query) ||
      p.title.toLowerCase().includes(query)

    const matchesPrice = p.price >= min && p.price <= max

    return matchesSearch && matchesPrice
  })

  function handleReset() {
    setMinPrice('')
    setMaxPrice('')
  }

  return (
    <section id="catalog" className="catalog">
      <h2 className="section-title">Товары на нашем сайте</h2>

      <div className="price-filter">
        <span className="price-filter__label">Цена, ₽:</span>

        <input
          className="price-filter__input"
          type="number"
          placeholder="от"
          value={minPrice}
          onChange={function (e) { setMinPrice(e.target.value) }}
        />

        <span className="price-filter__dash">—</span>

        <input
          className="price-filter__input"
          type="number"
          placeholder="до"
          value={maxPrice}
          onChange={function (e) { setMaxPrice(e.target.value) }}
        />

        {(minPrice !== '' || maxPrice !== '') && (
          <button
            className="price-filter__reset"
            type="button"
            onClick={handleReset}
          >
            Сбросить
          </button>
        )}
      </div>

      {filteredProducts.length === 0 ? (
        <p className="empty">Ничего не найдено</p>
      ) : (
        <div className="grid">
          {filteredProducts.map(function (product) {
            return (
              <ProductCard
                key={product.id}
                product={product}
                onAdd={onAdd}
              />
            )
          })}
        </div>
      )}
    </section>
  )
}

export default ProductGrid