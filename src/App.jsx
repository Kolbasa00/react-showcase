import Header from "./components/Header";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import { ContextProvider } from "./context";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>

      <Footer />
    </div>
  );
}

export default App;
