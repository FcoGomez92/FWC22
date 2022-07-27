import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <html lang="en" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Audiowide&family=Inter:wght@200;300;900&display=swap"
          rel="stylesheet"
        />
        {/* <!-- Facebook --> */}
        {/* <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fwc22.xyz" />
        <meta
          property="og:title"
          content="Football World Cup 2022 NFT Collection"
        />
        <meta
          property="og:description"
          content="FWC22 is a Choose to Earn NFT Collection. Choose a team and mint it. If your team win the football world cup 2022 in December you and all the team holders earn the prize pool."
        />
        <meta property="og:image" content="" /> */}

        {/* <!-- Twitter --> */}
        {/* <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://fwc22.xyz" />
        <meta
          property="twitter:title"
          content="Football World Cup 2022 NFT Collection"
        />
        <meta
          property="twitter:description"
          content="FWC22 is a Choose to Earn NFT Collection. Choose a team and mint it. If your team win the football world cup 2022 in December you and all the team holders earn the prize pool."
        />
        <meta
          property="twitter:image"
          content=""
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
