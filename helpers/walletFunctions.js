import { ethers } from "ethers";

export const formatAddress = (address) =>
  address.substring(0, 4) + "..." + address.substring(address.length - 2);

export const formatNumber = (number, decimals) =>
  parseFloat(number).toFixed(decimals);

export const formatBalance = (balance) =>
  formatNumber(ethers.utils.formatEther(balance), 2);

export const checkIfWalletIsConnected = async (handler, provider) => {
  const accounts = await window.ethereum.request({ method: "eth_accounts" });

  if (accounts.length !== 0) {
    const account = accounts[0];
    const { chainId } = await provider.getNetwork();

    handler({
      chainId: chainId,
      account,
      maticBalance: "-",
    });
    if (chainId === parseInt(process.env.NEXT_PUBLIC_CHAIN_ID)) {
      const maticBalance = await provider.getBalance(account);
      handler((prev) => ({
        ...prev,
        maticBalance: formatBalance(maticBalance),
      }));
    }
  } else {
    console.log("No authorized account found");
  }
};

export const connectWallet = async (handler, provider) => {
  try {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    if (accounts.length !== 0) {
      const account = accounts[0];
      const network = await provider.detectNetwork();
      handler({
        chainId: network.chainId,
        account,
        maticBalance: "-",
      });
      if (network.chainId === parseInt(process.env.NEXT_PUBLIC_CHAIN_ID)) {
        try {
          const maticBalance = await provider.getBalance(account);
          handler((prev) => ({
            ...prev,
            maticBalance: formatBalance(maticBalance),
          }));
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      console.log("No authorized account found");
    }
  } catch (error) {
    console.error(error);
  }
};

export const checkChanges = (account) => {
  // The "any" network will allow spontaneous network changes
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

  provider.on("network", (newNetwork, oldNetwork) => {
    // When a Provider makes its initial connection, it emits a "network"
    // event with a null oldNetwork along with the newNetwork. So, if the
    // oldNetwork exists, it represents a changing network
    if (oldNetwork) {
      window.location.reload();
    }
  });
  window.ethereum.on("accountsChanged", (newAccount) => {
    if (newAccount[0] !== account) {
      window.location.reload();
    }
  });
};

export const switchNetworkToPolygon = async () => {
  try {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x89" }],
    });
  } catch (switchError) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902) {
      try {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0x89",
              chainName: "Polygon Mainnet",
              nativeCurrency: { name: "MATIC", symbol: "MATIC", decimals: 18 },
              rpcUrls: ["https://polygon-rpc.com"],
            },
          ],
        });
      } catch (addError) {
        // handle "add" error
        console.error(addError);
      }
    }
    // handle other "switch" errors
    console.error(switchError);
  }
};
