import { memo, useContext } from "react";
import { ShopContext } from "../context";

function GoodsItem(props) {
  const { mainId, displayName, displayDescription, price, displayAssets } =
    props;
  const { addToCart } = useContext(ShopContext);
  const imageUrl = displayAssets[0].full_background;
  const fullImageUrl = imageUrl.startsWith("/")
    ? import.meta.env.BASE_URL + imageUrl.slice(1)
    : imageUrl;

  const handleAddToCart = () => {
    addToCart({
      mainId,
      displayName,
      displayDescription,
      price,
      fullImageUrl,
    });
  };
  return (
    <div className="shadow-xl bg-[#fff] rounded-sm flex flex-col mb-4">
      <img src={fullImageUrl} alt={displayName} className="block rounded-sm" />
      <div className="p-6 grow">
        <h3 className="text-2xl font-light mb-2 ">{displayName}</h3>
        <p>{displayDescription}</p>
      </div>
      <div className="flex justify-between border-t border-gray-200 py-4 px-6">
        <button
          className="bg-[#26a69a] uppercase hover:bg-[#2bbbad] hover:shadow-2xl text-white px-4 py-2 cursor-pointer transition rounded-xs"
          onClick={handleAddToCart}
        >
          Купить
        </button>
        <p className="text-3xl">{price.regularPrice} руб.</p>
      </div>
    </div>
  );
}

export default memo(GoodsItem);
