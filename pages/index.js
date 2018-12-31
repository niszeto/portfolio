import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <div className="mainContainer">
      <Navbar />

      <div className="contentContainer">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed deleniti
          totam recusandae, alias soluta odio dolores unde temporibus amet modi
          voluptas porro ullam! Illum voluptatum debitis voluptatibus dolor!
          Corporis, adipisci.
        </p>
      </div>

      <style jsx>{`
        .mainContainer {
        }

        .contentContainer {
          margin-left: 26%;
        }

        p {
          color: red;
        }
      `}</style>
    </div>
  );
};

export default Index;
