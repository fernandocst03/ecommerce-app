import { useState } from 'react'
import { Products } from './components/Products'
import { Header } from './components/Header'
import { Cart } from './components/Cart'
import { products as initialProducts } from './mooks/products.json'
import { Footer } from './components/Footer'
import { useFilters } from './hooks/useFilters'
import { CartProvider } from './context/cart'

function App() {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filterProducts(filteredProducts)} />
      <Footer />
    </CartProvider>

  )
}

export default App
