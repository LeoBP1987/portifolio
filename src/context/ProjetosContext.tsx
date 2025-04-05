import { createContext, ReactNode, useContext, useMemo, useState} from 'react';
import { IProjeto } from '../compartilhado/interface/IProjeto';




interface ProjetosContextType {
    projetos: IProjeto[] | [];
    setProjetos: React.Dispatch<React.SetStateAction<IProjeto[] | []>>;
    projeto: IProjeto | null;
    setProjeto: React.Dispatch<React.SetStateAction<IProjeto | null>>;
    loading: boolean;
    setLoading: (loading: boolean) => void;
}

export const ProjetosContext = createContext<ProjetosContextType | undefined>(undefined);

interface ProjetosProviderProps {
    children: ReactNode;
}

export const ProjetosProvider = ({ children }: ProjetosProviderProps) => {
    const [projetos, setProjetos] = useState<IProjeto[] | []>([]);
    const [loading, setLoading] = useState(false);
    const [projeto, setProjeto] = useState<IProjeto | null>(null);

    const contextValue = useMemo(() => ({
        projetos,
        setProjetos,
        projeto,
        setProjeto,
        loading,
        setLoading,
    }), [projetos, loading]);

    return (
        <ProjetosContext.Provider value={contextValue}>
            {children}
        </ProjetosContext.Provider>
    );
};

export const useProjetos = () => {
    const context = useContext(ProjetosContext);
    if (!context) {
        throw new Error('useProjetos deve ser usado dentro de um ProjetosProvider');
    }
    return context;
};