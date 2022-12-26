import { createContext, useContext, useReducer } from "react";
import reducer from "./reducer";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, dispatch] = useReducer(reducer, { isAuthenticated: false });

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;

export function useAuth() {
  return useContext(UserContext);
}
