import styled from "styled-components";


interface DivTextoAdminProps { 
    children: React.ReactNode | string;
    valor: string | undefined;
    tipo: 'texto' | 'textArea';
}

const ContainerDivTextoAdmin = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`

const LabelEstilizado = styled.label`
    margin: 0;
    padding: 0;
    color: var(--cor-fonte-secundaria);
    font-size: 1rem;
    font-weight: 700;
`

const TextoEstilizado = styled.p`
    margin: 0;
    padding: 10px 20px;
    width: 100%;
    height: 30px;
    border: none;
    border-radius: 5px;
    color: var(--cor-detalhe-secundaria);
    background: #FFF;
    font-size: 0.8rem;
    font-weight: 500;
    outline: none;
    transition: 0.3s;
    box-shadow: 1px 1px 5px var(--cor-secundaria);
`

const TextAreaEstilizado = styled.p`
    margin: 0;
    padding: 20px 25px;
    width: 100%;
    height: 180px;
    border: none;
    border-radius: 5px;
    color: var(--cor-detalhe-secundaria);
    background: #FFF;
    font-size: 0.8rem;
    font-weight: 500;
    outline: none;
    transition: 0.3s;
    box-shadow: 1px 1px 5px var(--cor-secundaria);
`

const DivTextoAdmin = ({ children, valor, tipo }: DivTextoAdminProps) => { 
    return (
        <ContainerDivTextoAdmin>
            <LabelEstilizado>{children}</LabelEstilizado>
            {tipo === 'texto' ? <TextoEstilizado>{valor}</TextoEstilizado> : <TextAreaEstilizado>{valor}</TextAreaEstilizado>}
        </ContainerDivTextoAdmin>
    )
}

export default DivTextoAdmin;