import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { addImagePrefix } from '@/src/utils';

const LeftSideRotateOpen = keyframes`
0%  {
    transform: rotate(-32deg);
  }
  50%  {
    transform: rotate(-32deg);
  }
  100% {
    transform: rotate(92deg);
  }

  
`;
const LeftSideRotateClose = keyframes`
  0% {
    transform: rotate(92deg);
  }
  50%{
    transform: rotate(-32deg); 
  }

  100% {
    transform: rotate(-32deg);
  }
`;
const textOpacity = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }

`;
const RightSideRotateOpen = keyframes`
0%  {
    transform: rotate(211deg);
  }
  50%  {
    transform: rotate(211deg);
  }
  100% {
    transform: rotate(92deg);
  }

  
`;
const RightSideRotateClose = keyframes`
  0% {
    transform: rotate(92deg);
  }
  50%{
    transform: rotate(211deg); 
  }

  100% {
    transform: rotate(211sdeg);
  }
`;

const MemberContener = styled.div<{ side?: 'left' | 'right'; whichMargin?: number }>`
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 20vh;
    width: calc(50% - 20vh);
    margin: 3vh 0;
    ${({ side, whichMargin }) => {
        switch (side) {
            case 'right':
                switch (whichMargin) {
                    case 1:
                        return css`
                            align-items: flex-end;
                            margin-right: 5vh;
                        `;

                    case 2:
                        return css`
                            align-items: flex-end;
                            margin-right: 10vh;
                        `;

                    case 3:
                        return css`
                            align-items: flex-end;
                            margin-right: 20vh;
                        `;

                    case 4:
                        return css`
                            align-items: flex-end;
                            margin-right: 5vh;
                        `;

                    case 5:
                        return css`
                            align-items: flex-end;
                            margin-right: 25vh;
                        `;

                    case 6:
                        return css`
                            align-items: flex-end;
                            margin-right: 30vh;
                        `;
                    default:
                        return css`
                            align-items: flex-end;
                        `;
                }

            case 'left':
                switch (whichMargin) {
                    case 1:
                        return css`
                            margin-left: 5vh;
                        `;

                    case 2:
                        return css`
                            margin-left: 10vh;
                        `;

                    case 3:
                        return css`
                            margin-left: 20vh;
                        `;

                    case 4:
                        return css`
                            margin-left: 5vh;
                        `;

                    case 5:
                        return css`
                            margin-left: 25vh;
                        `;

                    case 6:
                        return css`
                            margin-left: 30vh;
                        `;
                    default:
                        return;
                }
            default:
                return;
        }
    }}
`;

const InnerCircle = styled.div<{ clicked: boolean; firstClicked: boolean; side?: 'left' | 'right' }>`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    z-index: 2;
    height: 20vh;
    width: 20vh;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colorsPalette.common.white};
    border: 1vh solid ${({ theme }) => theme.colorsPalette.backgroundColors.primary};
    cursor: pointer;
    box-shadow: 0 0 3px 1px black;
    ${({ side }) =>
        side === 'left'
            ? css`
                  left: 0;
              `
            : side === 'right'
            ? css`
                  right: 0;
              `
            : undefined}
    &::after {
        display: block;
        content: '';
        position: absolute;
        top: 7vh;
        left: 18.5vh;
        width: 0;
        height: 0;
        border-top: 2vh solid transparent;
        border-bottom: 2vh solid transparent;
        border-left: 2vh solid ${({ theme }) => theme.colorsPalette.backgroundColors.primary};
        transform-origin: -9.5vh 2vh;
        ${({ side }) =>
            side === 'left'
                ? css`
                      transform: rotate(-32deg);
                  `
                : side === 'right'
                ? css`
                      transform: rotate(211deg);
                  `
                : undefined};
        ${({ clicked, firstClicked, side }) =>
            firstClicked
                ? side === 'left'
                    ? clicked
                        ? css`
                              animation: ${LeftSideRotateOpen} 1s forwards;
                          `
                        : css`
                              animation: ${LeftSideRotateClose} 1s forwards;
                          `
                    : side === 'right'
                    ? clicked
                        ? css`
                              animation: ${RightSideRotateOpen} 1s forwards;
                          `
                        : css`
                              animation: ${RightSideRotateClose} 1s forwards;
                          `
                    : undefined
                : undefined}
    }
