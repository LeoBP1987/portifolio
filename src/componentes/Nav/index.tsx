import { Link } from "react-router";
import styled from "styled-components";
import { useFormLogin } from "../../context/FormLoginContext";
import useLogoff from "../../hooks/useLogoff";

interface NavProps {
    page: string;
}


const NavEstilizado = styled.nav`
    margin: 0;
    padding: 20px;
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 40px;
    width: 100%;
    max-width: 100%;
    color: var(--cor-fonte-primaria);
    z-index: 1;
`
const LinkEstilizado = styled(Link)`
    color: var(--cor-fonte-primaria);
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        color: var(--cor-secundaria);
    }
`
const AEstilizado = styled.a`
    color: var(--cor-fonte-primaria);
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        color: var(--cor-secundaria);
    }
`

const BotaoAdmEstilizado = styled.div`
    color: var(--cor-fonte-primaria);
    border: 2px solid var(--cor-fonte-primaria);
    padding: 5px 10px;
    border-radius: 12px;
    text-decoration: none;
    margin-right: 60px;
    cursor: pointer;
    &:hover {
        color: var(--cor-secundaria);
        border: 2px solid var(--cor-secundaria);
    }
`

const Nav = ({page}: NavProps) => {

    const { setDisplay } = useFormLogin();
    const { logoff } = useLogoff();

    return (
        <NavEstilizado>
            {page !== "admin" && (
                <LinkEstilizado to='/'>Home</LinkEstilizado>
            )}
            
            {page === "home" && (
                <>
                    <AEstilizado href="#tecnologias">Tecnologias</AEstilizado>
                    <AEstilizado href="#projetos">Projetos</AEstilizado>
                    <AEstilizado href="#contato">Contato</AEstilizado>
                </>
            )}

            {page !== "admin" && (
                <BotaoAdmEstilizado onClick={() => setDisplay('flex')}>ADM</BotaoAdmEstilizado>
            )}

            {page === "admin" && (
                <>
                    <AEstilizado href="/admin">Pessoal</AEstilizado>
                    <AEstilizado href="/admin/tecnologias">Tecnologias</AEstilizado>
                    <AEstilizado href="/admin/projetos">Projetos</AEstilizado>
                    <BotaoAdmEstilizado onClick={() => logoff()}>Sair</BotaoAdmEstilizado>
                </>
            )}
        </NavEstilizado>
    )
}

export default Nav;