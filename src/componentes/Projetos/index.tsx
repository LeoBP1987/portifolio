import styled from "styled-components";
import { Link } from "react-router";
import Titulo from "../TItulo";
import { useGetProjetos } from "../../hooks/useGetProjetos";

interface ProjetosProps {
    id: string;
}

const SectionProjetos = styled.section`
    background: rgba(238, 232, 170, 0.85);
    z-index: 1;
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 60px;
    align-items: center;
`

const ContainerListaProjetos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 80px;
    margin: 10px 0 80px 0;
    padding: 0;
    z-index: 2;
    @media screen and (max-width: 800px) {
        gap: 40px;
    }

`

const ContainerItemProjeto = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 80px;
    align-items: center;
    margin: 0;
    padding: 0;
    z-index: 2;
    @media screen and (max-width: 800px) {
        flex-direction: column;
        gap: 40px;
    }
`

const ImgProjetos = styled.img`
    width: 600px;
    height: 400px;
    margin: 0;
    padding: 0;
    @media screen and (max-width: 800px) {
        width: 300px;
        height: 200px;
    }
`

const ContainerInfoProjeto = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0 0 50px 0;
    padding: 0;
    align-items: flex-start;
    @media screen and (max-width: 800px) {
        width: 300px;
        align-items: center;
        gap: 10px;
    }
`
const H3Estilizado = styled.h3`
    margin: 0;
    padding: 0;
    color: var(--cor-fonte-secundaria);
    font-size: 1.5rem;
    font-weight: 900;
    letter-spacing: 1px;
    @media screen and (max-width: 800px) {
        font-size: 1.2rem;
    }
`

const ParagrafoProjetoEstilizado = styled.p`
    margin: 0;
    padding: 0;
    max-width: 100%;
    color: var(--cor-fonte-terciaria);
    font-size: 0.8rem;
    font-weight: 500;
    text-align: justify;
    line-height: 1.5;
    overflow-wrap: break-word;
    @media screen and (max-width: 800px) {
        font-size: 0.7rem;
    }

`

const LinkConhecaProjeto = styled(Link)`
    margin: 30px 0 0 0;
    color: var(--cor-fonte-primaria);
    background: var(--cor-secundaria);
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: bold;
    padding: 15px 30px;
    border-radius: 5px;
    box-shadow: 1px 1px 5px var(--cor-primaria);
    &:hover {
        box-shadow: 2px 2px 20px var(--cor-secundaria);
    }
    @media screen and (max-width: 800px) {
        font-size: 0.7rem;
        padding: 10px 20px;
    }

`

const Projetos = ({id}: ProjetosProps) => { 

    const { projetos } = useGetProjetos();

    const texto = "Conheça alguns dos projetos que desenvolvi!";

    return (
        <SectionProjetos id={id}>
            <Titulo span={'2.5'} marginTop={'60px'} texto={texto}>Meus Projetos</Titulo>
            <ContainerListaProjetos>
                {projetos && projetos.map((projeto, index) => 
                    projeto && (
                            <ContainerItemProjeto key={index}>
                                <ImgProjetos key={`I${index}`} src={projeto.imagem_capa} alt={projeto.nome} title={projeto.nome} />
                                <ContainerInfoProjeto key={`C${index}`}>
                                    <H3Estilizado key={`H${index}`}>{projeto.nome}</H3Estilizado>
                                    <ParagrafoProjetoEstilizado key={`P${index}`}>{projeto.descricaoCurta}</ParagrafoProjetoEstilizado>
                                    <LinkConhecaProjeto key={`L${index}`} to={`/projeto/${projeto.id}`}>Conheça o Projeto</LinkConhecaProjeto>
                            </ContainerInfoProjeto>
            </ContainerItemProjeto>
                    )
                )}
            </ContainerListaProjetos>
        </SectionProjetos>
    )
}

export default Projetos;