




export const getProjetos = async () => {
    
    const response = await fetch('https://api-portifolio-f4f0784e5e08.herokuapp.com/projetos/', {
    });

    if (!response.ok) {
        throw new Error('Erro ao buscar projetos');
    }

    return response.json();
};

export const getProjeto = async (id: string) => {

    if (!id) {
        throw new Error('ID não informado');
    }

    const response = await fetch(`https://api-portifolio-f4f0784e5e08.herokuapp.com/projetos/${id}/`, {
    });

    if (!response.ok) {
        throw new Error('Erro ao buscar projeto');
    }

    return response.json();
};

export const postProjetos = async (formData: FormData) => {
    const token = localStorage.getItem('token_acesso');

    const response = await fetch(`https://api-portifolio-f4f0784e5e08.herokuapp.com/projetos/`, {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        body: formData,
    });

    if (!response.ok) {
        throw new Error("Erro ao criar projeto");
    }

    return 'Projeto criado com sucesso!';
};

export const patchProjeto = async (formData: FormData, id: number) => {
    const token = localStorage.getItem('token_acesso');

    const response = await fetch(`https://api-portifolio-f4f0784e5e08.herokuapp.com/projetos/${id}/`, {
        method: "PATCH",
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        body: formData,
    });

    if (!response.ok) {
        throw new Error("Erro ao atualizar projeto");
    }

    return 'Projeto atualizado com sucesso!';
};

export const deleteProjeto = async (id: number) => {
    const token = localStorage.getItem('token_acesso');

    const response = await fetch(`https://api-portifolio-f4f0784e5e08.herokuapp.com/projetos/${id}/`, {
        method: "DELETE",
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Erro ao deletar projeto");
    }

    return 'Projeto deletado com sucesso!';
};