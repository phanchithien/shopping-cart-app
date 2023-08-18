import { HashRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { Cart } from "./components/Cart";
import { Footer } from "./components/Footer";
import './app.module.scss'

function App() {
  return (
    <HashRouter>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Products />}
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  )
}

export default App
