import styled from "styled-components";
import { useGetUsuario } from "../../hooks/useGetUsuario";
import LinkAdmin from "../../componentes/LinkEditar";
import DivTextoAdmin from "../../componentes/DivTextoAdmin";
import { useEffect } from "react";
import { useCarregando } from "../../context/CarregandoContext";

const ContainerPessoal = styled.div`
    padding: 0;
    margin: 80px 160px 80px 200px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 200px;
`

const ContainerFormEstilizado = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 25px;
`

const ImgFotoEstilizado = styled.img`
    margin: 0;
    padding: 0;
    width: 400px;
    height: 400px;
    border-radius: 16px;
    border: 5px solid var(--cor-fonte-primaria);
    box-shadow: 0 0 10px #000000;
`

const Pessoal = () => {

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
        <ContainerPessoal>
            <ContainerFormEstilizado>
                <DivTextoAdmin tipo={'texto'} valor={usuario?.nome_completo}>Nome Completo</DivTextoAdmin>
                <DivTextoAdmin tipo={'texto'} valor={usuario?.username}>Login</DivTextoAdmin>
                <DivTextoAdmin tipo={'texto'} valor={usuario?.email}>Email</DivTextoAdmin>
                <DivTextoAdmin tipo={'textArea'} valor={usuario?.descricao}>Descrição</DivTextoAdmin>
                {(JSON.parse(usuario?.sobreMim[0] || '[]') as string[]).map((paragrafo: string, index) => (
                    <DivTextoAdmin tipo={'textArea'} valor={paragrafo} key={index}>Sobre Mim P{index + 1}</DivTextoAdmin>
                ))}
                <LinkAdmin to={'/admin/editarPessoal'} cor={'var(--cor-secundaria)'}>EDITAR</LinkAdmin>
            </ContainerFormEstilizado>
            <ImgFotoEstilizado src={usuario?.foto_perfil} alt="Foto de Perfil" />
        </ContainerPessoal>
    )
}

export default Pessoal