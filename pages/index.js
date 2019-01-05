import Layout from "../components/Layout";
import Sidebar from "../components/SideBar";
import About from "../components/About";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Index = props => {
  return (
    <Layout>
      <Sidebar />
      <article className="content-container">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </article>
      <style jsx>{`
        .content-container {
          // display: flex;
          // flex: 1;
          // flex-direction: column;
          margin-left: 26%;
        }

        @media only screen and (max-width: 600px) {
          .content-container {
            margin: 0;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Index;
