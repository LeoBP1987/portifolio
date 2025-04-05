import styled from "styled-components"
import iconeAdicao from "./adicao.svg"
import { Link } from "react-router"
import { useGetProjetos } from "../../hooks/useGetProjetos"




const ContainerProjetos = styled.div`
    padding: 0;
    margin: 80px;
    margin-left: 120px;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
`

const ContainerTitulo = styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
`

const ImgIcones = styled.img`
    padding: 0;
    margin: 0;
    margin-bottom: 20px;
    width: 25px;
    height: 25px;
    cursor: pointer;
`

const H1Estilizado = styled.h1`
    margin: 0 0 20px 65px;
    padding: 0;
    font-family: var(--fonte-secundaria);
    font-size: 2.2rem;
    font-weight: bolder;
    color: var(--cor-primaria);
    text-align: start;
`

const ContainerItemProjeto = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    gap: 80px;
    align-items: center;
    justify-content: flex-start;
`

const LinkNovoProjeto = styled(Link)`
    margin: 0;
    padding: 0;
    text-decoration: none;
`

const ImgProjetos = styled.img`
    width: 600px;
    height: 400px;
    margin: 0;
    padding: 0;
`

const ContainerInfoProjeto = styled.div`
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0 0 50px 0;
    padding: 0;
    align-items: flex-start;
`
const H3Estilizado = styled.h3`
    margin: 0;
    padding: 0;
    font-family: var(--fonte-secundaria);
    color: var(--cor-fonte-secundaria);
    font-size: 1.5rem;
    font-weight: bolder;
    letter-spacing: 1px;
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
`

const Projetos = () => {

    const { projetos } = useGetProjetos();

    return (
        <ContainerProjetos>
            <ContainerTitulo>
                <H1Estilizado>PROJETOS</H1Estilizado>
                <LinkNovoProjeto to={`/admin/novoprojeto`}>
                    <ImgIcones src={iconeAdicao} alt="Adicionar Projeto" />
                </LinkNovoProjeto>
            </ContainerTitulo>
            {projetos && projetos.map((projeto, index) => 
                <ContainerItemProjeto key={index}>
                    <ImgProjetos key={`I${index}`} src={projeto.imagem_capa} alt={projeto.nome} title={projeto.nome} />
                    <ContainerInfoProjeto key={`C${index}`}>
                        <H3Estilizado key={`H${index}`}>{projeto.nome}</H3Estilizado>
                        <LinkConhecaProjeto key={`L${index}`} to={`/admin/editarprojeto/${projeto.id}`}>EDITAR</LinkConhecaProjeto>
                    </ContainerInfoProjeto>
                </ContainerItemProjeto>
            )}
            
        </ContainerProjetos>
    )
}

export default Projetos