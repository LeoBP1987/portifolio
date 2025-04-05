import CampoTextoAdmin from "../../componentes/CampoTextoAdmin"
import TextAreaAdmin from "../../componentes/TextAreaAdmin"
import BotaoAdmin from "../../componentes/BotaoAdmin"
import { useEffect, useState } from "react"
import iconeAdicao from "./adicionar_azul.svg"
import { deleteProjeto, patchProjeto } from "../../services/projetosServices"
import { useNavigate } from "react-router"
import styled from "styled-components"
import { useGetProjeto } from "../../hooks/useGetProjeto"
import { useCarregando } from "../../context/CarregandoContext"

const FormNovoProjeto = styled.form`
    margin: 0 auto;
    padding: 80px;
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 100%;
    max-width: 800px;
    align-items: center;
    justify-content: flex-start;
`

const ContainerBotoes = styled.div`
    margin: 40px 0 0 0;
    width: 100%;
    display: flex;
    gap: 160px;
`

const AEstilizado = styled.a`
    margin: 0;
    padding: 0;
    text-decoration: none;
`

const ContainerStacks = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    gap: 20px;
    align-items: end;
`

const LabelStack = styled.label`
    margin: 0;
    padding: 0;
    color: var(--cor-fonte-secundaria);
    font-size: 1.2rem;
    font-weight: 700;
`

const InputStack = styled.input`
    margin: 0;
    padding: 10px 20px;
    width: 75%;
    height: 30px;
    border: none;
    border-radius: 5px;
    color: var(--cor-detalhe-secundaria);
    background: #FFF;
    font-size: 0.8rem;
    font-weight: 500;
    outline: none;
    transition: 0.3s;
    box-shadow: 1px 1px 5px var(--cor-secundaria);
`

const ImgStack = styled.img`
    margin-bottom: 10px;
    width: 20px;
    height: 20px;
    cursor: pointer;
`

const ListaStacks = styled.ul`
    width: 100%;
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: flex-start;
`

const ItemStack = styled.li`
    padding: 10px;
    font-size: 1rem;
    font-weight: 700;
    color: var(--cor-fonte-secundaria);
    background: var(--cor-terciaria);
    border: 1px solid var(--cor-secundaria);
    border-radius: 8px;
    display: flex;
    gap: 10px;
    span {
      margin: 0 0 5px 0;
      padding: 0;
      font-size: 0.5rem;
      font-weight: 900;
      color: var(--cor-fonte-secundaria);
      cursor: pointer;
    }
