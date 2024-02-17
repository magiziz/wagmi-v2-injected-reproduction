import { InjectedParameters, injected } from "wagmi/connectors";
import { createConnector } from "wagmi";
import { isMetaMask } from "./isMetaMask";

export const createCustomConnector = (
  injectedParams: InjectedParameters,
  customMetaData: { id: string; name: string }
) => {
  return createConnector((config) => ({
    ...injected(injectedParams)(config),
    ...{ rkDetails: customMetaData },
  }));
};

// Custom connector metadata "id" and "name"
export const customMetaDataConnectors = [
  {
    id: "metamask",
    name: "MetaMask Wallet",
    provider:
      typeof window.ethereum !== "undefined" &&
      typeof window.ethereum?.providers !== "undefined"
        ? window.ethereum.providers.find(isMetaMask)
        : undefined,
  },
  {
    id: "rainbow",
    name: "Rainbow Wallet",
    provider: window.ethereum,
  },
  {
    id: "enkrypt",
    name: "Enkrypt Wallet",
    provider: window.ethereum,
  },
  {
    id: "bitski",
    name: "Bitski Wallet",
    provider: window.ethereum,
  },
];
