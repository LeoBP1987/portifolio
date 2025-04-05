import styled from "styled-components";
import icone_lixeira from "./lixeira.svg";
import icone_adicao from "./adicao.svg";
import icone_adicao_azul from "./adicionar_azul.svg"
import { useEffect, useState } from "react";
import { deleteTecnologias, postTecnologias } from "../../services/tecnologiasServices";
import { useGetTecnologias } from "../../hooks/useGetTecnologias";
import { useCarregando } from "../../context/CarregandoContext";

const ContainerTecnologias = styled.div`
    padding: 0;
    margin: 80px;
    margin-left: 120px;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 40px;
`

const ContainerTitulo = styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
`

const H1Estilizado = styled.h1`
    margin: 0;
    padding: 0;
    font-family: var(--fonte-secundaria);
    font-size: 1.8rem;
    font-weight: bolder;
    color: var(--cor-primaria);
`

const TableEstilizado = styled.table`
    width: 80%;
    margin: 0;
    padding: 0;
    border: 1px solid var(--cor-primaria);
    border-collapse: collapse;
    background: rgba(0, 13, 38, 0.2);
    text-align: left;
    tr {
        width: 20%;
        border: 1px solid var(--cor-primaria);
    }
    th {
        margin: 0;
        padding: 20px 0;
        font-family: var(--fonte-secundaria);
        font-size: 1.25rem;
        font-weight: bolder;
        color: var(--cor-primaria);
        text-align: center;
    }
    td {
        border: 1px solid var(--cor-primaria);
        margin: 0;
        padding: 20px 0;
        font-family: var(--fonte-primaria);
        font-size: 1rem;
        font-weight: normal;
        color: var(--cor-primaria);
        text-align: center;
    }
`

const ImgIconesTechs = styled.img`
    padding: 0;
    margin: 0;
    width: 50px;
    height: 50px;
`

const ImgIcones = styled.img<{$tamanho: string}>`
    padding: 0;
    margin: 0;
    width: ${props => props.$tamanho};
    height: ${props => props.$tamanho};
    cursor: pointer;
`

const FormAddTecnologia = styled.form<{$display: 'none' | 'flex'}>`
    width: 500px;
    height: auto;
    position: absolute;
    left: 30%;
    top: 20%;
    z-index: 5;
    display: ${props => props.$display};
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border: 1px solid var(--cor-secundaria);
    border-radius: 8px;
    padding: 25px;
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

const ContainerCampoEstilizado = styled.div<{$tipo?: string}>`
    width: ${props => props.$tipo === 'file' ? '90%' : '70%'};
    margin: 40px 40px 0 40px;
    display: flex;
    gap: ${props => props.$tipo === 'file' ? '10px' : '80px'};
    align-items: flex-end;
    justify-content: space-between;
`

const LabelEstilizado = styled.label`
    font-size: 1rem;
    font-weight: bold;
    color: var(--cor-fonte-secundaria);
`;

const CampoTextoEstilizado = styled.input`
    width: 175px;
    height: 20px;
    padding: 5px;
    border: 1px solid var(--cor-secundaria);
    border-radius: 5px;
    font-size: 0.75rem;
    &:focus {  
      outline: none;
    }
`;

const CampoFileEstilizado = styled.input`
    width: 60%;
    height: 20px;
    padding: 5px;
    border: none;
    border-radius: 5px;
    font-size: 0.75rem;
`

const H4Estilizado = styled.h4`
    margin: 8px 40px 0 210px;
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--cor-fonte-secundaria);
`

const ContainerListaTipos = styled.div`
    margin-left: 32.5px;
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 7;
`
const ImgFormTecnologia = styled.img`
    width: 15px;
    height: 15px;
    cursor: pointer;
`

const ListaTipos = styled.ul`
    list-style-type: none;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    z-index: 7;
`

const ItemLista = styled.li`
    padding: 5px;
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--cor-fonte-secundaria);
    background: var(--cor-terciaria);
    border: 1px solid var(--cor-secundaria);
    border-radius: 8px;
`

const BotaoEstilizado = styled.button`
    margin: 80px 0 0 40px;
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 5px;
    background: var(--cor-primaria);
    color: var(--cor-fonte-primaria);
    font-size: 0.8rem;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    &:hover {
        box-shadow: 1px 1px 10px 1px var(--cor-secundaria);
    }
`

