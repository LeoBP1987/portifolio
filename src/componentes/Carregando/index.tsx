import styled, { keyframes } from "styled-components"
import { useCarregando } from "../../context/CarregandoContext"
import { useEffect, useState } from "react"

const ContainerCarregando = styled.div<{ $display: string }>`
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 13, 38, 0.5);
    display: ${props => props.$display};
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const progress = keyframes`
    0% { width: 0%; }
    100% { width: 100%; }
`

const BarraProgresso = styled.div`
    height: 4px;
    background-color: #fff;
    animation: ${progress} 2s linear infinite;
    width: 0%;
`

const TextoCarregando = styled.div`
    color: white;
    font-size: 1.2rem;
    text-align: center;
`

const Carregando = () => {

    const { display } = useCarregando();
    const [textoAtual, setTextoAtual] = useState(0);
    const textos = ["Aguarde um instante...", "Estamos preparando tudo para você..."];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextoAtual((prev) => (prev + 1) % textos.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <ContainerCarregando $display={display}>
            <TextoCarregando>{textos[textoAtual]}</TextoCarregando>
            <BarraProgresso />
        </ContainerCarregando>
    )
}

export default Carregando