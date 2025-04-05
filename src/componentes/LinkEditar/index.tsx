import { Link } from "react-router";
import styled from "styled-components";

interface LinkEditarProps {
    children: React.ReactNode | string;
    to: string;
    cor: string;
}

const LinkEstilizado = styled(Link)<{$cor: string}>`
    margin: 0;
    padding: 15px 15px 10px 20px;
    width: 120px;
    height: 25px;
    color: var(--cor-fonte-primaria);
    text-decoration: none;
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 8px;
    transition: 0.3s;
    background: ${props => props.$cor};
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    &:hover {
        transform: translateY(-5px);
    }
`

const LinkEditar = ({ children, to, cor }: LinkEditarProps) => {
    return (
        <LinkEstilizado to={to} $cor={cor} >{children}</LinkEstilizado>
    )
}

export default LinkEditar;