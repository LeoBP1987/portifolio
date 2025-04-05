import styled from "styled-components";
import Nav from "../Nav";
import Cabecalho from "../Cabecalho";
import ParticlesBackground from "../ParticlesBackground";


interface InicioProps {
    id: string;
}


const SectionInicio = styled.section`
  margin: 0;
  padding: 0;
  position: relative;
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 150px;
  color: var(--cor-fonte-primaria);
`

const Inicio = ({id}: InicioProps) => { 

    return (
        <SectionInicio id={id}>
            <ParticlesBackground />
            <Nav page="home" />
            <Cabecalho />
        </SectionInicio>
    )
}

export default Inicio;