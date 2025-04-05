




export const getTecnologias = async () => {
    
    const response = await fetch('https://api-portifolio-f4f0784e5e08.herokuapp.com/tecnologias/', {
    });

    if (!response.ok) {
        throw new Error('Erro ao buscar leitor');
    }

    return response.json();
};

export const postTecnologias = async (formData: FormData) => {
    const token = localStorage.getItem('token_acesso');

    const response = await fetch(`https://api-portifolio-f4f0784e5e08.herokuapp.com/tecnologias/`, {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        body: formData,
    });

    if (!response.ok) {
        throw new Error("Erro ao criar tecnologia");
    }

    return 'Tecnologia criada com sucesso!';
};

export const deleteTecnologias = async (id: number) => {
    const token = localStorage.getItem('token_acesso');

    const response = await fetch(`https://api-portifolio-f4f0784e5e08.herokuapp.com/tecnologias/${id}/`, {
        method: "DELETE",
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Erro ao deletar tecnologia");
    }

    return 'Tecnologia deletada com sucesso!';
};