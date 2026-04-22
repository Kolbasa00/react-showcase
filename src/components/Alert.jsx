import { useEffect } from "react";

function Alert(props) {
  const { name = "", closeAlert = Function.prototype } = props;

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(timerId);
    };
  }, [name]);

  return (
    <div className="bg-[#323232] text-white fixed top-22 right-35 animate-alert">
      <div className="px-5.5 py-2.5 font-light text-lg">
        {name} добавлен в корзину
      </div>
    </div>
  );
}

export default Alert;
