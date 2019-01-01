import Layout from "../components/Layout";
import Sidebar from "../components/SideBar";
import About from "../components/About";

const aboutText =
  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dicta adipisci labore aperiam et, perferendis laudantium nesciunt illo? Commodi provident veniam ullam molestias nobis eum consectetur officia?Sapiente, iusto magnam!";

const Index = () => {
  return (
    <Layout>
      {/* <Sidebar /> */}
      {/* <div className="content-container" /> */}
      <About text={aboutText} />

      <style jsx>{`
        .main-container {
          display: flex;
          flex: 1;
          margin: 0;
          padding: 0;
        }

        .content-container {
          margin-left: 26%;
        }
      `}</style>
    </Layout>
  );
};

export default Index;
