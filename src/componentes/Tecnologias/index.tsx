import styled, { keyframes } from "styled-components";
import Keyframes from "styled-components/dist/models/Keyframes";
import { useGetTecnologias } from "../../hooks/useGetTecnologias";
import { ITecnologia } from "../../compartilhado/interface/ITecnologia";
import { useEffect, useState } from "react";

const scroll: Keyframes = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const BackgroundTecnologias = styled.div` 
    background: var(--cor-terciaria);
    z-index: 1;
    width: 100%;
    height: 200px;
    text-align: center;
`;

const ContainerTecnologias = styled.div`
  position: absolute;
  background: var(--cor-detalhe-secundaria);
  left: 375px;
  top: 700px;
  z-index: 2;
  width: 580px;
  height: 85px;
  text-align: center;
  align-self: center;
  align-items: center;
  justify-items: center;
  padding: 25px;
  overflow: hidden;
  box-shadow: 1px 1px 5px var(--cor-detalhe-secundaria);
`;

const ListaTecnologias = styled.div`
  display: flex;
  width: 200%;
  animation: ${scroll} 18s linear infinite;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ItemTecnologia = styled.div<{ $tamanho: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% / ${props => props.$tamanho});
`;

const ImgBadgeEstilizado = styled.img`
  margin: 10px 20px 0 0;
  width: 60px;
  height: 60px;
  cursor: pointer;
`;

const Tecnologias = () => {

  const { tecnologias }: { tecnologias: ITecnologia[] } = useGetTecnologias();
  const [listaDuplicada, setListaDuplicada] = useState<ITecnologia[]>([]);

  useEffect(() => {
    if (tecnologias.length > 0) {
      setListaDuplicada([...tecnologias, ...tecnologias]);
    }
  }, [tecnologias]);
  
  

  return (
    <BackgroundTecnologias>
      <ContainerTecnologias>
        <ListaTecnologias>
          {listaDuplicada.map((tecnologia, index) => (
            <ItemTecnologia $tamanho={tecnologias.length} key={index}>
              <ImgBadgeEstilizado src={tecnologia.iconeOriginal} alt={tecnologia.nome} title={tecnologia.nome} />
            </ItemTecnologia>
          ))}
        </ListaTecnologias>
      </ContainerTecnologias>
    </BackgroundTecnologias>
  );
};

export default Tecnologias;