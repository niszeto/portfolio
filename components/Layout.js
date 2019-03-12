import Head from "next/head";

import { initGA, logPageView } from "../utils/analytics";

class Layout extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <title>Nicholas Szeto Portfolio</title>
        </Head>
        <main className="page-container">{children}</main>
        <style jsx global>{`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          body {
            background-image: linear-gradient(#8fc1e3, #f7f9fb);
          }

          .page-container {
            overflow: hidden;
            height: 100vh;
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
            color: #687864;
          }

          .header-font {
            color: #31708e;
          }

          .box-shadow {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
              0 6px 20px 0 rgba(0, 0, 0, 0.19);
          }

          .indent {
            text-indent: 10px;
          }

          .margin-ten {
            margin: 10px;
          }

          .margin-twenty {
            margin: 20px;
          }

          .padding-ten {
            padding: 10px;
          }

          .padding-twenty {
            padding: 20px;
          }

          .rounded-corner {
            border-radius: 5%;
          }
        `}</style>
      </div>
    );
  }
}

export default Layout;

// const Layout = ({ children }) => {
// return (
//   <div>
//     <Head>
//       <meta name="viewport" content="width=device-width, initial-scale=1" />
//       <meta charSet="utf-8" />
//       <title>Nicholas Szeto Portfolio</title>
//     </Head>
//     <main>{children}</main>
//     <style jsx global>{`
//       * {
//         box-sizing: border-box;
//         margin: 0;
//         padding: 0;
//       }

//       body {
//         background-image: linear-gradient(#8fc1e3, #f7f9fb);
//       }

//       main {
//         background-image: linear-gradient(
//             0deg,
//             transparent 24%,
//             #ffffff 25%,
//             #ffffff 26%,
//             transparent 27%,
//             transparent 74%,
//             #ffffff 75%,
//             #ffffff 76%,
//             transparent 77%,
//             transparent
//           ),
//           linear-gradient(
//             90deg,
//             transparent 24%,
//             #ffffff 25%,
//             #ffffff 26%,
//             transparent 27%,
//             transparent 74%,
//             #ffffff 75%,
//             #ffffff 76%,
//             transparent 77%,
//             transparent
//           );
//         background-size: 50px 50px;
//       }

//       a {
//         text-decoration: none;
//         color: black;
//       }

//       .font {
//         font-family: Helvetica, sans-serif;
//       }

//       .font-size {
//         font-size: 1.2em;
//       }

//       .font-color {
//         color: #687864;
//       }

//       .header-font {
//         color: #31708e;
//       }

//       .box-shadow {
//         box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
//           0 6px 20px 0 rgba(0, 0, 0, 0.19);
//       }

//       .indent {
//         text-indent: 10px;
//       }

//       .margin-ten {
//         margin: 10px;
//       }

//       .margin-twenty {
//         margin: 20px;
//       }

//       .padding-ten {
//         padding: 10px;
//       }

//       .padding-twenty {
//         padding: 20px;
//       }

//       .rounded-corner {
//         border-radius: 5%;
//       }
//     `}</style>
//   </div>
// );
// };

// export default Layout;
