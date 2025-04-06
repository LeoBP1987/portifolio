import styled from "styled-components";


interface ParagrafoProps {
    children: React.ReactNode | string;
    tamanhoFonte?: string;
    espacoParagrafo?: string;
}

const ParagrafoEstilizado = styled.p<{$tamanhoFonte?: string, $espacoParagrafo?: string}>`
    margin: 0 20px 0 0;
    padding: 0;
    max-width: ${props => props.$espacoParagrafo ? props.$espacoParagrafo : 'none'};
    color: var(--cor-fonte-terciaria);
    font-size: ${props => `${props.$tamanhoFonte}rem`};
    font-weight: 500;
    font-style: italic;
    overflow-wrap: break-word;
    text-align: justify;
    line-height: 1.5;
    @media screen and (max-width: 800px) {
        
    }

`


const Paragrafo = ({children, tamanhoFonte, espacoParagrafo}: ParagrafoProps) => {
    return (
        <ParagrafoEstilizado $tamanhoFonte={tamanhoFonte} $espacoParagrafo={espacoParagrafo}>{children}</ParagrafoEstilizado>
    )
};
export default Paragrafo;