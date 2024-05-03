import { createContext, useReducer } from "react";

export let GlobalContext = createContext();
function GlobalContextProvaider({ children }) {
  let changeState = (state, action) => {
    switch (action.type) {
      case "LOG_IN":
        return { ...state, user: action.paylod };
      case "LOG_OUT":
        return { ...state, user: null };
      case "DATA_BASE":
        return { ...state, data: action.paylod };
      case "AUTH_READY":
        return { ...state, authReady: true };
      default:
        return state;
    }
  };
  let [state, dispetch] = useReducer(changeState, {
    user: false,
    authReady: false,
    data: null,
  });

  return (
    <GlobalContext.Provider value={{ ...state, dispetch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvaider;
