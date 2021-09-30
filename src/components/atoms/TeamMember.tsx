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
    margin: 3vh 0;
    flex-shrink: 1;
    ${({ side, whichMargin }) => {
        switch (side) {
            case 'right':
                switch (whichMargin) {
                    case 1:
                        return css`
                            align-items: flex-end;
                            align-self: flex-start;
                            margin-left: 20px;
                        `;

                    case 2:
                        return css`
                            align-items: flex-end;
                            margin-left: 20px;
                            margin-right: 10vw;
                        `;

                    case 3:
                        return css`
                            align-items: flex-end;
                            margin-left: 20px;
                            margin-right: 30vw;
                        `;

                    case 4:
                        return css`
                            align-items: flex-end;
                            margin-left: 20px;
                            margin-right: 40vw;
                        `;

                    case 5:
                        return css`
                            align-items: flex-end;
                            margin-left: 20px;
                            margin-right: 50vw;
                        `;

                    case 6:
                        return css`
                            align-items: flex-end;
                            align-self: flex-end;
                        `;
                    default:
                        return css`
                            align-items: flex-end;
                            align-self: flex-end;
                        `;
                }

            case 'left':
                switch (whichMargin) {
                    case 1:
                        return css`
                            align-self: flex-start;
                            margin-right: 20px;
                        `;

                    case 2:
                        return css`
                            margin-left: 10vw;
                            margin-right: 20px;
                        `;

                    case 3:
                        return css`
                            margin-left: 20vw;
                            margin-right: 20px;
                        `;

                    case 4:
                        return css`
                            margin-left: 30vw;
                            margin-right: 20px;
                        `;

                    case 5:
                        return css`
                            margin-left: 40vw;
                            margin-right: 20px;
                        `;

                    case 6:
                        return css`
                            align-self: flex-end;
                        `;
                    default:
                        return;
                }
            default:
                return;
        }
    }}
    @media (max-width: 1063px) {
        margin: 3vh;
    }
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
    background-color: ${({ theme }) => theme.colorsPalette.commonWhite};
    border: 1vh solid ${({ theme }) => theme.colorsPalette.primaryBackgroundColor};
    cursor: pointer;
    box-shadow: 0 0 3px 1px black;
    @media (max-width: 769px) {
        height: 12vh;
        width: 12vh;
    }
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
        border-left: 2vh solid ${({ theme }) => theme.colorsPalette.primaryBackgroundColor};
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
        @media (max-width: 769px) {
            transform-origin: -5.4vh 1.6vh;
            top: 3.5vh;
            ${({ side }) =>
                (side === 'left' &&
                    css`
                        left: 10.6vh;
                    `) ||
                (side === 'right' &&
                    css`
                        left: 10.25vh;
                    `)};

            border-top: 1.5vh solid transparent;
            border-bottom: 1.5vh solid transparent;
            border-left: 1.5vh solid ${({ theme }) => theme.colorsPalette.primaryBackgroundColor};
        }
    }
`;
const InnerContent = styled.div<{ clicked: boolean; side?: 'left' | 'right' }>`
    z-index: 1;
    box-shadow: 0px 0px 3px 0px ${({ theme }) => theme.colorsPalette.primaryBackgroundColor};
    box-shadow: inset 0px 0px 10px 5px ${({ theme }) => theme.colorsPalette.primaryBackgroundColor};
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
    @media (max-width: 769px) {
        ${({ side }) =>
            (side === 'right' &&
                css`
                    margin-right: 6.2vh;
                `) ||
            css`
                margin-left: 9.5vh;
            `}
        ${({ clicked }) =>
            clicked
                ? css`
                      padding: 1vh;
                      width: 40vh;
                      min-height: 21vh;

                      transition: min-height 0.5s 0.5s, width 0.5s, padding 0.5s 0.5s;
                  `
                : css`
                      transition: min-height 0.5s, width 0.5s 0.5s;
                  `};
    }
`;

const MemberImg = styled.img`
    width: 19vh;
    height: 19vh;
    border-radius: 50%;
    @media (max-width: 769px) {
        height: 11vh;
        width: 11vh;
    }
`;

const MemberName = styled.div<{ clicked: boolean; side?: 'left' | 'right' }>`
    color: ${({ theme }) => theme.colorsPalette.primaryBackgroundColor};
    font-weight: 700;
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
    @media (max-width: 769px) {
        font-size: 20px;

        ${({ side }) =>
            (side === 'right' &&
                css`
                    padding-right: 12vh;
                    text-align: center;
                    padding-bottom: 0.2vh;
                `) ||
            css`
                padding-left: 19vh;
                text-align: left;
                padding-bottom: 0.1vh;
            `}
    }
`;
const MemberRank = styled.div<{ clicked: boolean; side?: 'left' | 'right' }>`
    font-size: 25px;
    opacity: 0;
    padding-bottom: 1vh;
    color: ${({ theme }) => theme.colorsPalette.primaryFontColor};
    font-weight: 600;
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
@media (max-width: 769px) {
        font-size: 22px;
        ${({ side }) =>
            (side === 'right' &&
                css`
                    padding-right: 15%;
                `) ||
            css`
                padding-left: 15%;
            `}
    }
`;
const MemberDescription = styled.div<{ clicked: boolean; side?: 'left' | 'right' }>`
    max-width: 45vh;
    min-height: 15vh;
    opacity: 0;
    font-size: 20px;
    font-weight: 500;
    color: ${({ theme }) => theme.colorsPalette.primaryBackgroundColor};
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
            @media (max-width: 769px) {
        font-size: 16px;

        ${({ side }) =>
            (side === 'right' &&
                css`
                    margin-right: 20%;
                `) ||
            css`
                margin-left: 20%;
            `}
    }
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
                <MemberImg src={addImagePrefix(memberImg)} alt="Member Image" />
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
