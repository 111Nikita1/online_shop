import products from '../data/products'

export function fetchProducts() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(products)
    }, 2000)
  })
}