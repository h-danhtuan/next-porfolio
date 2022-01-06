import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div>
        <Head>
          <title>Tuan Hoang</title>
          <link rel="shortcut icon" href="/assets/img/favicon.ico" />
        </Head>
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
