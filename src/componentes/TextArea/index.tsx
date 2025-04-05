import styled from "styled-components";


interface TextAreaProps {
    children: React.ReactNode | string;
    placeholder?: string;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
    value?: string;
}

const ContainerTextArea = styled.div`
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
`

const TextAreaEstilizado = styled.textarea`
    margin: 0;
    padding: 20px 0 0 20px;
    width: 100%;
    height: 180px;
    border: none;
    border-radius: 5px;
    color: var(--cor-detalhe-secundaria);
    background: rgba(0, 13, 38, 0.08);
    font-size: 0.8rem;
    font-weight: 500;
    outline: none;
    transition: 0.3s;
`



const TextArea = ({ children, placeholder, onChange, value }: TextAreaProps) => { 
    return (
        <ContainerTextArea>
            <LabelEstilizado>{children}</LabelEstilizado>
            <TextAreaEstilizado value={value} onChange={onChange} placeholder={placeholder} />
        </ContainerTextArea>
    )
}

export default TextArea;