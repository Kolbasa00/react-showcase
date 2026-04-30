import { useEffect, useContext } from "react";
import API_URL from "../../config";

import Preloader from "./Preloader.jsx";
import GoodsList from "./GoodsList.jsx";
import Cart from "./Cart/Cart.jsx";
import { ShopContext } from "../context.jsx";
import CartList from "./Cart/CartList.jsx";
import Alert from "./Alert.jsx";

function Shop() {
  const { order, loading, isCartShow, alertName, setGoods } =
    useContext(ShopContext);

  useEffect(function getGoods() {
    fetch(API_URL)
      .then((Response) => Response.json())
      .then((data) => {
        setGoods(data.shop);
      });
  }, []);

  return (
    <main className="max-w-7xl w-full mx-auto flex-1 py-7">
      <Cart></Cart>
      {loading ? <Preloader></Preloader> : <GoodsList></GoodsList>}
      {isCartShow && <CartList></CartList>}
      {alertName && <Alert></Alert>}
    </main>
  );
}

export default Shop;
