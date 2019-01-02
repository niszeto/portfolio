import Layout from "../components/Layout";
import Sidebar from "../components/SideBar";
import About from "../components/About";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <Layout>
      <Sidebar />
      <div className="content-container">
        <About />
        <Experience />
        <Contact />
      </div>
      <style jsx>{`
        .content-container {
          margin-left: 26%;
        }
      `}</style>
    </Layout>
  );
};

export default Index;
