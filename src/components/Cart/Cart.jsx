import { useContext } from "react";
import { ShopContext } from "../../context";

function Cart(props) {
  const { handleCartShow, order } = useContext(ShopContext);
  const quantity = order.length;
  return (
    <div
      className="fixed right-10 cursor-pointer z-5 py-4 px-4 flex items-end bg-blue-800 text-white md:top-18"
      onClick={handleCartShow}
    >
      <img
        src="./images/cart-shopping.svg"
        alt="cart"
        className="w-[32px] h-[32px] invert"
      />
      {quantity ? <span>{quantity}</span> : null}
    </div>
  );
}

export default Cart;
