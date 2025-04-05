import { IUsuario } from "../compartilhado/interface/IUsuario"; 

export const getUsuario = async (): Promise<IUsuario | null> => {
    
    const response = await fetch('https://api-portifolio-f4f0784e5e08.herokuapp.com/usuarios/1/', {
    });

    if (!response.ok) {
        throw new Error('Erro ao buscar leitor');
    }

    return response.json() as Promise<IUsuario>;
};

export const atualizarUsuario = async (formData: FormData) => {
    const token = localStorage.getItem('token_acesso');

    const response = await fetch(`https://api-portifolio-f4f0784e5e08.herokuapp.com/usuarios/1/`, {
        method: "PATCH",
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        body: formData,
    });

    if (!response.ok) {
        throw new Error("Erro ao atualizar usuario");
    }

    return 'Atualização do usuario realizada com sucesso!';
};