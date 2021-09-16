import { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { addImagePrefix } from '@/src/utils';
import { CopyRights } from '../molecules/CopyRights';

interface ProjectsSectionSliderProps {
    projects: Array<{ subTitle: string; h1: string; h2: string; imageUrl: string; description: string }>;
}

const Titles = styled.div<{ whichTitle?: string }>`
    color: ${({ theme }) => theme.colorsPalette.quaternaryFontColor};
    font-weight: 900;
    ${({ whichTitle }) =>
        whichTitle === 'subTitle'
            ? css`
                  font-size: 2rem;
                  text-transform: uppercase;
                  font-weight: 700;
                  align-self: flex-start;
                  margin-top: auto;
              `
            : whichTitle === 'h1'
            ? css`
                  font-size: 4rem;
                  align-self: flex-start;
              `
            : whichTitle === 'h2'
            ? css`
                  font-size: 1.5rem;
              `
            : undefined};
`;
const ProjectsSection = styled.section`
    width: 100%;
    display: flex;
    position: absolute;
    top: calc(10vh + 15rem);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    background-color: ${({ theme }) => theme.colorsPalette.secondaryBackgroundColor};
`;
const SectionHeader = styled.div`
    margin: 5vh 10vh;
    display: flex;
    padding: 0 20% 5% 25%;
    width: 100%;
`;
const TitleContainer = styled.div`
    width: 50%;
    height: 15vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 30px;
`;
const ButtonsContainer = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`;
const Btn = styled.div`
    transition: 0.5s;
    width: 6vh;
    height: 6vh;
    border: ${({ theme }) => theme.border.button};
    position: relative;
    margin-right: 1vh;
    display: flex;
    text-transform: uppercase;
    cursor: pointer;
    transform-origin: right center;

    &:hover {
        border-color: ${({ theme }) => theme.colorsPalette.primaryBackgroundColor};
    }
`;

const SectionImgContainer = styled.img`
    height: 45vh;
    width: 80%;
    object-fit: cover;
    margin: 5vh 10vh;
`;
const SectionDescriptionContainer = styled.div`
    padding-top: 5vh;
    display: flex;
    flex-direction: column;
    padding-left: 25%;
    margin: 5vh 10vh;
`;
const Description = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.colorsPalette.primaryFontColor};
`;
const Arrows = styled.div<{ whichArrow?: string }>`
    &.arrow {
        cursor: pointer;
        height: 100%;
        width: 100%;
        left: 70%;
        position: absolute;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        transition: transform 0.1s;
    }
    & .arrow-top,
    .arrow-bottom {
        background-color: ${({ theme }) => theme.colorsPalette.octonaryBackgroundColor};
        height: 4px;
        position: absolute;
        top: 50%;
        width: 65%;
    }
    & .arrow-top:after,
    & .arrow-bottom:after {
        background-color: ${({ theme }) => theme.colorsPalette.primaryBackgroundColor};
        content: '';
        height: 100%;
        position: absolute;
        top: 0;
        transition: all 0.15s;
    }
    & .arrow-top.left {
        transform-origin: left;

        transform: rotate(45deg);

        top: 43%;
    }
    & .arrow-top.right {
        transform-origin: right;

        transform: rotate(45deg);

        top: 49%;
    }
    & .arrow-top:after {
        left: 100%;
        right: 0;
        transition-delay: 0.15s;
    }
    & .arrow-bottom.left {
        transform-origin: left;
        transform: rotate(-45deg);
        top: 51%;
    }
    & .arrow-bottom.right {
        transform-origin: right;
        transform: rotate(-45deg);
        top: 45%;
    }

    & .arrow-bottom:after {
        left: 0;
        right: 100%;
        transition-delay: 0s;
    }
    &.arrow:hover .arrow-top.right:after {
        left: 0;
        transition-delay: 0.15s;
    }
    &.arrow:hover .arrow-top.left:after {
        left: 0;
        transition-delay: 0s;
    }
    &.arrow:hover .arrow-bottom.right:after {
        right: 0;
        transition-delay: 0s;
    }
    &.arrow:hover .arrow-bottom.left:after {
        right: 0;
        transition-delay: 0.15s;
    }

    &.arrow.right:active {
        transform: translateX(-40%) translateY(-50%);
    }
    &.arrow.left:active {
        transform: translateX(-60%) translateY(-50%);
    }
`;
const ProjectsSectionSlider: React.FC<ProjectsSectionSliderProps> = ({ projects }) => {
    const [current, setCurrent] = useState(0);
    const nextSlide = () => {
        if (current == projects.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };
    const prevSlide = () => {
        if (current == 0) setCurrent(projects.length - 1);
        else setCurrent(current - 1);
    };
    return (
        <ProjectsSection>
            <SectionHeader>
                <TitleContainer>
                    <Titles whichTitle="subTitle">{projects[current].subTitle}</Titles>
                    <Titles whichTitle="h1">{projects[current].h1}</Titles>
                </TitleContainer>
                <ButtonsContainer>
                    <Btn>
                        <Arrows className="arrow left" onClick={prevSlide}>
                            <div className="arrow-top left"></div>
                            <div className="arrow-bottom left"></div>
                        </Arrows>
                    </Btn>
                    <Btn>
                        <Arrows className="arrow right" onClick={nextSlide}>
                            <div className="arrow-top right"></div>
                            <div className="arrow-bottom right"></div>
                        </Arrows>
                    </Btn>
                </ButtonsContainer>
            </SectionHeader>

            <SectionImgContainer src={addImagePrefix(projects[current].imageUrl)} />
            <SectionDescriptionContainer>
                <Titles whichTitle="h2">{projects[current].h2}</Titles>
                <Description>{projects[current].description}</Description>
            </SectionDescriptionContainer>
            <CopyRights />
        </ProjectsSection>
    );
};

export default ProjectsSectionSlider;
