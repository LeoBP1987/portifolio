import styled from "styled-components";
import AnimacaoDigitacao from "../AnimacaoDigitacao";
import { Link } from "react-router";
import { useGetUsuario } from "../../hooks/useGetUsuario";
import { useEffect } from "react";
import { useCarregando } from "../../context/CarregandoContext";

const ContainerHeaderEstilizado = styled.header`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 50px;
    z-index: 1;
    margin: 0 150px 150px 100px;
    @media screen and (max-width: 800px) {
        margin: 0;
        flex-direction: column-reverse;
        align-items: center;
    }
`

const DivInfoEstilizado = styled.div`
    min-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
    @media screen and (max-width: 800px) {
        align-items: center;
        text-align: center;
        width: 200px;
    }

`

const H1Estilizado = styled.h1`
    margin: 0;
    padding: 0;
    color: var(--cor-fonte-primaria);
    font-size: 2.5rem;
    font-weight: 900;
    font-family: Arial, Helvetica, sans-serif;
    @media screen and (max-width: 800px) {
        font-size: 2rem;
    }
`

const ParagrafoEstilizado = styled.p`
    margin: 0;
    padding: 0;
    color: var(--cor-fonte-primaria);
    font-size: 0.8rem;
    text-align: justify;
    line-height: 1.1rem;
    @media screen and (max-width: 800px) {
        width: 75%;
        font-size: 0.7rem;
    }
`

const ImgFotoEstilizado = styled.img`
    margin: 0;
    padding: 0;
    width: 400px;
    height: 400px;
    border-radius: 16px;
    border: 5px solid var(--cor-fonte-primaria);
    box-shadow: 0 0 10px #000000;
    @media screen and (max-width: 800px) {
        width: 250px;
        height: 250px;
    }
`

const LinkSobreMimEstilizado = styled(Link)`
    margin: 20px 0 0 0;
    color: var(--cor-fonte-primaria);
    background: var(--cor-secundaria);
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: bold;
    padding: 15px 30px;
    border-radius: 5px;
    box-shadow: 1px 1px 5px ragba(0, 0, 0, 0.75);
    &:hover {
        background: var(--cor-detalhe);
    }
    @media screen and (max-width: 800px) {
        font-size: 0.7rem;
        padding: 10px 20px;
        margin-bottom: 25px;
    }
`

const Cabecalho = () => {

    const {usuario, loading} = useGetUsuario();
    const {setDisplay} = useCarregando();

    useEffect(() => {
                if (loading) {
                    setDisplay('flex');
                } else {
                    setDisplay('none');
                }
            }, [loading]);

    return (
        <ContainerHeaderEstilizado>
            <DivInfoEstilizado>
                <AnimacaoDigitacao />
                <H1Estilizado>Desenvolvedor</H1Estilizado>
                <ParagrafoEstilizado>{usuario?.descricao}</ParagrafoEstilizado>
                <LinkSobreMimEstilizado to='/sobremim'>Sobre Mim</LinkSobreMimEstilizado>
            </DivInfoEstilizado>
            <ImgFotoEstilizado src={usuario?.foto_perfil} alt="Foto de perfil" />
        </ContainerHeaderEstilizado>
    )
}

export default Cabecalho;