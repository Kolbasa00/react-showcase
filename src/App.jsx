import Header from "./components/Header";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import { CartProvider } from "./components/Cart/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Shop />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
