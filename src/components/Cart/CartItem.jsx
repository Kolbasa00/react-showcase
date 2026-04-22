import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import { IoIosRemove } from "react-icons/io";
import { IoAdd } from "react-icons/io5";
import { customContext } from "./CartContext";

function CartItem(props) {
  const { mainId, displayName, price, quantity } = props;
  const { removeFromCart, addQuantityProduct, removeQuantityProduct } =
    useContext(customContext);
  return (
    <li className="py-2 px-5 flex justify-between items-center border-b border-gray-200">
      <div className="flex items-center">
        {" "}
        {displayName}{" "}
        <IoIosRemove
          className="w-9 h-9 text-[#26a69a] cursor-pointer px-1.5"
          onClick={() => removeQuantityProduct(mainId)}
          onMouseDown={(e) => e.preventDefault()}
        />{" "}
        x{quantity}{" "}
        <IoAdd
          className="w-9 h-9 text-[#26a69a] cursor-pointer px-1.5"
          onClick={() => addQuantityProduct(mainId)}
          onMouseDown={(e) => e.preventDefault()}
        />{" "}
        ={price.regularPrice * quantity} руб.
      </div>
      <button className="cursor-pointer" onClick={() => removeFromCart(mainId)}>
        <IoClose className="w-7 h-7 text-[#26a69a]" />
      </button>
    </li>
  );
}

export default CartItem;
