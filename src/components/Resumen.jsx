import styled from "@emotion/styled";
import React from "react";
import { pasarMayuscula } from "../helper";
const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;
const Resumen = ({ resumen }) => {
  const { totalCotizacion } = resumen;
  const { marca, año, plan } = resumen.datos;

  if (marca === "" || año === "" || plan === "") {
    return null;
  }
  return (
    <ContenedorResumen>
      <h2>Resumen</h2>      
      <ul>
        <li>Marca: {pasarMayuscula(marca) }</li>
        <li>Año: {año}</li>
        <li>Plan: {pasarMayuscula(plan)}</li>
      </ul>
    </ContenedorResumen>
  );
};

export default Resumen;
