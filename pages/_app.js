import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";

import { AmazonProvider } from "../context/Amazon.context";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl={"https://vdjxbweq6izd.usemoralis.com:2053/server"}
      appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
    >
      <AmazonProvider>
        <Component {...pageProps} />
      </AmazonProvider>
    </MoralisProvider>
  );
}

export default MyApp;
