import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div>
        <Head>
          <title>Tuan Hoang</title>
          <meta name="description" content="Welcome to my simple maze" />
          <link rel="shortcut icon" href="/assets/img/favicon.ico" />
        </Head>
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
