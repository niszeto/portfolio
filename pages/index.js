import Layout from "../components/Layout";
import Sidebar from "../components/SideBar";

const Index = () => {
  return (
    <Layout>
      <Sidebar />
      {/* <div className="content-container" /> */}

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
