import { useState } from "react";
import Header from "./components/Header";
import styled from "@emotion/styled";
import Formulario from "./components/Formulario";
import Resumen from "./components/Resumen";
import Resultado from "./components/Resultado";

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const ContenedorFormulario = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  padding: 3rem;
`;
function App() {
  const [resumen, setResumen] = useState({
    totalCotizacion: 0,
    datos: {
      marca: "",
      año: "",
      plan: "",
    },
  });
  const { totalCotizacion } = resumen;
  return (
    <Contenedor>
      <Header titulo="Cotizador de seguro" />
      <ContenedorFormulario>
        <Formulario setResumen={setResumen} />
        <Resumen resumen={resumen} />
        <Resultado totalCotizacion={totalCotizacion} />
      </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
