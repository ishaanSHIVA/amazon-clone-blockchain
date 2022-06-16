import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";

import { AmazonProvider } from "../context/Amazon.context";
import { ModalProvider } from "react-simple-hook-modal";

function MyApp({ Component, pageProps }) {
  console.log(process.env.NEXT_MORALIS_SERVER);
  console.log(process.env.NEXT_PUBLIC_MORALIS_APP_ID);
  return (
    <MoralisProvider
      serverUrl={process.env.NEXT_MORALIS_SERVER}
      appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
    >
      <AmazonProvider>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </AmazonProvider>
    </MoralisProvider>
  );
}

export default MyApp;
