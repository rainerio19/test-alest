import React from "react";

import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import FormCadastro from "../../../components/FormCadastro";

import { SectionComponent } from "./styles";

const SignUp: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <SectionComponent>
          <h1>Cadastre o produto</h1>
          <FormCadastro />
        </SectionComponent>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
