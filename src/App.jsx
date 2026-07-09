// src/App.jsx
import { useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';

function App({ children }) {
  const location = useLocation();
  const isCheckoutPage = location.pathname === '/checkout';

  return (
    <CartProvider>
      <div className="app-container">
        <Header />
        <main className="main-content">
          {children}
        </main>
        {!isCheckoutPage && <Footer />}
      </div>
    </CartProvider>
  );
}

export default App;