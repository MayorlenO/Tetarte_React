import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import foto1 from "../img/paloma.jpg";

const Somos = () => {
  return (
    <div className="quienes-somos">
      <Navbar />

      <div className="title-quienes-somos">
        <Title title="¿Quiénes somos?" />
      </div>
      <div className="content-quienes-somos">
        <section className="section1-quienes-somos">
          <p>
            Tetarte es un proyecto fotográfico pro lactancia materna cuyos
            objetivos son promover la lactancia materna, desmitificarla y
            visualizarla como acto humano y natural. Proyecto de ONG Grial,
            marca registrada y protegido por ley de derechos de autor.
          </p>
        </section>
        <section className="section2-quienes-somos">
          <img src={foto1} className="foto1-somos" alt="fundadora"></img>
        </section>
      </div>
    </div>
  );
};

export default Somos;
