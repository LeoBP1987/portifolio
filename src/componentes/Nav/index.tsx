import { useState } from "react";
import { Link } from "react-router";
import styled from "styled-components";
import { useFormLogin } from "../../context/FormLoginContext";
import useLogoff from "../../hooks/useLogoff";
import iconePilha from "./IconePilha.png";

interface NavProps {
    page: string;
}


const NavEstilizado = styled.nav<{ $displayMobile: string }>`
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
    @media screen and (max-width: 800px) {
        display: ${(props: { $displayMobile: string }) => props.$displayMobile};
        z-index: 1000;
        width: 50%;
        position: absolute;
        top: 20px;
        left: 0;
        background: var(--cor-primaria);
        flex-direction: column;
        align-items: center;
        border: 1px solid var(--cor-fonte-primaria);
        border-radius: 12px;
        gap: 20px;
        padding: 20px 0;
    }
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
    @media screen and (max-width: 800px) {
        display: none;
    }

`
const ImgPilhaEstilizado = styled.img`
    display: none;
    @media screen and (max-width: 800px) {
    margin: 20px;
    padding: 0;
    position: absolute;
    left: 355px;
    top: 0;
    z-index: 1000;
    display: flex;
    width: 40px;
    height: 40px;
}
`

const Nav = ({page}: NavProps) => {

    const { setDisplay } = useFormLogin();
    const { logoff } = useLogoff();
    const [displayMobile, setDisplayMobile] = useState('none');

    return (
        <>
            <ImgPilhaEstilizado src={iconePilha} alt="Icone Pilha" onClick={() => setDisplayMobile(displayMobile === 'flex' ? 'none' : 'flex')} />
            <NavEstilizado $displayMobile={displayMobile}>
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
        </>
    )
}

export default Nav;