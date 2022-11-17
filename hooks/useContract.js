import { useMemo } from "react";
import { ethers } from "ethers";
import abi from "../helpers/abi.json";

const useContract = (signer, chainId) => {
  return useMemo(() => {
    if (!signer || chainId !== parseInt(process.env.NEXT_PUBLIC_CHAIN_ID)) {
      return null;
    }
    try {
      return new ethers.Contract(
        process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
        abi,
        signer
      );
    } catch (err) {
      return null;
    }
  }, [signer, chainId]);
};

export default useContract;
