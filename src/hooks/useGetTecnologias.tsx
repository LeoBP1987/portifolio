import { useEffect } from 'react';
import { useTecnologias } from '../context/TecnologiasContext';
import { getTecnologias } from '../services/tecnologiasServices';

export const useGetTecnologias = () => {
    const { tecnologias, setTecnologias, loading, setLoading } = useTecnologias();

    useEffect(() => {
        const getTecnologiasData = async () => {
            try {
                setLoading(true);
                const tecnologiaData = await getTecnologias();

                setTecnologias(tecnologiaData);
            } catch (error) {
                console.error('Erro ao buscar Usuario:', error);
            } finally {
                setLoading(false);
            }
        };

        getTecnologiasData();
        
    }, [tecnologias]);

    return { tecnologias, loading, setTecnologias };
};