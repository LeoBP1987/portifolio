import styled from "styled-components";

interface BotaoAdminProps {
    children: React.ReactNode | string;
    cor: string;
    corFonte: string;
    tipo: 'submit' | 'reset' | 'button';
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const BotaoEstilizado = styled.button<{$cor: string, $corFonte: string}>`
    margin: 0;
    padding: 10px 20px;
    width: 140px;
    height: 50px;
    color: ${props => props.$corFonte};
    text-decoration: none;
    text-align: center;
    font-size: 0.8rem;
    font-weight: 900;
    border-radius: 8px;
    transition: 0.3s;
    background: ${props => props.$cor};
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    border: 1px solid var(--cor-primaria);
    cursor: pointer;
    &:hover {
        transform: translateY(-5px);
    }
`

const BotaoAdmin = ({ children, cor, tipo, corFonte, onClick }: BotaoAdminProps) => {
    return (
        <BotaoEstilizado type={tipo} $cor={cor} $corFonte={corFonte} onClick={onClick} >{children}</BotaoEstilizado>
    )
}

export default BotaoAdmin;