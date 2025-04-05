import styled from "styled-components";
import EstilosGlobais from "../../componentes/EstilosGlobais";
import Rodape from "../../componentes/Rodape";
import { Outlet } from "react-router";
import { useFormLogin } from "../../context/FormLoginContext";
import useLogin from "../../hooks/useLogin";
import { useEffect, useState } from "react";
import Carregando from "../../componentes/Carregando";


const PortfolioContainer = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  color: var(--cor-fonte-primaria);
  overflow-x: hidden;
`;

const DivContainerRodape = styled.div`
  background: #333;
  z-index: 1;
`

const FormLoginEstilizado = styled.form<{$display: 'none' | 'flex'}>`
    width: 300px;
    height: 225px;
    position: absolute;
    right: 100px;
    top: 50px;
    z-index: 5;
    display: ${props => props.$display};
    flex-direction: column;
    justify-content: flex-start;
    border: 1px solid var(--cor-secundaria);
    border-radius: 8px;
    padding: 10px;
    background: var(--cor-terciaria);
    box-shadow: 1px 1px 10px 1px var(--cor-secundaria);
    p {
      font-size: 0.8rem;
      font-weight: 900;
      color: var(--cor-fonte-secundaria);
      cursor: pointer;
      position: absolute;
      top: 0;
      right: 20px;
      z-index: 6;
    }
`

const ContainerCampoEstilizado = styled.div`
    margin: 40px 40px 0 40px;
    display: flex;
    gap: 10px;
    align-items: first baseline;
    justify-content: space-between;
`

const LabelEstilizado = styled.label`
    font-size: 0.8rem;
    font-weight: bold;
    color: var(--cor-fonte-secundaria);
`;

const CampoTextoEstilizado = styled.input`
    width: 60%;
    height: 20px;
    padding: 5px;
    border: 1px solid var(--cor-secundaria);
    border-radius: 5px;
    font-size: 0.75rem;
    &:focus {  
      outline: none;
    }
`;

const BotaoEstilizado = styled.button`
    margin: 40px 0 0 40px;
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 5px;
    background: var(--cor-secundaria);
    color: var(--cor-terciaria);
    font-size: 0.8rem;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    &:hover {
        box-shadow: 1px 1px 10px 1px var(--cor-secundaria);
    }
`

const PaginaBase = () => {

  const { display, setDisplay } = useFormLogin();
  const {setDisplay: setDisplayContext} = useFormLogin();
  const { login, loading, error } = useLogin();
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(() => {
                  if (loading) {
                    setDisplayContext('flex');
                  } else {
                    setDisplayContext('none');
                  }
              }, [loading]);

  const aoLogar = async (evento: React.FormEvent) => {
    evento.preventDefault();
    await login(usuario, senha);
    setUsuario("");
    setSenha("");
  }

  const aoFecharForm = () => {
    setDisplay('none');
    setUsuario("");
    setSenha("");
  }

  return (
    <>
      <Carregando />
      <PortfolioContainer>
          <EstilosGlobais />
          <FormLoginEstilizado $display={display} onSubmit={(e) => aoLogar(e)}>
              <p onClick={() => aoFecharForm()}>X</p>
              <ContainerCampoEstilizado>
                  <LabelEstilizado htmlFor="login">Login</LabelEstilizado>
                  <CampoTextoEstilizado value={usuario} onChange={(e) => setUsuario(e.target.value)} type="text" id="login" />
              </ContainerCampoEstilizado>
              <ContainerCampoEstilizado>
                  <LabelEstilizado htmlFor="senha">Senha</LabelEstilizado>
                  <CampoTextoEstilizado value={senha} onChange={(e) => setSenha(e.target.value)} type="password" id="senha" />
              </ContainerCampoEstilizado>
              <BotaoEstilizado type="submit">Entrar</BotaoEstilizado>
              {error && <p style={{ color: "red" }}>{error}</p>}
          </FormLoginEstilizado>
          <Outlet />
          <DivContainerRodape>
            <Rodape />
          </DivContainerRodape>
      </PortfolioContainer>
    </>
  );
}

export default PaginaBase;