const Tecnologias = () => {

    const { tecnologias, loading } = useGetTecnologias();
    const { setDisplay } = useCarregando();

    const [addTecnologia, setAddTecnologia] = useState<'none' | 'flex'>('none');
    const [nomeTecnologia, setNomeTecnologia] = useState<string>('');
    const [tiposTecnologia, setTiposTecnologia] = useState<string[]>([]);
    const [tipoTecnologia, setTipoTecnologia] = useState<string>('');
    const [iconeOriginal, setIconeOriginal] = useState<File | null>(null);
    const [nomeIconeOriginal, setNomeIconeOriginal] = useState<string>('');
    const [iconeEstilizado, setIconeEstilizado] = useState<File | null>(null);
    const [nomeIconeEstilizado, setNomeIconeEstilizado] = useState<string>('');

    useEffect(() => {
                if (loading) {
                    setDisplay('flex');
                } else {
                    setDisplay('none');
                }
            }, [loading]);

    const aoFecharForm = () => {
        setNomeTecnologia('');
        setTipoTecnologia('');
        setTiposTecnologia([]);
        setIconeOriginal(null);
        setNomeIconeOriginal('');
        setIconeEstilizado(null);
        setNomeIconeEstilizado('');
        setAddTecnologia('none');
    }

    const aoCarregarIconeOriginal = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setIconeOriginal(event.target.files[0]);
            setNomeIconeOriginal(event.target.files[0].name);
        }
    }

    const aoCarregarIconeEstilizado = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setIconeEstilizado(event.target.files[0]);
            setNomeIconeEstilizado(event.target.files[0].name);
        }
    }

    const aoAddTecnologia = () => {
        setTiposTecnologia([...tiposTecnologia, tipoTecnologia]);
        setTipoTecnologia('');
    }

    const aoSalvarTecnologia = async (e: React.FormEvent<HTMLFormElement>) => {
    
            e.preventDefault();
            setDisplay('flex');
    
            const formData = new FormData();
    
            formData.append('nome', nomeTecnologia);
            formData.append('tipo', JSON.stringify(tiposTecnologia));
    
            if (iconeOriginal) {
                formData.append('iconeOriginal', iconeOriginal);
            }

            if (iconeEstilizado) {
                formData.append('iconeEstilizado', iconeEstilizado);
            }
    
            try {
                await postTecnologias(formData);
                alert('Tecnologia criada com sucesso!');
                aoFecharForm();
    
            } catch (error) {
                console.log(error);
            } finally {
                setDisplay('none');
            }
        };

    const aoDeletarTecnologia = async (id: number) => {
        try {
            await deleteTecnologias(id);
            alert('Tecnologia deletada com sucesso!');
        } 
        catch (error) {
            console.log(error);
        }
    }

    return (
        <ContainerTecnologias>
            <ContainerTitulo>
                <H1Estilizado>TECNOLOGIAS</H1Estilizado>
                <ImgIcones $tamanho="25px" src={icone_adicao} alt="Icone de adição" onClick={() => setAddTecnologia('flex')} />
            </ContainerTitulo>
            <TableEstilizado>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Tipos</th>
                        <th>Icone Original</th>
                        <th>Icone Estilizado</th>
                        <th>Deleção</th>
                    </tr>
                </thead>
                <tbody>
                    {tecnologias.length > 0 && tecnologias.map((tecnologia, index) => 
                        <tr key={index}>
                            <td>{tecnologia.nome}</td>
                            <td>{tecnologia.tipo[0]}</td>
                            <td><ImgIconesTechs src={tecnologia.iconeOriginal} alt="Icone original da tecnologia" /></td>
                            <td><ImgIconesTechs src={tecnologia.iconeEstilizado} alt="Icone estilizado da tecnologia" /></td>
                            <td><ImgIcones $tamanho="40px" src={icone_lixeira} alt="Icone de lixeira" onClick={() => aoDeletarTecnologia(tecnologia.id)} /></td>
                        </tr>
                    )}
                </tbody>
            </TableEstilizado>
            <FormAddTecnologia $display={addTecnologia} onSubmit={(e) => aoSalvarTecnologia(e)}>
                <p onClick={() => aoFecharForm()}>X</p>
                <ContainerCampoEstilizado>
                    <LabelEstilizado>Nome:</LabelEstilizado>
                    <CampoTextoEstilizado value={nomeTecnologia} onChange={(e) => setNomeTecnologia(e.target.value)} type="text" />
                </ContainerCampoEstilizado>

                <ContainerCampoEstilizado>
                    <LabelEstilizado>Tipo:</LabelEstilizado>
                    <ContainerListaTipos>
                        <CampoTextoEstilizado value={tipoTecnologia} onChange={(e) => setTipoTecnologia(e.target.value)} type="text" />
                        <ImgFormTecnologia src={icone_adicao_azul} alt="Icone de adição" onClick={() => aoAddTecnologia()} />
                    </ContainerListaTipos>
                </ContainerCampoEstilizado>
                <ListaTipos>
                            {tiposTecnologia.length > 0 && tiposTecnologia.map((tipo, index) => 
                                <ItemLista key={index}>{tipo}</ItemLista>
                            )}
                </ListaTipos>
                <ContainerCampoEstilizado $tipo="file">
                    <LabelEstilizado>Icone Original:</LabelEstilizado>
                    <CampoFileEstilizado onChange={(e) => aoCarregarIconeOriginal(e)} type="file" />
                </ContainerCampoEstilizado>
                <H4Estilizado>{nomeIconeOriginal}</H4Estilizado>

                <ContainerCampoEstilizado $tipo="file">
                    <LabelEstilizado>Icone Estilizado:</LabelEstilizado>
                    <CampoFileEstilizado onChange={(e) => aoCarregarIconeEstilizado(e)} type="file" />
                </ContainerCampoEstilizado>
                <H4Estilizado>{nomeIconeEstilizado}</H4Estilizado>
                                
                <BotaoEstilizado type="submit">Salvar</BotaoEstilizado>
            </FormAddTecnologia>
        </ContainerTecnologias>
    )
}

export default Tecnologias;