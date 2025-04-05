import styled from "styled-components";
import Tecnologias from "../../componentes/Tecnologias";
import Inicio from "../../componentes/Inicio";
import Projetos from "../../componentes/Projetos";
import MinhasTecnologias from "../../componentes/MinhasTecnologias";
import Contato from "../../componentes/Contato";
import setaPraCima from "./setaPraCima.svg"


const DivContainerConteudo = styled.div`
  background: #FFF;
  z-index: 1;
  width: 100%;
  height: 100%;
`
const ASubirEstilizado = styled.a`
  margin-bottom: 30px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  text-decoration: none;
  img {
    width: 60px;
    height: 60px;
    transition: transform 0.2s ease;
  }
  &:hover img {
    transform: scale(1.1);
  }
`;

const Home = () => {
  return (
    <>
      <Inicio id="inicio" />
      <DivContainerConteudo>
        <Tecnologias />
        <MinhasTecnologias id="tecnologias" />
        <Projetos id="projetos" />
        <Contato id="contato" />
        <ASubirEstilizado href="#inicio">
          <img src={setaPraCima} alt="Imagem de seta para cima" />
        </ASubirEstilizado>
      </DivContainerConteudo>
    </>
  );
}

export default Home;