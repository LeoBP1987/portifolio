import { createContext, ReactNode, useContext, useMemo, useState} from 'react';
import { IUsuario } from '../compartilhado/interface/IUsuario';


interface UsuarioContextType {
    usuario: IUsuario | null;
    setUsuario: React.Dispatch<React.SetStateAction<IUsuario | null>>;
    loading: boolean;
    setLoading: (loading: boolean) => void;
}

export const UsuarioContext = createContext<UsuarioContextType | undefined>(undefined);

interface UsuarioProviderProps {
    children: ReactNode;
}

export const UsuarioProvider = ({ children }: UsuarioProviderProps) => {
    const [usuario, setUsuario] = useState<IUsuario | null>(null);
    const [loading, setLoading] = useState(false);

    const contextValue = useMemo(() => ({
        usuario,
        setUsuario,
        loading,
        setLoading,
    }), [usuario, loading]);

    return (
        <UsuarioContext.Provider value={contextValue}>
            {children}
        </UsuarioContext.Provider>
    );
};

export const useUsuario = () => {
    const context = useContext(UsuarioContext);
    if (!context) {
        throw new Error('useLeitor deve ser usado dentro de um UsuarioProvider');
    }
    return context;
};