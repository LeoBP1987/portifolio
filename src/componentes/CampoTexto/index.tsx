import styled from "styled-components";


interface CampoTextoProps { 
    children: React.ReactNode | string;
    placeholder?: string;
    tipo?: 'email' | 'text' | 'password';
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
}

const ContainerCampoTexto = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
`

const LabelEstilizado = styled.label`
    margin: 0;
    padding: 0;
    color: var(--cor-fonte-secundaria);
    font-size: 0.8rem;
    font-weight: 700;
    @media screen and (max-width: 800px) {
        font-size: 0.7rem;
    }
`

const InputEstilizado = styled.input`
    margin: 0;
    padding: 0 0 0 20px;
    width: 100%;
    height: 60px;
    border: none;
    border-radius: 5px;
    color: var(--cor-detalhe-secundaria);
    background: rgba(0, 13, 38, 0.08);
    font-size: 0.8rem;
    font-weight: 500;
    outline: none;
    transition: 0.3s;
    @media screen and (max-width: 800px) {
        width: 90%;
        height: 50px;
        font-size: 0.7rem;
    }
`

const CampoTexto = ({ children, placeholder, tipo='text', onChange, value }: CampoTextoProps) => { 
    return (
        <ContainerCampoTexto>
            <LabelEstilizado>{children}</LabelEstilizado>
            <InputEstilizado value={value} onChange={onChange} placeholder={placeholder} type={tipo} />
        </ContainerCampoTexto>
    )
}

export default CampoTexto;