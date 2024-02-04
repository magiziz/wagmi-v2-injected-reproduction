import { Connector, useAccount, useConnect, useDisconnect } from "wagmi";

function App() {
  const account = useAccount();
  const {
    connectors: defaultConnectors,
    connectAsync,
    status,
    error,
  } = useConnect();
  const typedConnectors = defaultConnectors as (Connector & {
    rkDetails: any;
  })[];
  const connectors = typedConnectors.map((connector) => ({
    ...connector,
    ...(connector.rkDetails ?? {}),
  }));
  const { disconnect } = useDisconnect();

  return (
    <>
      <div>
        <h2>Account</h2>

        <div>
          connector id: {account.connector?.id}
          <br />
        </div>

        {account.status === "connected" && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      <div>
        <h2>Connect</h2>
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={async () => {
              const walletChainId = await connector.getChainId();
              connectAsync({ connector, chainId: walletChainId as any });
            }}
            type="button"
          >
            {connector.name}
          </button>
        ))}
        <div>{status}</div>
        <div>{error?.message}</div>
      </div>
    </>
  );
}

export default App;
