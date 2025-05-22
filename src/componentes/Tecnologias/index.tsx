import styled, { keyframes } from "styled-components";
import Keyframes from "styled-components/dist/models/Keyframes";
import { useGetTecnologias } from "../../hooks/useGetTecnologias";
import { ITecnologia } from "../../compartilhado/interface/ITecnologia";
import { useEffect, useState } from "react";

const BADGE_WIDTH = 80; // largura fixa para cada badge (ajustado para menos espaço)

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
    @media screen and (max-width: 800px) {
      display: none;
    }
`;

const ContainerTecnologias = styled.div`
  position: absolute;
  background: var(--cor-detalhe-secundaria);
  left: 375px;
  top: 700px;
  z-index: 2;
  width: 580px;
  height: 70px;
  text-align: center;
  align-self: center;
  align-items: center;
  justify-items: center;
  padding: 25px;
  overflow: hidden;
  box-shadow: 1px 1px 5px var(--cor-detalhe-secundaria);
`;

const ListaTecnologias = styled.div<{ $total: number }>`
  display: flex;
  width: ${({ $total }) => $total * BADGE_WIDTH}px;
  animation: ${scroll} 28s linear infinite; // mais lento
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ItemTecnologia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${BADGE_WIDTH}px;
`;

const ImgBadgeEstilizado = styled.img`
  margin: 0 10px;
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
        <ListaTecnologias $total={listaDuplicada.length}>
          {listaDuplicada.map((tecnologia, index) => (
            <ItemTecnologia key={index}>
              <ImgBadgeEstilizado
                src={tecnologia.iconeOriginal}
                alt={tecnologia.nome}
                title={tecnologia.nome}
              />
            </ItemTecnologia>
          ))}
        </ListaTecnologias>
      </ContainerTecnologias>
    </BackgroundTecnologias>
  );
};

export default Tecnologias;