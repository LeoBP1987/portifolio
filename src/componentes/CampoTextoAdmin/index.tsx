import styled from "styled-components";


interface CampoTextoAdminProps { 
    children: React.ReactNode | string;
    placeholder?: string;
    tipo?: 'email' | 'text' | 'password' | 'file';
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    readOnly?: boolean;
    accept?: string;
}

const ContainerCampoTextoAdmin = styled.div`
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

const InputEstilizado = styled.input`
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
const InputFileEstilizado = styled.input`
    margin: 0;
    padding: 0;
    border: none;
    color: var(--cor-detalhe-secundaria);
    font-size: 0.8rem;
    font-weight: 500;
    outline: none;
    transition: 0.3s;
`

const CampoTextoAdmin = ({ children, placeholder, tipo='text', value, onChange, readOnly, accept }: CampoTextoAdminProps) => { 
    return (
        <ContainerCampoTextoAdmin>
            <LabelEstilizado>{children}</LabelEstilizado>
            {tipo === 'file' ? <InputFileEstilizado accept={accept} type="file" onChange={onChange} /> : <InputEstilizado readOnly={readOnly} placeholder={placeholder} type={tipo} value={value} onChange={onChange} />}
        </ContainerCampoTextoAdmin>
    )
}

export default CampoTextoAdmin;