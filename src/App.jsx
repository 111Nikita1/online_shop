import { useState } from 'react'
import Header from './components/Header'
import ProductGrid from './components/ProductGrid'
import products from './data/products'
import './App.css'

function App() {
  const [cart, setCart] = useState([])

  function addToCart(product) {
    setCart(function (prevCart) {
      return [...prevCart, product]
    })
  }

  return (
    <div className="app">
      <Header cartCount={cart.length} />

      <section className="hero">
        <h1>Техника, которая работает на тебя</h1>
        <p>Смартфоны, ноутбуки, гаджеты — с гарантией и быстрой доставкой.</p>
        <a href="#catalog" className="hero__btn">Смотреть каталог</a>
      </section>

      <main className="container">
        <ProductGrid products={products} onAdd={addToCart} />

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
          <p>Телефон: +7 (123) 456-78-90</p>
          <p>Email: ....</p>
          <p>Адрес: ....</p>
        </section>
      </main>

      <footer className="footer">
        <p>© MyShop 2026. Все права защищены.</p>
      </footer>
    </div>
  )
}

export default App