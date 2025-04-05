import styled from "styled-components";
import { useGetUsuario } from "../../hooks/useGetUsuario";
import CampoTextoAdmin from "../../componentes/CampoTextoAdmin";
import TextAreaAdmin from "../../componentes/TextAreaAdmin";
import BotaoAdmin from "../../componentes/BotaoAdmin";
import icone_adicao_laranja from "./adicao.svg"
import icone_menos from "./menos.svg"
import icone_adicao_azul from "./adicionar_paragrafo.svg"
import { useEffect, useState } from "react";
import { atualizarUsuario } from "../../services/usuarioServices";
import { useNavigate } from "react-router";
import { useCarregando } from "../../context/CarregandoContext";

const FormEstilizado = styled.form`
    padding: 0;
    margin: 80px 160px 80px 200px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    gap: 200px;    
`

const ContainerCamposTexto = styled.div`
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

const ContainerBotoes = styled.div`
    margin: 40px 0 0 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const AEstilizado = styled.a`
    margin: 0;
    padding: 0;
    text-decoration: none;
`

const ContainerSobreMim = styled.div`
    width: 100%;
    display: flex;
    align-items: first baseline;
    gap: 20px;
`

const LabelEstilizado = styled.p`
    margin: 0;
    padding: 0;
    color: var(--cor-fonte-secundaria);
    font-size: 1.2rem;
    font-weight: 700;
`

