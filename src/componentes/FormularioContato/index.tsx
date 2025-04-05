import styled from "styled-components";
import CampoTexto from "../CampoTexto";
import TextArea from "../TextArea";
import { useState } from "react";
import { useCarregando } from "../../context/CarregandoContext";
import { envioEmail } from "../../services/enviarContato";

const FormularioEstilizado = styled.form`
    width: 40%;
    height: 100%;
    padding: 60px 40px;
    margin: 0 0 60px 0;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: none;
    border-radius: 8px;
    background: #FFF;
    color: var(--cor-fonte-secundaria);
    box-shadow: 1px 1px 5px rgba(0, 13, 38, 0.08);
`

const ContainerBotao = styled.div`
    width: 100%;
    text-align: end;
`

const BotaoEstilizado = styled.button`
    margin: 20px 0 0 0;
    padding: 15px 30px;
    width: 200px;
    height: 60px;
    color: var(--cor-fonte-primaria);
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background: #D35400;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: 1px 1px 5px var(--cor-primaria);
    &:hover {
        transform: translateY(-5px);
    }
`

const FormularioContato = () => { 

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [mensagem, setMensagem] = useState("");
    const { setDisplay } = useCarregando();

    const aoEnviarEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setDisplay('flex');
        try {
            await envioEmail(nome, email, mensagem);
            alert("Mensagem enviada com sucesso!");
        } catch (error) {
            alert("Erro ao enviar mensagem: " + (error instanceof Error ? error.message : "Erro desconhecido"));
        } finally {
            setDisplay('none');
            setNome("");
            setEmail("");
            setMensagem("");
        }
    }
    

    return (
        <FormularioEstilizado onSubmit={(e) => aoEnviarEmail(e)}>
            <CampoTexto value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite seu nome aqui">Nome</CampoTexto>
            <CampoTexto value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu email aqui">Email</CampoTexto>
            <TextArea value={mensagem} onChange={(e) => setMensagem(e.target.value)} placeholder="Digite sua mensagem aqui">Mensagem</TextArea>
            <ContainerBotao>
                <BotaoEstilizado type="submit">ENVIAR</BotaoEstilizado>
            </ContainerBotao>
        </FormularioEstilizado>
    )
}

export default FormularioContato;