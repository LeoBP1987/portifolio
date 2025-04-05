import { createContext, ReactNode, useContext, useMemo, useState} from 'react';
import { ITecnologia } from '../compartilhado/interface/ITecnologia';


interface TecnologiasContextType {
    tecnologias: ITecnologia[] | [];
    setTecnologias: React.Dispatch<React.SetStateAction<ITecnologia[] | []>>;
    loading: boolean;
    setLoading: (loading: boolean) => void;
}

export const TecnologiasContext = createContext<TecnologiasContextType | undefined>(undefined);

interface TecnologiasProviderProps {
    children: ReactNode;
}

export const TecnologiasProvider = ({ children }: TecnologiasProviderProps) => {
    const [tecnologias, setTecnologias] = useState<ITecnologia[] | []>([]);
    const [loading, setLoading] = useState(false);

    const contextValue = useMemo(() => ({
        tecnologias,
        setTecnologias,
        loading,
        setLoading,
    }), [tecnologias, loading]);

    return (
        <TecnologiasContext.Provider value={contextValue}>
            {children}
        </TecnologiasContext.Provider>
    );
};

export const useTecnologias = () => {
    const context = useContext(TecnologiasContext);
    if (!context) {
        throw new Error('useTecnologias deve ser usado dentro de um TecnologiasProvider');
    }
    return context;
};