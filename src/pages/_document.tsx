import Document, { Head, Html, Main, NextScript } from 'next/document';


export default class DocumentRootBody extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#86CEFF" />
          <link rel="shortcut icon" href="/images/logo.svg" />
          <link
            rel="preload"
            href="/fonts/teste.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <Main />
        <NextScript />
      </Html>
    );
  }
}
