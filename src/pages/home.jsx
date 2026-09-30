import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'

function Home(props) {
  const products = props.products
  const isLoading = props.isLoading
  const onAdd = props.onAdd

  const topProducts = products
    .filter(function (p) {
      return p.badge
    })
    .slice(0, 4)

  return (
    <>
      <section className="hero">
        <h1>Техника, которая работает на тебя</h1>
        <p>Смартфоны, ноутбуки, гаджеты — с гарантией и быстрой доставкой.</p>
        <Link to="/catalog" className="hero__btn">
          Смотреть каталог
        </Link>
      </section>

      <main className="container">
        <section className="top-products">
          <h2 className="section-title">Топ товаров</h2>

          {isLoading ? (
            <p className="loading">Загрузка товаров...</p>
          ) : (
            <div className="grid">
              {topProducts.map(function (product) {
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
          <p>Email: myshop@gmail.ru</p>
          <p>Адрес: Санкт-Петербург, Невский проспект, д. 1</p>
        </section>
      </main>
    </>
  )
}

export default Home