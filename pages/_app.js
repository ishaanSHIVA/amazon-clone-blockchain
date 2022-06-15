import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";

import { AmazonProvider } from "../context/amazon.context";

function MyApp({ Component, pageProps }) {
  console.log(process.env.NEXT_MORALIS_SERVER);
  console.log(process.env.NEXT_PUBLIC_MORALIS_APP_ID);
  return (
    <MoralisProvider
      serverUrl={process.env.NEXT_MORALIS_SERVER}
      appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
    >
      <AmazonProvider>
        <Component {...pageProps} />
      </AmazonProvider>
    </MoralisProvider>
  );
}

export default MyApp;
