import styled from "styled-components"




const ContainerRodapeEstilizado = styled.div`
    background: #000D26;
    width: 100%;
    height: 20px;
    padding: 20px 0 20px 0;
    margin: 0;
    text-align: center;
`

const ParagrafoEstilizado = styled.p`
    margin: 0;
    padding: 0;
    color: #D35400;
    font-size: 1rem;
    font-weight: 700;
    align-self: center;
    justify-self: center;
    @media screen and (max-width: 800px) {
        font-size: 0.8rem;
    }

`


const Rodape = () => {
    return (
        <ContainerRodapeEstilizado>
            <ParagrafoEstilizado>Desenvolvido por Leonardo Pereira</ParagrafoEstilizado>
        </ContainerRodapeEstilizado>
    )
}

export default Rodape