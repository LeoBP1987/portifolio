import { createContext, ReactNode, useContext, useState} from 'react';


interface FormLoginContextType {
    display: 'none' | 'flex';
    setDisplay: React.Dispatch<React.SetStateAction<'none' | 'flex'>>;
}

export const FormLoginContext = createContext<FormLoginContextType | undefined>(undefined);

interface FormLoginProviderProps {
    children: ReactNode;
}

export const FormLoginProvider = ({ children }: FormLoginProviderProps) => {
    const [display, setDisplay] = useState<'none' | 'flex'>('none');

    return (
        <FormLoginContext.Provider 
            value={{ 
                display,
                setDisplay
        }}>
            {children}
        </FormLoginContext.Provider>
    );
};

export const useFormLogin = () => {
    const context = useContext(FormLoginContext);
    if (!context) {
        throw new Error('useFormLogin deve ser usado dentro de um FormLoginProvider');
    }
    return context;
};