import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';


const Container = styled.div`
  display: flex;
  align-items: flex-start;
  font-size: 2.5rem;
  font-weight: 900;
  font-family: Arial, Helvetica, sans-serif;
  @media screen and (max-width: 800px) {
    font-size: 2rem;
  }
`;

const Text = styled.span`
  margin-right: 0.5rem;
  color: var(--cor-secundaria);
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const Curso = styled.span<{$isBlinking: boolean}>`
  animation: ${({ $isBlinking }) => ($isBlinking ? blink : 'none')} 0.5s linear;
  color:  var(--cor-secundaria);;
`;


const AnimacaoDigitacao = () => {
  const [text, setText] = useState('');
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const fullStack = 'FullStack';
    const backEnd = 'Back-End';
    const frontEnd = 'Front-End';

    let step = 0;

    const animate = () => {
      switch (step) {
        case 0:
          typeText(fullStack, () => {
            blinkCurso(3, () => {
              step = 1;
              animate();
            });
          });
          break;
        case 1:
          deleteText(fullStack.length, () => {
            typeText(backEnd, () => {
              blinkCurso(3, () => {
                step = 2;
                animate();
              });
            });
          });
          break;
        case 2:
          deleteText(backEnd.length, () => {
            typeText(frontEnd, () => {
              blinkCurso(3, () => {
                step = 0;
                animate();
              });
            });
          });
          break;
        default:
          break;
      }
    };

    const timeoutId = setTimeout(animate, 0);

    return () => clearTimeout(timeoutId);
  }, []);

  const typeText = (word: string, callback: () => void) => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < word.length) {
        setText(word.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        callback();
      }
    }, 50); // Ajuste a velocidade da digitação aqui
  };

  const deleteText = (length: number, callback: () => void) => {
    let i = length;
    const deletingInterval = setInterval(() => {
      if (i >= 0) {
        setText((prev) => prev.substring(0, i));
        i--;
      } else {
        clearInterval(deletingInterval);
        callback();
      }
    }, 25); // Ajuste a velocidade da deleção aqui
  };

  const blinkCurso = (times: number, callback: () => void) => {
    let count = 0;
    const blinkInterval = setInterval(() => {
      setIsBlinking((prev) => !prev);
      count++;
      if (count >= times * 2) {
        clearInterval(blinkInterval);
        setIsBlinking(false);
        callback();
      }
    }, 250); // Ajuste a velocidade do piscar aqui
  };

  return (
    <Container>
      <Text>{text}</Text>
      <Curso $isBlinking={isBlinking}>|</Curso>
    </Container>
  );
};

export default AnimacaoDigitacao;