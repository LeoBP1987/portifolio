import styled from "styled-components";
import Nav from "../../componentes/Nav";
import { Link } from "react-router";
import ReactMarkdown from "react-markdown";
import icone_github from "./icones/github.svg";
import icone_deploy from "./icones/deploy.svg";
import icone_voltar from "./icones/voltar.svg";
import setaPraCima from "./icones/setaPraCima.svg";
import { useEffect, useState } from "react";
import { useGetProjeto } from "../../hooks/useGetProjeto";
import { useCarregando } from "../../context/CarregandoContext";

const ContainerNav = styled.div`
  width: 100%;
  height: 100%;
  background: var(--cor-primaria);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
`;

const ContainerTituloProjeto = styled.div`
    margin: 100px 0 60px 0;
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const TituloEstilizado = styled.h1`
    font-size: 3rem;
    color: var(--cor-fonte-primaria);
    font-family: var(--fonte-secundaria);
    letter-spacing: 3px;
    -webkit-text-stroke: 1px #D35400;
    @media screen and (max-width: 800px) {
        font-size: 2.5rem;
    }
`

const ParagrafoEstilizado = styled.p`
    margin: 0;
    padding: 0;
    font-size: 1rem;
    color: var(--cor-fonte-primaria);
    text-align: center;
    overflow-wrap: break-word;
    font-family: var(--fonte-secundaria);
    letter-spacing: 3px;
    @media screen and (max-width: 800px) {
        max-width: 70%;
        font-size: 0.8rem;
        letter-spacing: 2.5px;
    }
`

const LinkDeployEstilizado = styled(Link)`
    margin: 80px 0 0 0;
    width: 120px;
    text-align: center;
    color: var(--cor-fonte-primaria);
    background: var(--cor-secundaria);
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: bold;
    padding: 15px 30px;
    border-radius: 5px;
    box-shadow: 1px 1px 5px ragba(0, 0, 0, 0.75);
    &:hover {
        box-shadow: 1px 1px 10px var(--cor-secundaria);
    }
    @media screen and (max-width: 800px) {
        width: 100px;
        font-size: 0.7rem;
        padding: 10px 20px;
    }
`

const ContainerProjeto = styled.div`
    width: 100%;
    height: 100%;
    background: var(--cor-terciaria);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const IframeEstilizado = styled.iframe`
    margin: 80px 0;
    width: 803px; 
    height: 451px;
    border-radius: 8px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.75);
    @media screen and (max-width: 800px) {
        width: 90%;
        height: 300px;
    }
`

const ImgDemonstracao = styled.img`
    margin: 80px 0;
    width: 803px; 
    height: 451px;
    border-radius: 8px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.75);
    @media screen and (max-width: 800px) {
        width: 90%;
        height: 300px;
    }
`

const ContainerTextoProjeto = styled.div`
    margin: 0 40px 80px 0;
    width: 803px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    @media screen and (max-width: 800px) {
        margin: 0;
        width: 90%;
    }
`

const SubTituloEstilizado = styled.h2`
    font-size: 1.5rem;
    font-weight: 900;
    color: var(--cor-primaria);
    font-family: var(--fonte-secundaria);
    letter-spacing: 1px;
    strong {
        color: var(--cor-secundaria);
    }
    @media screen and (max-width: 800px) {
        font-size: 1.2rem;
    }
`

const TexteProjetoEstilizado = styled.div`
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: 500;
    color: var(--cor-detalhe-secundaria);
    text-align: justify;
    overflow-wrap: break-word;
    font-family: var(--fonte-secundaria);
    letter-spacing: 1px;
    line-height: 1.2;
    @media screen and (max-width: 800px) {
        font-size: 0.8rem;
        line-height: 1.5;
    }
`

const ContainerStacks = styled.div`
    margin: 20px 0 0 0;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    @media screen and (max-width: 800px) {
        margin-bottom: 40px;
        gap: 15px;
    }
`

const ItemStack = styled.div`
    padding: 10px 20px;
    background: rgba(0, 13, 38, 0.5);
    color: var(--cor-fonte-primaria);
    font-size: 0.8rem;
    font-weight: bold;
    border-radius: 5px;
    box-shadow: 1px 1px 5px rgba(0, 13, 38, 1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    &:hover {
        transform: translateY(-5px);
    }
    @media screen and (max-width: 800px) {
        font-size: 0.65rem;
        padding: 7.5px 15px;
    }
`

const ListaLinks = styled.div`
    margin: 20px 0 0 0;
    display: flex;
    gap: 30px;
    @media screen and (max-width: 800px) {
        align-items: center;
        justify-content: center;
        margin-bottom: 60px;
        gap: 15px;
    }
`

const ItemLink = styled(Link)`
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
        width: 105px;
        height: 40px;
        img {
            width: 20px;
            height: 20px;
        }
        p {
            font-size: 0.65rem;
        }
    }
`

const ItemLinkVoltar = styled(Link)`
    margin: 0;
    padding: 0;
    text-decoration: none;
    width: 175px;
    background: var(--cor-terciaria);
    border: 1px solid var(--cor-primaria);
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
      color: var(--cor-primaria);
      font-size: 1rem;
      font-weight: 700;
    }
    &:hover {
        transform: translateY(-5px);
    }
    @media screen and (max-width: 800px) {
        width: 105px;
        height: 40px;
        img {
            width: 20px;
            height: 20px;
        }
        p {
            font-size: 0.65rem;
        }
    }
`

