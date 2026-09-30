import ProductGrid from '../components/ProductGrid'

function Catalog(props) {
  const products = props.products
  const onAdd = props.onAdd
  const searchQuery = props.searchQuery
  const isLoading = props.isLoading

  return (
    <main className="container">
      {isLoading ? (
        <p className="loading">Загрузка товаров...</p>
      ) : (
        <ProductGrid
          products={products}
          onAdd={onAdd}
          searchQuery={searchQuery}
        />
      )}
    </main>
  )
}

export default Catalog