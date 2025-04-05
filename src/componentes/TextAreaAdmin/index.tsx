import styled from "styled-components";


interface TextAreaAdminProps {
    children: React.ReactNode | string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    readOnly?: boolean;
}

const ContainerTextAreaAdmin = styled.div`
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
    font-size: 1rem;
    font-weight: 700;
`

const TextAreaAdminEstilizado = styled.textarea`
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

const TextAreaAdmin = ({children, placeholder, value, onChange, readOnly}: TextAreaAdminProps) => {
    return (
        <ContainerTextAreaAdmin>
            <LabelEstilizado>{children}</LabelEstilizado>
            <TextAreaAdminEstilizado readOnly={readOnly} placeholder={placeholder} value={value} onChange={onChange} />
        </ContainerTextAreaAdmin>
    )
}

export default TextAreaAdmin;