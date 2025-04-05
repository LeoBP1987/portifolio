import styled from "styled-components";
import Nav from "../../componentes/Nav"
import Fundo from "./fundo_sobremim.png"
import { Outlet } from "react-router";
import Carregando from "../../componentes/Carregando";

const ContainerNav = styled.div`
  width: 100%;
  height: 100px;
  background-image: url(${Fundo});
  background-size: cover;
`;

const ContainerConteudo = styled.div`
    background: var(--cor-terciaria);
    width: 100%;
`;

const Admin = () => {
    return (
        <>  
            <Carregando />
            <ContainerNav>
                <Nav page="admin" />
            </ContainerNav>
            <ContainerConteudo>
                <Outlet />
            </ContainerConteudo>
        </>
    )
}

export default Admin