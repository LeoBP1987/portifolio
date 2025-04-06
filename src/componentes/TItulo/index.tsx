import styled from "styled-components";


interface TituloProps {
    children: React.ReactNode | string;
    texto?: string;
    span?: string;
    marginTop?: string;
    align?: string;
}

const ContainerTitulos = styled.div<{ $marginTop?: string, $align?: string }>`
    margin: 0;
    margin-top: ${props => props.$marginTop ? props.$marginTop : '0'};
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: ${props => props.$align ? props.$align : 'center'};
    gap: 15px;
    z-index: 2;
`

const TituloEstilizado = styled.h2`
    margin: 0;
    padding: 0;
    color: var(--cor-fonte-secundaria);
    font-size: 1.8rem;
    font-weight: 900;
    @media screen and (max-width: 800px) {
        font-size: 1.5rem;
    }
`

const SpanEstilizado = styled.span<{ $span?: string }>`
    width: ${props => `${props.$span}em`};
    height: 0.3em;
    background-color: var(--cor-secundaria);
    border-radius: 5px;
    @media screen and (max-width: 800px) {
        width: ${props => `${(parseInt(props.$span)*0.75)}em`};
    }
`

const ParagrafoEstilizado = styled.p`
    max-width: 700px;
    margin: 0;
    padding: 0;
    color: var(--cor-fonte-terciaria);
    font-size: 1rem;
    font-weight: 500;
    overflow-wrap: break-word;
    text-align: center;
    line-height: 1.5;
    @media screen and (max-width: 800px) {
        font-size: 0.8rem;
    }
`

const Titulo = ({ children, texto, span, marginTop, align }: TituloProps) => {
    return (
        <ContainerTitulos $marginTop={marginTop} $align={align}>
            <TituloEstilizado>{children}</TituloEstilizado>
            {span && <SpanEstilizado $span={span} />}
            <ParagrafoEstilizado>{texto!}</ParagrafoEstilizado>
        </ContainerTitulos>
    )
    

}

export default Titulo;