import Layout from "../components/Layout";
import Sidebar from "../components/SideBar";
import About from "../components/About";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

// background-color: #687864;
// background-color: #31708e;
// background-color: #5085a5;
// background-color: #8fc1e3;
// background-color: #f7f9fb;

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
