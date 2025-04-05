




export interface IProjeto {
    id: number;
    nome: string;
    ordem: string;
    imagem_capa: string;
    descricaoCurta: string;
    descricaoLonga: string;
    descricaoBackEnd: string;
    descricaoFrontEnd: string;
    linkVideoDemonstracao?: string;
    imagemDemonstracao: string;
    stacks: string;
    linkDeploy?: string;
    linkRepositorio?: string;
}