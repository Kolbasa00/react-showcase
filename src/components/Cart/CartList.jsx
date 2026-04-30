import { useContext } from "react";
import { ShopContext } from "../../context";
import { IoClose } from "react-icons/io5";
import CartItem from "./CartItem";

function CartList() {
  const { order = [], handleCartShow } = useContext(ShopContext);

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price.regularPrice * el.quantity;
  }, 0);

  return (
    <ul className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#fff] w-[50rem] max-w-[95%] shadow-2xl ... animate-show ">
      <li className="bg-[#26a69a] text-white py-2.5 px-5">Корзина</li>
      {order.length ? (
        order.map((item) => <CartItem key={item.mainId} {...item}></CartItem>)
      ) : (
        <li href="#!" className="py-2.5 px-5">
          Корзина пуста
        </li>
      )}
      <li className="bg-[#26a69a] text-white py-2.5 px-5">
        Общая стоимость: {totalPrice} руб.
      </li>
      <li className="py-2.5 px-5">
        <button className="bg-[#26a69a] uppercase text-white cursor-pointer px-4 py-2 transition hover:shadow-2xl hover:bg-[#2bbbad] text-sm">
          Оформить
        </button>
      </li>
      <IoClose
        className="w-7 h-7 text-[#fff] cursor-pointer absolute top-2 right-2"
        onClick={handleCartShow}
      />
    </ul>
  );
}

export default CartList;
