import { Head, Html, Main, NextScript } from 'next/document';

export default function Document () {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/github-fork-ribbon-css/0.2.3/gh-fork-ribbon.min.css" />
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
    </Html>
  );
}