const ASubirEstilizado = styled.a`
  margin-bottom: 30px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  text-decoration: none;
  img {
    width: 60px;
    height: 60px;
    transition: transform 0.2s ease;
  }
  &:hover img {
    transform: scale(1.1);
  }
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const Projeto = () => {

    const [mostrarBotao, setMostrarBotao] = useState(false);
    const [stacks, setStacks] = useState<string[]>([]);
    const [loadingStacks, setLoadingStacks] = useState(true);
    const { projeto, loading } = useGetProjeto();
    const { setDisplay } = useCarregando();

    useEffect(() => {
                if (loading) {
                    setDisplay('flex');
                } else {
                    setDisplay('none');
                }
            }, [loading]);

    useEffect(() => {
            const carregaStacks = () => {
                if (projeto?.stacks) {
                    const stacks = JSON.parse(projeto.stacks) as string[];
                    setStacks(stacks);
                    setLoadingStacks(false);      
                }
            } 

            carregaStacks();

    }, [projeto]);
      
    useEffect(() => {
        const handleScroll = () => {
         if (window.scrollY > 200) {
            setMostrarBotao(true);
        } else {
            setMostrarBotao(false);
        }
        };
      
        window.addEventListener("scroll", handleScroll);
      
        return () => {
         window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <ContainerNav id="inicioProjeto">
                <Nav page="projeto" />
                <ContainerTituloProjeto>
                    <TituloEstilizado>{projeto?.nome}</TituloEstilizado>
                    <ParagrafoEstilizado>{projeto?.descricaoCurta}</ParagrafoEstilizado>
                    {projeto?.linkDeploy && (
                        <LinkDeployEstilizado to={projeto.linkDeploy} target="_blank">DEPLOY</LinkDeployEstilizado>
                    )}
                </ContainerTituloProjeto>
            </ContainerNav>
            <ContainerProjeto>
            {projeto?.linkVideoDemonstracao ? (
                <IframeEstilizado
                src={projeto.linkVideoDemonstracao}
                title="Labor - Demonstração"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                />
            ) : (
                <ImgDemonstracao src={projeto?.imagemDemonstracao} alt="Imagem de Demonstração do Projeto" />
            )}            
            <ContainerTextoProjeto id="sobreprojeto">
                <SubTituloEstilizado>Sobre o Projeto</SubTituloEstilizado>
                <TexteProjetoEstilizado>
                    <ReactMarkdown>{projeto?.descricaoLonga}</ReactMarkdown>
                </TexteProjetoEstilizado>    
            </ContainerTextoProjeto>
            {projeto?.descricaoBackEnd && 
                <ContainerTextoProjeto id="backend">
                    <SubTituloEstilizado>Destaques do Back-End</SubTituloEstilizado>
                    <TexteProjetoEstilizado>
                        <ReactMarkdown>{projeto?.descricaoBackEnd}</ReactMarkdown>
                    </TexteProjetoEstilizado>    
                </ContainerTextoProjeto>
            }
            {projeto?.descricaoFrontEnd &&
                <ContainerTextoProjeto id="frontend">
                    <SubTituloEstilizado>Destaques do Front-End</SubTituloEstilizado>
                    <TexteProjetoEstilizado>
                        <ReactMarkdown>{projeto?.descricaoFrontEnd}</ReactMarkdown>
                    </TexteProjetoEstilizado>   
                </ContainerTextoProjeto>
            }
            <ContainerTextoProjeto id="stacks">
                <SubTituloEstilizado>Stacks Utilizadas</SubTituloEstilizado>
                <ContainerStacks>
                    {stacks.length > 0 && stacks.map((stack, index) => (
                        <ItemStack key={index}>{stack}</ItemStack>
                    ))}
                </ContainerStacks>    
            </ContainerTextoProjeto>
            <ContainerTextoProjeto id="links">
                <SubTituloEstilizado>Links</SubTituloEstilizado>
                <ListaLinks>
                    {projeto?.linkRepositorio && (
                        <ItemLink to={projeto.linkRepositorio} target="_blank">
                            <img src={icone_github} alt="Icone do GitHub" />
                            <p>GitHub</p>
                        </ItemLink>
                    )}
                    {projeto?.linkDeploy && (
                        <ItemLink to={projeto.linkDeploy} target="_blank">
                            <img src={icone_deploy} alt="Icone de Link do Deploy" />
                            <p>Deploy</p>
                        </ItemLink>
                    )}
                    <ItemLinkVoltar to="/">
                        <img src={icone_voltar} alt="Icone de Voltar" />
                        <p>Voltar</p>
                    </ItemLinkVoltar>
                </ListaLinks>
            </ContainerTextoProjeto>
            {mostrarBotao && (
                <ASubirEstilizado href="#inicioProjeto">
                    <img src={setaPraCima} alt="Imagem de seta para cima" />
                </ASubirEstilizado>
            )}       
            </ContainerProjeto>
        </>
    )
}

export default Projeto;