`

const EditarProjeto = () => {

    const [loading, setLoading] = useState(true)
    const { setDisplay } = useCarregando();
    const [nomeProjeto, setNomeProjeto] = useState('')
    const [ordem, setOrdem] = useState('')
    const [imagemCapa, setImagemCapa] = useState<File | null>(null)
    const [imagemDemonstracao, setImagemDemonstracao] = useState<File | null>(null)
    const [linkVideo, setLinkVideo] = useState('')
    const [linkDeploy, setLinkDeploy] = useState('')
    const [linkRepositorio, setLinkRepositorio] = useState('')
    const [descricaoCurta, setDescricaoCurta] = useState('')
    const [descricaoLonga, setDescricaoLonga] = useState('')
    const [descricaoBackEnd, setDescricaoBackEnd] = useState('')
    const [descricaoFrontEnd, setDescricaoFrontEnd] = useState('')
    const [stack, setStack] = useState('')
    const [stacks, setStacks] = useState<string[] | []>([])
    const navigate = useNavigate()

    const { projeto} = useGetProjeto();

    useEffect(() => {
                if (loading) {
                    setDisplay('flex');
                } else {
                    setDisplay('none');
                }
            }, [loading]);

    useEffect(() => {

        const carregarProjeto = () => {

            if(!projeto) {
                return;
            }
            setNomeProjeto(projeto.nome);
            setOrdem(projeto.ordem);
            setLinkVideo(projeto.linkVideoDemonstracao || '');
            setLinkDeploy(projeto.linkDeploy || '');
            setLinkRepositorio(projeto.linkRepositorio || '');
            setDescricaoCurta(projeto.descricaoCurta || '');
            setDescricaoLonga(projeto.descricaoLonga || '');
            setDescricaoBackEnd(projeto.descricaoBackEnd || '');
            setDescricaoFrontEnd(projeto.descricaoFrontEnd || '');

            if (projeto.stacks && typeof projeto.stacks === 'string') {
                try {
                    const array = JSON.parse(projeto.stacks);
                    setStacks(Array.isArray(array) ? array : []);
                } catch (error) {
                    console.error('Erro ao fazer o parse de projeto.stacks:', error);
                    setStacks([]);
                }
            } else {
                setStacks([]);
            }

            setLoading(false);

        }

        if (loading) {
            carregarProjeto();
        }

    }, [projeto]);

    const aoEditarProjeto = async (e: React.FormEvent<HTMLFormElement>) => {
        
        e.preventDefault();
        setDisplay('flex');
        
        const formData = new FormData();

        formData.append('nome', nomeProjeto);
        formData.append('ordem', ordem);

        if (imagemCapa) {
            formData.append('imagem_capa', imagemCapa);
        }

        if (imagemDemonstracao) {
            formData.append('imagemDemonstracao', imagemDemonstracao);
        }

        formData.append('linkVideoDemonstracao', linkVideo);
        formData.append('linkDeploy', linkDeploy);
        formData.append('linkRepositorio', linkRepositorio);
        formData.append('descricaoCurta', descricaoCurta);
        formData.append('descricaoLonga', descricaoLonga);
        formData.append('descricaoBackEnd', descricaoBackEnd);
        formData.append('descricaoFrontEnd', descricaoFrontEnd);

        formData.append('stacks', JSON.stringify(stacks));
        
        try {
            await patchProjeto(formData, projeto!.id);
            alert('Projeto atualizado com sucesso!');
            navigate('/admin/projetos')
        
        } catch (error) {
            console.log(error);
        } finally {
            setDisplay('none');
        }
    };

    const aoAdicionarStack = () => {
        if (stack) {
            setStacks((prevStacks) => Array.isArray(prevStacks) ? [...prevStacks, stack] : [stack]);
            setStack('');
        }
    };

    const aoDeletarStack = (index: number) => {
        setStacks(stacks.filter((_, i) => i !== index))
    }

    const aoDeletarProjeto = async () => {
        const confirmacao = confirm('ATENÇÃO! ESSA AÇÃO SERÁ IRREVERSIVEL. Tem certeza que deseja deletar este projeto?');

        if(!confirmacao) {
            return;
        }
        try {
            await deleteProjeto(projeto!.id);
            alert('Projeto deletado com sucesso!');
            navigate('/admin/projetos')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <FormNovoProjeto onSubmit={(e: React.FormEvent<HTMLFormElement>) => aoEditarProjeto(e)}>
            <CampoTextoAdmin value={nomeProjeto} onChange={(e) => setNomeProjeto(e.target.value)}>Nome do Projeto</CampoTextoAdmin>
            <CampoTextoAdmin value={ordem} onChange={(e) => setOrdem(e.target.value)}>Ordem</CampoTextoAdmin>
            <CampoTextoAdmin onChange={(e) => setImagemCapa(e.target.files ? e.target.files[0] : null)} tipo="file" accept="/image">Imagem de Capa</CampoTextoAdmin>
            <CampoTextoAdmin onChange={(e) => setImagemDemonstracao(e.target.files ? e.target.files[0] : null)} tipo="file" accept="/image">Imagem de Demonstração</CampoTextoAdmin>
            <CampoTextoAdmin value={linkVideo} onChange={(e) => setLinkVideo(e.target.value)}>Link para o Video de Demonstração</CampoTextoAdmin>
            <CampoTextoAdmin value={linkDeploy} onChange={(e) => setLinkDeploy(e.target.value)}>Link para o Deploy</CampoTextoAdmin>
            <CampoTextoAdmin value={linkRepositorio} onChange={(e) => setLinkRepositorio(e.target.value)}>Link para o Repositório</CampoTextoAdmin>
            <TextAreaAdmin value={descricaoCurta} onChange={(e) => setDescricaoCurta(e.target.value)}>Descrição Curta</TextAreaAdmin>
            <TextAreaAdmin value={descricaoLonga} onChange={(e) => setDescricaoLonga(e.target.value)}>Descrição Longa</TextAreaAdmin>
            <TextAreaAdmin value={descricaoBackEnd} onChange={(e) => setDescricaoBackEnd(e.target.value)}>Descrição Back-End</TextAreaAdmin>
            <TextAreaAdmin value={descricaoFrontEnd} onChange={(e) => setDescricaoFrontEnd(e.target.value)}>Descrição Front-End</TextAreaAdmin>
            <ContainerStacks>
                <LabelStack>Stacks</LabelStack>
                <InputStack value={stack} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setStack(e.target.value)} />
                <ImgStack src={iconeAdicao} alt="Adicionar Stack" onClick={() => aoAdicionarStack()} />
            </ContainerStacks>
            <ListaStacks>
                {Array.isArray(stacks) && stacks.length > 0 && stacks.map((stack, index) => (
                    <ItemStack key={index}>
                        {stack}
                        <span onClick={() => aoDeletarStack(index)}>X</span>
                    </ItemStack>
                ))}
            </ListaStacks>
            <ContainerBotoes>
                <BotaoAdmin corFonte={'var(--cor-fonte-primaria)'} cor={'var(--cor-primaria)'} tipo={'submit'}>SALVAR</BotaoAdmin>
                <BotaoAdmin corFonte={'var(--cor-fonte-secundaria)'} cor={'var(--cor-secundaria)'} tipo={'button'} onClick={() => aoDeletarProjeto()}>DELETAR</BotaoAdmin>
                <AEstilizado href="/admin/projetos" >
                    <BotaoAdmin corFonte={'var(--cor-fonte-secundaria)'} cor={'var(--cor-terciaria)'} tipo={'button'} >CANCELAR</BotaoAdmin>
                </AEstilizado>
            </ContainerBotoes>           
        </FormNovoProjeto>
    )
}

export default EditarProjeto;