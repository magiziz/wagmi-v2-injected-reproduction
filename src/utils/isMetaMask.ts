export function isMetaMask(ethereum?: (typeof window)["ethereum"]): boolean {
  // Logic borrowed from wagmi's MetaMaskConnector
  // https://github.com/wagmi-dev/references/blob/main/packages/connectors/src/metaMask.ts
  if (!ethereum?.isMetaMask) return false;
  // Brave tries to make itself look like MetaMask
  // Could also try RPC `web3_clientVersion` if following is unreliable
  if (ethereum.isBraveWallet && !ethereum._events && !ethereum._state)
    return false;
  if (ethereum.isApexWallet) return false;
  if (ethereum.isAvalanche) return false;
  if (ethereum.isBackpack) return false;
  if (ethereum.isBifrost) return false;
  if (ethereum.isBitKeep) return false;
  if (ethereum.isBitski) return false;
  if (ethereum.isBlockWallet) return false;
  if (ethereum.isCoinbaseWallet) return false;
  if (ethereum.isDawn) return false;
  if (ethereum.isEnkrypt) return false;
  if (ethereum.isExodus) return false;
  if (ethereum.isFrame) return false;
  if (ethereum.isFrontier) return false;
  if (ethereum.isGamestop) return false;
  if (ethereum.isHyperPay) return false;
  if (ethereum.isImToken) return false;
  if (ethereum.isKuCoinWallet) return false;
  if (ethereum.isMathWallet) return false;
  if (ethereum.isOkxWallet || ethereum.isOKExWallet) return false;
  if (ethereum.isOneInchIOSWallet || ethereum.isOneInchAndroidWallet)
    return false;
  if (ethereum.isOpera) return false;
  if (ethereum.isPhantom) return false;
  if (ethereum.isPortal) return false;
  if (ethereum.isRabby) return false;
  if (ethereum.isRainbow) return false;
  if (ethereum.isStatus) return false;
  if (ethereum.isTalisman) return false;
  if (ethereum.isTally) return false;
  if (ethereum.isTokenPocket) return false;
  if (ethereum.isTokenary) return false;
  if (ethereum.isTrust || ethereum.isTrustWallet) return false;
  if (ethereum.isXDEFI) return false;
  if (ethereum.isZeal) return false;
  if (ethereum.isZerion) return false;
  return true;
}
