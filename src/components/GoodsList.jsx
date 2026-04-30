import GoodsItem from "./GoodsItem.jsx";
import { memo, useContext } from "react";
import { ShopContext } from "../context.jsx";
function GoodsList() {
  const { goods = [] } = useContext(ShopContext);

  if (!goods.length) {
    return <h3>Nothing here</h3>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {goods.map((item) => (
        <GoodsItem key={item.mainId} {...item} />
      ))}
    </div>
  );
}

export default memo(GoodsList);
