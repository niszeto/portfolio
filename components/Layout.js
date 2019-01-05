import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      {children}
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
      `}</style>
    </div>
  );
};

export default Layout;
