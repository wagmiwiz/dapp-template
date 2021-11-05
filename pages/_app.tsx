import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import { DAppProvider, ChainId } from "@usedapp/core";

const config = {
  readOnlyChainId: ChainId.Mainnet,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <DAppProvider config={config}>
        <Component {...pageProps} />
      </DAppProvider>
    </ChakraProvider>
  );
}

export default MyApp;
