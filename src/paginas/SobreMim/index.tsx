import styled from "styled-components";
import Nav from "../../componentes/Nav";
import Fundo from "./fundo_sobremim.png";
import ImagemSobreMim from "./imagem_sobremim.jpg";
import Titulo from "../../componentes/TItulo";
import Paragrafo from "../../componentes/Paragrafo";
import { useUsuario } from "../../context/UsuarioContext";
import { useEffect, useState } from "react";
import { useCarregando } from "../../context/CarregandoContext";

const ContainerNav = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${Fundo});
  background-size: cover;
`;

const DivContainerConteudo = styled.div`
  width: 100%;
  height: 100%;
  background: var(--cor-terciaria);
  display: flex;
`;

const ImgSobreMim = styled.img`
    margin: 80px 0 0 80px;
    width: 450px;
    height: 300px;
    filter: grayscale(100%);
    @media screen and (max-width: 800px) {
        display: none;
    }
`

const ContainerTexto = styled.div`
    margin: 80px 0 80px 80px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: justify-self;
    @media screen and (max-width: 800px) {
        margin: 40px 20px 40px 40px;
        gap: 15px;
    }
`

const StrongEstilizado = styled.strong`
    color: var(--cor-secundaria);
    font-weight: 900;
`

const SobreMim = () => {

    const { usuario, loading } = useUsuario();
    const [sobreMim, setSobreMim] = useState<string[]>([]);
    const {setDisplay} = useCarregando();

    useEffect(() => {
        if (loading) {
            setDisplay('flex');
        } else {
            setDisplay('none');
        }
    }, [loading]);

    useEffect(() => {
        if (usuario) {
            
            const string = usuario.sobreMim[0];
            const sobreMimArray = JSON.parse(string);

            setSobreMim(sobreMimArray || []);

        }
    }, [usuario]);

    return (
        <>
            <ContainerNav>
                <Nav page="sobremim" />
            </ContainerNav>
            <DivContainerConteudo>
                <ImgSobreMim src={ImagemSobreMim} alt="Imagem de um computador" />
                <ContainerTexto>
                    <Titulo align="flex-start">Quem sou eu <StrongEstilizado>?</StrongEstilizado></Titulo>
                    {sobreMim.map((sobreMim, index) => (
                        <Paragrafo key={index} tamanhoFonte="0.8" espacoParagrafo="100%" >{sobreMim}</Paragrafo>
                    ))}
                </ContainerTexto>
            </DivContainerConteudo>
        </>
    );
};

export default SobreMim;