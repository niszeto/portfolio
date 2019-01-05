import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <body>{children}</body>
      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        a {
          text-decoration: none;
          color: black;
        }

        .font {
          font-family: Helvetica, sans-serif;
        }

        .font-size {
          font-size: 1.2em;
        }

        .font-color {
          color: #4f4f4f;
        }

        .box-shadow {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
      `}</style>
    </div>
  );
};

export default Layout;
