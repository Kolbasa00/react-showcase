import { memo, useContext } from "react";
import { customContext } from "./Cart/CartContext";

function GoodsItem(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    price,
    displayAssets,
    addToCart,
  } = props;
  return (
    <div className="shadow-xl bg-[#fff] rounded-sm flex flex-col mb-4">
      <img
        src={displayAssets[0].full_background}
        alt={displayName}
        className="block rounded-sm"
      />
      <div className="p-6 grow">
        <h3 className="text-2xl font-light mb-2 ">{displayName}</h3>
        <p>{displayDescription}</p>
      </div>
      <div className="flex justify-between border-t border-gray-200 py-4 px-6">
        <button
          className="bg-[#26a69a] uppercase hover:bg-[#2bbbad] hover:shadow-2xl text-white px-4 py-2 cursor-pointer transition rounded-xs"
          onClick={addToCart}
        >
          Купить
        </button>
        <p className="text-3xl">{price.regularPrice} руб.</p>
      </div>
    </div>
  );
}

export default memo(GoodsItem);
