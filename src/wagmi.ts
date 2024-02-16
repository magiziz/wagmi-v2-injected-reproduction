import { http, createConfig } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import {
  createCustomConnector,
  customMetaDataConnectors,
} from "./utils/createCustomConnector";

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    ...customMetaDataConnectors.map((c) =>
      createCustomConnector(
        {
          target() {
            return {
              id: c.id,
              name: c.name,
              provider: c.provider,
            };
          },
        },
        { ...c }
      )
    ),
  ],
  multiInjectedProviderDiscovery: false,
  ssr: true,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