`;
const InnerContent = styled.div<{ clicked: boolean; side?: 'left' | 'right' }>`
    z-index: 1;
    box-shadow: 0px 0px 3px 0px ${({ theme }) => theme.colorsPalette.backgroundColors.primary};
    box-shadow: inset 0px 0px 10px 5px ${({ theme }) => theme.colorsPalette.backgroundColors.primary};
    transition: height 1s;
    min-height: 0.5vh;
    width: 20vh;
    ${({ side }) =>
        (side === 'right' &&
            css`
                margin-right: 10.3vh;
            `) ||
        css`
            margin-left: 9.5vh;
        `}
    ${({ clicked }) =>
        clicked
            ? css`
                  padding: 1vh;
                  width: 50vh;
                  min-height: 21vh;

                  transition: min-height 0.5s 0.5s, width 0.5s, padding 0.5s 0.5s;
              `
            : css`
                  transition: min-height 0.5s, width 0.5s 0.5s;
              `};
`;

const MemberName = styled.div<{ clicked: boolean; side?: 'left' | 'right' }>`
    color: ${({ theme }) => theme.colorsPalette.backgroundColors.primary};
    font-weight: ${({ theme }) => theme.font.fontWeight.secondary};
    padding-bottom: 0.5vh;
    font-size: 28px;
    opacity: 1;
    white-space: nowrap;
    ${({ side }) =>
        (side === 'right' &&
            css`
                padding-right: 18vh;
                text-align: center;
            `) ||
        css`
            padding-left: 19vh;
            text-align: left;
        `}
`;
const MemberRank = styled.div<{ clicked: boolean; side?: 'left' | 'right' }>`
    font-size: 25px;
    opacity: 0;
    padding-bottom: 1vh;

    font-weight: ${({ theme }) => theme.font.fontWeight.quaternary};
    ${({ side }) =>
        side === 'right'
            ? css`
                  padding-right: 25%;
                  text-align: right;
              `
            : css`
                  text-align: left;
                  padding-left: 20%;
              `}
    ${({ clicked }) =>
        clicked
            ? css`
                  animation: ${textOpacity} 0.5s 0.8s forwards;
              `
            : undefined}
`;
const MemberDescription = styled.div<{ clicked: boolean; side?: 'left' | 'right' }>`
    max-width: 45vh;
    min-height: 15vh;
    opacity: 0;
    font-size: 20px;
    font-weight: ${({ theme }) => theme.font.fontWeight.quaternary};
    color: ${({ theme }) => theme.colorsPalette.fontColors.primary};
    ${({ side }) =>
        side === 'right'
            ? css`
                  margin-right: 30%;
                  text-align: right;
              `
            : css`
                  text-align: left;
                  margin-left: 30%;
              `}
    ${({ clicked }) =>
        clicked
            ? css`
                  animation: ${textOpacity} 0.5s 1s forwards;
              `
            : undefined}
`;

interface TeamMemberProps {
    memberName: string;
    memberRank: string;
    memberDescription: string;
    memberImg: string;
    side?: 'left' | 'right';
    whichMargin?: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({
    side,
    memberName,
    memberRank,
    memberDescription,
    memberImg,
    whichMargin,
}) => {
    const [clicked, setClicked] = useState<boolean>(false);
    const [firstClicked, setFirstClicked] = useState<boolean>(false);
    const [hidden, setHidden] = useState<boolean>(true);
    useEffect(() => {
        if (clicked) {
            const timer = setTimeout(() => {
                setHidden(false);
            }, 900);
            return () => clearTimeout(timer);
        }
        if (!clicked) {
            setHidden(true);
        }
    }, [clicked]);

    const clickHandler = () => {
        setClicked(!clicked);
        setFirstClicked(true);
    };

    return (
        <MemberContener side={side} whichMargin={whichMargin}>
            <InnerCircle side={side} onClick={clickHandler} clicked={clicked} firstClicked={firstClicked}>
                <img
                    style={{ width: '18vh', height: '18vh', borderRadius: '50%' }}
                    src={addImagePrefix(memberImg)}
                    alt=""
                />
            </InnerCircle>

            <MemberName side={side} clicked={clicked}>
                {memberName}
            </MemberName>
            <InnerContent side={side} clicked={clicked}>
                {hidden ? null : (
                    <>
                        <MemberRank side={side} clicked={clicked}>
                            {memberRank}
                        </MemberRank>
                        <MemberDescription side={side} clicked={clicked}>
                            {memberDescription}
                        </MemberDescription>
                    </>
                )}
            </InnerContent>
        </MemberContener>
    );
};

export default TeamMember;
