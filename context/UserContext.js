import { useState, useEffect, useMemo, useContext, createContext } from "react";
import useProvider from "../hooks/useProvider";
import { checkIfWalletIsConnected } from "../helpers/walletFunctions";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const provider = useProvider();

  useEffect(() => {
    const { ethereum } = window;
    if (!ethereum) {
      console.log("Metamask not found.");
    } else {
      checkIfWalletIsConnected(setUserInfo, provider);
    }
  }, [provider]);

  const values = useMemo(
    () => ({
      userInfo,
      setUserInfo,
    }),
    [userInfo]
  );
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

//
export function useUserContext() {
  const context = useContext(UserContext);

  if (!context) {
    console.error("Error with UserContext");
  }

  return context;
}

export default useUserContext;
