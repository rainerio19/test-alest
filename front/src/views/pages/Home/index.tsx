import React from "react";

import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import foto1 from "../../../assets/img/bola1.jpg";
import foto2 from "../../../assets/img/bola2.jpg";

import { SectionComponent } from "./styles";

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <SectionComponent>
          <section>
            <input type="text" id="search-bar" placeholder="Busca" />
            <div className="wrapper">
              <div className="card">
                <img src={foto1} alt="Avatar1" />
                <div className="container">
                  <h4>
                    <b>Produto 1</b>
                  </h4>
                  <p>R$100</p>
                </div>
              </div>
              <div className="card">
                <img src={foto2} alt="Avatar2" />
                <div className="container">
                  <h4>
                    <b>Produto 2</b>
                  </h4>
                  <p>R$200</p>
                </div>
              </div>
            </div>
          </section>
        </SectionComponent>
      </div>
      <Footer />
    </>
  );
};

export default Home;
