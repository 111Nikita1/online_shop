import ProductCard from './ProductCard'

function ProductGrid(props) {
  const products = props.products
  const onAdd = props.onAdd

  return (
    <section id="catalog" className="catalog">
      <h2 className="section-title">Каталог</h2>

      <div className="grid">
        {products.map(function (product) {
          return (
            <ProductCard
              key={product.id}
              product={product}
              onAdd={onAdd}
            />
          )
        })}
      </div>
    </section>
  )
}

export default ProductGrid