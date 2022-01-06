import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div>
        <Head>
          <title>Tuan Hoang</title>
        </Head>
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
