/* eslint-disable @next/next/no-css-tags */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Grandstander:wght@100;200&family=Montserrat:wght@100;200;300;400;500&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="//db.onlinewebfonts.com/c/0fddb08144cea533dcd3d39388b7ffbe?family=GrandSlang+Roman"
            rel="stylesheet"
            type="text/css"
          />
          <link rel="shortcut icon" href="/img/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
