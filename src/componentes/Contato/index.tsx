import styled from "styled-components";
import Titulo from "../TItulo";
import FormularioContato from "../FormularioContato";
import icone_github from "./icones/github.svg"
import icone_linkedin from "./icones/linkedin.svg"
import icone_whatsapp from "./icones/whatsapp.svg"
import icone_download from "./icones/download.svg"
import { Link } from "react-router";

interface ContatoProps {
  id: string;
}

const SectionContatos = styled.section`
    background: var(--cor-terciaria);
    z-index: 1;
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 60px;
    align-items: center;
`

const ContainerConteudo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    cursor: pointer;
`

const ListaLinks = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
`

const LinkEstilizado = styled(Link)`
    margin: 0;
    padding: 0;
    text-decoration: none;
    width: 175px;
    background: var(--cor-primaria);
    border: none;
    border-radius: 10px;
    box-shadow: 1px 1px 5px rgba(0, 13, 38, 0.08);
    text-align: center;
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    img {
      width: 40px;
      height: 40px;
    }
    p {
      color: var(--cor-fonte-primaria);
      font-size: 1rem;
      font-weight: 700;
    }
    &:hover {
        transform: translateY(-5px);
    }
    @media screen and (max-width: 800px) {
        width: 100px;
        height: 40px;
        padding: 10px 20px;
        gap: 10px;
        p {
          font-size: 0.8rem;
        }
        img {
          width: 30px;
          height: 30px;
        }  
    }
`

const AEstilizado = styled.a`
    margin: 0;
    padding: 0;
    text-decoration: none;
    width: 175px;
    background: var(--cor-primaria);
    border: none;
    border-radius: 10px;
    box-shadow: 1px 1px 5px rgba(0, 13, 38, 0.08);
    text-align: center;
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    img {
      width: 40px;
      height: 40px;
    }
    p {
      color: var(--cor-fonte-primaria);
      font-size: 1rem;
      font-weight: 700;
    }
    &:hover {
        transform: translateY(-5px);
    }
    @media screen and (max-width: 800px) {
        width: 100px;
        height: 40px;
        padding: 10px 20px;
        gap: 10px;
        p {
          font-size: 0.8rem;
        }
        img {
          width: 30px;
          height: 30px;
        }  
    }
`

const Contato = ({id}: ContatoProps) => {

  const texto = "Visite minhas redes ou me envie uma mensagem. Te responderei na primeira oportunidade!";

  return (
    <SectionContatos id={id}>
        <Titulo texto={texto} span={'2'} marginTop={'60px'} >CONTATO</Titulo>
        <ContainerConteudo>
            <ListaLinks>
              <LinkEstilizado to={'https://github.com/LeoBP1987'} target="_blank">
                <img src={icone_github} alt="Icone do GitHub" />
                <p>GitHub</p>
              </LinkEstilizado>
              <LinkEstilizado to={'https://www.linkedin.com/in/leonardo-borges-pereira/'} target="_blank">
                <img src={icone_linkedin} alt="Icone do LinkedIn" />
                <p>LinkedIn</p>
              </LinkEstilizado>
              <LinkEstilizado to={'https://api.whatsapp.com/send?phone=5512981431802'} target="_blank">
                <img src={icone_whatsapp} alt="Icone do WhatsApp" />
                <p>WhatsApp</p>
              </LinkEstilizado>
              <AEstilizado href={'/CVLeonardoPereira.pdf'} download="CVLeonardoPereira.pdf">
                <img src={icone_download} alt="Icone de Download" />
                <p>Currículo</p>
              </AEstilizado>
            </ListaLinks>
            <FormularioContato />
        </ContainerConteudo>
    </SectionContatos>
  );
}

export default Contato;