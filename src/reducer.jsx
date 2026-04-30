export default function reducer(state, { type, payload }) {
  switch (type) {
    case "SET_GOODS":
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };
    case "CLOSE_ALERT":
      return {
        ...state,
        alertName: "",
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        order: state.order.filter((el) => el.mainId !== payload.id),
      };
    case "ADD_TO_CART": {
      const itemIndex = state.order.findIndex(
        (el) => el.mainId === payload.mainId,
      );
      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }
      return {
        ...state,
        order: newOrder,
        alertName: payload.displayName,
      };
    }
    case "HANDLE_CART_SHOW":
      return {
        ...state,
        isCartShow: !state.isCartShow,
      };
    case "ADD_QUANTITY_PRODUCT":
      return {
        ...state,
        order: state.order.map((el) => {
          return el.mainId === payload.id
            ? { ...el, quantity: el.quantity + 1 }
            : el;
        }),
      };
    case "REMOVE_QUANTITY_PRODUCT":
      return {
        ...state,
        order: state.order
          .map((el) => {
            return el.mainId === payload.id
              ? { ...el, quantity: el.quantity - 1 }
              : el;
          })
          .filter((el) => el.quantity > 0),
      };
    default:
      return state;
  }
}
