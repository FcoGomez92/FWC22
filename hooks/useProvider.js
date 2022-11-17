import { useMemo } from "react";
import { ethers } from "ethers";

const useProvider = () => {
  return useMemo(() => {
    if (typeof window === "undefined") {
      return null;
    }
    try {
      return new ethers.providers.Web3Provider(window.ethereum);
    } catch (err) {
      return null;
    }
  }, []);
};

export default useProvider;
