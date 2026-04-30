import { useContext, useEffect } from "react";
import { ShopContext } from "../context";

function Alert() {
  const { alertName = "", closeAlert } = useContext(ShopContext);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [alertName]);

  return (
    <div className="bg-[#323232] text-white fixed top-22 right-35 animate-alert">
      <div className="px-5.5 py-2.5 font-light text-lg">
        {alertName} добавлен в корзину
      </div>
    </div>
  );
}

export default Alert;
