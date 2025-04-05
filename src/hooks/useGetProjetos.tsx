import { useEffect } from 'react';
import { useProjetos } from '../context/ProjetosContext';
import { getProjetos } from '../services/projetosServices';

export const useGetProjetos = () => {
    const { projetos, setProjetos, loading, setLoading } = useProjetos();

    useEffect(() => {
        const getProjetosData = async () => {
            try {
                setLoading(true);
                const projetosData = await getProjetos();

                setProjetos(projetosData);
            } catch (error) {
                console.error('Erro ao buscar Projeto:', error);
            } finally {
                setLoading(false);
            }
        };

        if (projetos.length === 0) {
            getProjetosData();
        }
    }, [projetos]);

    return { projetos, loading, setProjetos };
};