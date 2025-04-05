import { useEffect } from 'react';
import { useProjetos } from '../context/ProjetosContext';
import { getProjeto } from '../services/projetosServices';
import { useParams } from 'react-router';

export const useGetProjeto = () => {
    const { projeto, setProjeto, loading, setLoading } = useProjetos();
    const { idProjeto } = useParams();

    useEffect(() => {
        const getProjetoData = async () => {
            if (!idProjeto) return;

            try {
                setLoading(true);
                const projetoData = await getProjeto(idProjeto);

                setProjeto(projetoData);
            } catch (error) {
                console.error('Erro ao buscar Projeto:', error);
            } finally {
                setLoading(false);
            }
        };

        getProjetoData();
        
    }, [idProjeto]);

    return { projeto, loading, setProjeto };
};