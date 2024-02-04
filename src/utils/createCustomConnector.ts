import { InjectedParameters, injected } from "wagmi/connectors";
import { createConnector } from "wagmi";

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
    id: "enkrypt",
    name: "Enkrypt Wallet",
    provider: window.ethereum,
  },
  {
    id: "bitsky",
    name: "Bitski Wallet",
    provider: window.ethereum,
  },
];
