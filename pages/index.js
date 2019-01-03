import Layout from "../components/Layout";
import Sidebar from "../components/SideBar";
import About from "../components/About";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Index = () => {
  return (
    <Layout>
      <Sidebar />
      <div className="content-container">
        <About />
        <Experience />
        <Contact />
        <Education />
        <Projects />
        <Skills />
      </div>
      <style jsx>{`
        .content-container {
          margin-left: 26%;
        }

        @media only screen and (max-width: 600px) {
          .content-container {
            background-color: red;
            margin: 0;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Index;
