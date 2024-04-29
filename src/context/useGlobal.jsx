import { createContext, useReducer } from "react";

export let GlobalContext = createContext();
function GlobalContextProvaider({ children }) {
  let changeState = (state, action) => {
    switch (action.type) {
      case "LOG_IN":
        return { ...state, user: action.paylod };
      case "LOG_OUT":
        return { ...state, user: null };
    }
  };
  let [state, dispetch] = useReducer(changeState, {
    user: false,
  });

  return (
    <GlobalContext.Provider value={{ ...state, dispetch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalContextProvaider;
