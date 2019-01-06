import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <body>
        <main>{children}</main>
      </body>
      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          background-image: linear-gradient(#8fc1e3, #f7f9fb);
        }

        main {
          background-image: linear-gradient(
              0deg,
              transparent 24%,
              #ffffff 25%,
              #ffffff 26%,
              transparent 27%,
              transparent 74%,
              #ffffff 75%,
              #ffffff 76%,
              transparent 77%,
              transparent
            ),
            linear-gradient(
              90deg,
              transparent 24%,
              #ffffff 25%,
              #ffffff 26%,
              transparent 27%,
              transparent 74%,
              #ffffff 75%,
              #ffffff 76%,
              transparent 77%,
              transparent
            );
          background-size: 50px 50px;
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
          // color: #4f4f4f;
          color: #687864;
        }

        .header-font {
          color: #31708e;
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
