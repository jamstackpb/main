import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
const textOpacity = keyframes`
  from {
    opacity: 0;  }

  to {
    opacity: 1;
  }
`;
const Description = styled.div<{ clicked?: boolean }>`
    text-align: left;
    margin-left: 10%;
    width: 35vh;
    min-height: 15vh;
    font-size: 18px;
    opacity: 0;
    ${({ clicked }) =>
        clicked
            ? css`
                  animation: ${textOpacity} 0.5s 1.5s forwards;
              `
            : undefined}
`;

export const MemberDescription: React.FC<{ clicked: boolean }> = ({ clicked }) => {
    const [hidden, setHidden] = useState<boolean>(true);
    useEffect(() => {
        if (clicked) {
            const timer = setTimeout(() => {
                setHidden(false);
                console.log(`dziala`);
            }, 3000);
            return () => clearTimeout(timer);
        }
        if (!clicked) {
            setHidden(true);
        }
    }, [clicked]);
    return hidden ? null : (
        <Description clicked={!hidden}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odio sed maiores dolore voluptatem amet quaerat
            vel pariatur tempora aliquid nihil, sapiente dolor labore quod nostrum eligendi nam ipsum modi aliquam
            quisquam minima corporis. Beatae maiores aut aliquam laborum? Natus ducimus tempore accusamus nemo voluptate
            earum omnis reiciendis id ad!
        </Description>
    );
};
