import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import { fetchProducts } from './api/products'
import './App.css'

function App() {
  const [cart, setCart] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(function () {
    fetchProducts().then(function (data) {
      setProducts(data)
      setIsLoading(false)
    })
  }, [])

  function addToCart(product) {
    setCart(function (prevCart) {
      return [...prevCart, product]
    })
  }

  return (
    <div className="app">
      <Header
        cartCount={cart.length}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products}
              isLoading={isLoading}
              onAdd={addToCart}
            />
          }
        />
        <Route
          path="/catalog"
          element={
            <Catalog
              products={products}
              onAdd={addToCart}
              searchQuery={searchQuery}
              isLoading={isLoading}
            />
          }
        />
      </Routes>

      <footer className="footer">
        <p>
          Компания MyShop. Администрация Сайта не несет ответственности
          за размещаемые Пользователями материалы (в т.ч. информацию
          и изображения), их содержание и качество.
        </p>
      </footer>
    </div>
  )
}

export default App