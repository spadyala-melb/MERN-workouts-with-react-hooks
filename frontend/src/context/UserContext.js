import { createContext, useReducer } from "react";

//  Context
export const UserContext = createContext();

//  Reducer
export const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        user: action.payload,
      };

    default:
      throw new Error("Unknown action type");
  }
};

// Provider
export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, { user: null });

  return (
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
