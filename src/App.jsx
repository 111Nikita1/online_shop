import { useState } from 'react'
import Header from './components/Header'
import ProductGrid from './components/ProductGrid'
import products from './data/products'
import './App.css'

function App() {
  const [cart, setCart] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

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

      <section className="hero">
        <h1>Техника, которая работает на тебя</h1>
        <p>Смартфоны, ноутбуки, гаджеты — с гарантией и быстрой доставкой.</p>
        <a href="#catalog" className="hero__btn">Смотреть каталог</a>
      </section>

      <main className="container">
        <ProductGrid
          products={products}
          onAdd={addToCart}
          searchQuery={searchQuery}
        />

        <section id="about" className="info-block">
          <h2>О нас</h2>
          <p>
            MyShop — магазин техники с 2020 года. Работаем напрямую
            с поставщиками, даём гарантию 12 месяцев и доставляем
            по всей России за 1–3 дня.
          </p>
        </section>

        <section id="contacts" className="info-block">
          <h2>Контакты</h2>
          <p>Телефон: +7 (999) 123-45-67</p>
          <p>Email: myshop@mail.ru</p>
          <p>Адрес: Санкт-Петербург, ул. Мира, 8</p>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 MyShop. Все права защищены.</p>
      </footer>
    </div>
  )
}

export default App