const ImgAdicaoEstilizado = styled.img<{ $display?: string }>`
    display: ${props => props.$display ? props.$display : 'block'};
    margin: 5px 0 0 0;
    padding: 0;
    width: 20px;
    height: 20px;
    cursor: pointer;
`
const AdicionarTextAreaEstilizado = styled.textarea<{ $display: 'none' | 'block' }>`
    display: ${props => props.$display};
    margin: 0;
    padding: 20px 25px;
    width: 100%;
    height: 180px;
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


const EditarPessoal = () => {

    const { usuario, loading } = useGetUsuario();
    const { setDisplay } = useCarregando();
    const [addParagrafo, setAddParagrafo] = useState<'none' | 'block'>('none');
    const [nomeCompleto, setNomeCompleto] = useState<string>('');
    const [login, setLogin] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');
    const [sobreMim, setSobreMim] = useState<Array<string>>([]);
    const [novoParagrafo, setNovoParagrafo] = useState<string>('');
    const [fotoPerfil, setFotoPerfil] = useState<File>();

    const navigate = useNavigate();

    useEffect(() => {
            if (loading) {
                setDisplay('flex');
            } else {
                setDisplay('none');
            }
        }, [loading]);

    useEffect(() => {
        if (usuario) {
            setNomeCompleto(usuario.nome_completo || '');
            setLogin(usuario.username || '');
            setEmail(usuario.email || '');
            setDescricao(usuario.descricao || '');

            const string = usuario.sobreMim[0];
            const sobreMimArray = JSON.parse(string);

            setSobreMim(sobreMimArray || []);

        }
    }, [usuario]);

    const aoChamarAddParagrafo = (display: 'none' | 'block') => {
        setAddParagrafo(display);
    };

    const aoAdicionarParagrafo = (paragrafo: string) => {

        setSobreMim([...sobreMim, paragrafo]);
        setNovoParagrafo('');
        aoChamarAddParagrafo('none');       

    };

    const lerConteudoDoArquivo = (arquivo: File) => {
        return new Promise((resolve, reject) => {
          const leitor = new FileReader();
      
          leitor.onload = () => {
            resolve({ url: leitor.result, nome: arquivo.name });
          };
      
          leitor.onerror = () => {
            reject(`Erro ao ler o arquivo ${arquivo.name}`);
          };
      
          leitor.readAsDataURL(arquivo);
        });
    };

    const aoCarregarFoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const arquivo = e.target.files?.[0];
        setDisplay('flex');

        if (!arquivo) return;
        
        setFotoPerfil(arquivo);
        const imgPreview = document.getElementById('imgPreview') as HTMLImageElement;

        try {
            const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo) as { url: string | ArrayBuffer | null, nome: string };
            if (conteudoDoArquivo.url && typeof conteudoDoArquivo.url === 'string') {
                imgPreview.src = conteudoDoArquivo.url;
            }
        } catch (erro) {
            console.error("Erro na leitura do arquivo!", erro);
        } finally {
            setDisplay('none');
        }
    };

    const aoAtualizarUsuario = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        setDisplay('flex');

        const formData = new FormData();

        formData.append('nome_completo', nomeCompleto);
        formData.append('username', login);
        formData.append('email', email);
        formData.append('descricao', descricao);

        formData.append(`sobreMim`, JSON.stringify(sobreMim));

        if (fotoPerfil) {
            formData.append('foto_perfil', fotoPerfil);
        }

        try {
            await atualizarUsuario(formData);
            alert('Usuário atualizado com sucesso!');
            navigate('/admin/');

        } catch (error) {
            console.log(error);
        } finally {
            setDisplay('none');
        }
    };

    return (
        <FormEstilizado onSubmit={(e) => aoAtualizarUsuario(e)}>
            <ContainerCamposTexto>
                <CampoTextoAdmin readOnly={false} value={nomeCompleto} onChange={(e) => setNomeCompleto(e.target.value)} >Nome Completo</CampoTextoAdmin>
                <CampoTextoAdmin readOnly={false} value={login} onChange={(e) => setLogin(e.target.value)} >Login</CampoTextoAdmin>
                <CampoTextoAdmin readOnly={false} tipo="email" value={email} onChange={(e) => setEmail(e.target.value)} >Email</CampoTextoAdmin>
                <CampoTextoAdmin readOnly={false} tipo="file" accept="image/" onChange={(e) => aoCarregarFoto(e)} >Foto Perfil</CampoTextoAdmin>
                <TextAreaAdmin value={descricao} onChange={(e) => setDescricao(e.target.value)} >Descrição</TextAreaAdmin>
                <ContainerSobreMim>
                    <LabelEstilizado>Sobre Mim</LabelEstilizado>
                    <ImgAdicaoEstilizado onClick={() => aoChamarAddParagrafo('block')} src={icone_adicao_laranja} alt="Adicionar Parágrafo" />
                    <ImgAdicaoEstilizado $display={addParagrafo} onClick={() => aoChamarAddParagrafo('none')} src={icone_menos} alt="Adicionar Parágrafo" />
                    <ImgAdicaoEstilizado $display={addParagrafo} onClick={() => aoAdicionarParagrafo(novoParagrafo)} src={icone_adicao_azul} alt="Adicionar Parágrafo" />
                </ContainerSobreMim>
                <AdicionarTextAreaEstilizado value={novoParagrafo} onChange={(e) => setNovoParagrafo(e.target.value)} $display={addParagrafo} placeholder="Adicione um novo parágrafo para o sobre mim..." />
                {sobreMim.map((paragrafo: string, index: number) => {
                    const texto = typeof paragrafo === 'string' ? paragrafo : JSON.stringify(paragrafo);
                    
                    return (
                        <TextAreaAdmin
                        key={index}
                        value={texto}
                        onChange={(e) => {
                            const novosParagrafos = [...sobreMim];
                            novosParagrafos[index] = e.target.value;
                            setSobreMim(novosParagrafos);
                        }}
                        >
                        Parágrafo {index + 1}
                        </TextAreaAdmin>
                    );
                })}
                <ContainerBotoes>
                    <BotaoAdmin corFonte={'var(--cor-fonte-primaria)'} cor={'var(--cor-primaria)'} tipo={'submit'}>SALVAR</BotaoAdmin>
                    <AEstilizado href="/admin/" >
                        <BotaoAdmin corFonte={'var(--cor-fonte-secundaria)'} cor={'var(--cor-terciaria)'} tipo={'button'} >CANCELAR</BotaoAdmin>
                    </AEstilizado>
                </ContainerBotoes>
            </ContainerCamposTexto>
            <ImgFotoEstilizado id="imgPreview" src={usuario?.foto_perfil} alt="Foto de Perfil" />
        </FormEstilizado>
    )
}

export default EditarPessoal;