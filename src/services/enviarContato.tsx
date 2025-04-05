export const envioEmail = async (nome: string, email: string, mensagem: string) => {
    if (!nome || !email || !mensagem) {
        throw new Error('Todos os campos são obrigatórios');
    }

    const response = await fetch('https://api-portifolio-f4f0784e5e08.herokuapp.com/enviar-contato/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email, mensagem }),
    });
    
    const data = await response.json();
    
    if (!response.ok) {
        throw new Error(data.erro || 'Erro ao enviar mensagem');
    }
}