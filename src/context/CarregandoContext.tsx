import { createContext, ReactNode, useContext, useState} from 'react';


interface CarregandoContextType {
    display: 'none' | 'flex';
    setDisplay: React.Dispatch<React.SetStateAction<'none' | 'flex'>>;
}

export const CarregandoContext = createContext<CarregandoContextType | undefined>(undefined);

interface CarregandoProviderProps {
    children: ReactNode;
}

export const CarregandoProvider = ({ children }: CarregandoProviderProps) => {
    const [display, setDisplay] = useState<'none' | 'flex'>('none');

    return (
        <CarregandoContext.Provider 
            value={{ 
                display,
                setDisplay
        }}>
            {children}
        </CarregandoContext.Provider>
    );
};

export const useCarregando = () => {
    const context = useContext(CarregandoContext);
    if (!context) {
        throw new Error('useCarregando deve ser usado dentro de um CarregandoProvider');
    }
    return context;
};