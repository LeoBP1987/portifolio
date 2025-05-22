import styled, { keyframes, css } from "styled-components";
import Titulo from "../TItulo";
import { useEffect, useState } from "react";
import { useGetTecnologias } from "../../hooks/useGetTecnologias";
import { ITecnologia } from "../../compartilhado/interface/ITecnologia";
import { useNavigate } from "react-router-dom";
import { useTecnologias } from "../../context/TecnologiasContext.js";

interface TecnologiasProps {
    id: string;
}

const SectionTecnologias = styled.section`
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
    margin: 0 0 140px 80px;
    padding: 0;
    min-height: 227.25px;
    display: flex;
    gap: 80px;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 800px) {
        margin: 0;
        flex-direction: column;
        gap: 40px;
    }
`

const ContainerBotoes = styled.div`
    width: 600px;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    @media screen and (max-width: 800px) {
        width: 300px;
        gap: 20px;
        justify-content: center;
    }
`

const animacaoFlair = keyframes`
  0% {
    background-position: 0% 75%;
  }
  50% {
    background-position: 100% 75%;
  }
  100% {
    background-position: 0% 75%;
  }
`;

const BotaoEstilizado = styled.button<{ $ativo: boolean }>`
    width: 150px;
    height: 60px;
    margin: 0 0 0 100px;
    color: var(--cor-fonte-primaria);
    text-decoration: none;
    font-size: 0.8rem;
    font-weight: bold;
    padding: 15px 30px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    background: #000D26;
    box-shadow: 1px 1px 5px var(--cor-primaria);
    &:hover {
        background: linear-gradient(45deg, #000D26, #000D26, #000D26, #EEE8AA, #000D26, #000D26, #000D26);
        background-size: 400% 400%;
        animation: ${animacaoFlair} 6s ease infinite;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        box-shadow: 0 0 20px var(--cor-secundaria);
    }
    ${(props: { $ativo: boolean }) => props.$ativo && css`
        background: linear-gradient(45deg, #000D26, #000D26, #000D26, #EEE8AA, #000D26, #000D26, #000D26);
        background-size: 400% 400%;
        animation: ${animacaoFlair} 6s ease infinite;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        box-shadow: 0 0 20px var(--cor-secundaria);
    `}
    @media screen and (max-width: 800px) {
        margin: 0;
        padding: 10px 20px;
        width: 120px;
        height: 40px;
        font-size: 0.6rem;
    }
`

const ListaTecnologias = styled.div`
    width: 600px;
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    margin: 0;
    @media screen and (max-width: 800px) {
        width: 300px;
        margin-bottom: 80px;
        gap: 5px;
        justify-content: center;
    }
`

const ItemTecnologia = styled.div`
    margin: 0;
    padding: 20px;
    width: 130px;
    height: 81.25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    background: var(--cor-primaria);
    img {
        margin: 0;
        padding: 0;
        width: 56.25px;
        height: 56.25px;
    }
    p {
        margin: 0;
        padding: 0;
        color: var(--cor-fonte-primaria);
        font-size: 0.75rem;
        font-family: var(--fonte-terciaria);
        font-weight: 700;
        letter-spacing: 1px;
    }
    &:hover {
        background: linear-gradient(45deg, #000D26, #000D26, #000D26, #EEE8AA, #000D26, #000D26, #000D26);
        background-size: 400% 400%;
        animation: ${animacaoFlair} 6s ease infinite;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    @media screen and (max-width: 800px) {
        justify-content: center;
        width: 80px;
        height: 50px;
        img {
            width: 30px;
            height: 30px;
        }
        p {
            font-size: 0.5rem;
        }
    }
`

const MinhasTecnologias = ({id}: TecnologiasProps) => {

    const {tecnologias } = useGetTecnologias();

    const [listaBackEnd, setListaBackEnd] = useState<ITecnologia[]>([]);
    const [listaFrontEnd, setListaFrontEnd] = useState<ITecnologia[]>([]);
    const [listaDevOps, setListaDevOps] = useState<ITecnologia[]>([]);
    const [listaFerramentas, setListaFerramentas] = useState<ITecnologia[]>([]);
    const [botaoClicado, setBotaoClicado] = useState('back-end');

    const [listaSelecionada, setListaSelecionada] = useState<ITecnologia[]>(listaBackEnd);

    useEffect(() => {

        const carregaLista = () => {
            const backEnd = tecnologias.filter((tecnologia: ITecnologia) => tecnologia.tipo[0].includes("backend"));
            setListaBackEnd(backEnd);

            const frontEnd = tecnologias.filter((tecnologia: ITecnologia) => tecnologia.tipo[0].includes("frontend"));
            setListaFrontEnd(frontEnd);
            
            const devOps = tecnologias.filter((tecnologia: ITecnologia) => tecnologia.tipo[0].includes("devops"));
            setListaDevOps(devOps);

            const ferramentas = tecnologias.filter((tecnologia: ITecnologia) => tecnologia.tipo[0].includes("ferramentas"));
            setListaFerramentas(ferramentas);

            setListaSelecionada(listaBackEnd);
        }
        
        if(listaSelecionada.length === 0) {
            carregaLista();
        }

    } , [tecnologias]);

    const aoClicarBotao = (tipo: string) => {
        if (tipo === 'back-end') {
            setListaSelecionada(listaBackEnd);
            setBotaoClicado('back-end');
        } else if (tipo === 'front-end') {
            setListaSelecionada(listaFrontEnd);
            setBotaoClicado('front-end');
        } else if (tipo === 'devops') {
            setListaSelecionada(listaDevOps);
            setBotaoClicado('devops');
        } else if (tipo === 'ferramentas') {
            setListaSelecionada(listaFerramentas);
            setBotaoClicado('ferramentas');
        }
    };

    return (
        <SectionTecnologias id={id}>
            <Titulo span={'5'} marginTop={'60px'}>Minhas Tecnologias</Titulo>
            <ContainerConteudo>
                <ContainerBotoes>
                    <BotaoEstilizado $ativo={botaoClicado === 'back-end'} onClick={() => aoClicarBotao('back-end')}>Back End</BotaoEstilizado>
                    <BotaoEstilizado $ativo={botaoClicado === 'front-end'} onClick={() => aoClicarBotao('front-end')}>Front End</BotaoEstilizado>
                    <BotaoEstilizado $ativo={botaoClicado === 'devops'} onClick={() => aoClicarBotao('devops')}>DevOps</BotaoEstilizado>
                    <BotaoEstilizado $ativo={botaoClicado === 'ferramentas'} onClick={() => aoClicarBotao('ferramentas')}>Ferramentas</BotaoEstilizado>
                </ContainerBotoes>
                <ListaTecnologias>
                    {listaSelecionada.map((tecnologia, index) => (
                        <ItemTecnologia key={index}>
                            <img src={tecnologia.iconeEstilizado} alt={tecnologia.nome} />
                            <p>{tecnologia.nome}</p>
                        </ItemTecnologia>
                    ))}
                </ListaTecnologias>
            </ContainerConteudo>
        </SectionTecnologias>
    );
};

export default MinhasTecnologias;