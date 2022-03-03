import React, { useState } from 'react';
import { MarkdownContentProject } from '../molecules/MarkdownContentProject';

const ProjectContainer: React.FC = ({ children }) => <div className="project-container mt-32">{children}</div>;
const Arrowleft: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <a
        onClick={onClick}
        className="cursor-pointer hover:opacity-60 w-8 md:w-16 h-8 md:h-16 transform rotate-180 bg-no-repeat bg-arrow md:relative absolute top-2/5 md:top-0 -left-0 md:left-0"
    />
);
const Arrowright: React.FC<{ onClick: () => void }> = ({ onClick }) => (
    <a
        onClick={onClick}
        className="cursor-pointer hover:opacity-60 w-8 md:w-16 h-8 md:h-16 bg-no-repeat bg-arrow md:relative absolute top-2/5 md:top-0 -right-0 md:right-0"
    />
);
const TitlesContainer: React.FC = ({ children }) => (
    <div className="w-10/12 md:w-3/5 flex flex-col mx-auto py-6 ">{children}</div>
);
const Titles: React.FC<{ whichTitle: 'h1' }> = ({ whichTitle, children }) => {
    if (whichTitle === 'h1')
        return <div className="text-white font-bold text-2xl sm:text-3xl mx-2 text-center">{children}</div>;
    else return null;
};

const Readmore: React.FC<{ onClick: () => void }> = ({ children, onClick }) => (
    <button
        onClick={onClick}
        className="text-base text-denaryBackgroundColor hover:underline flex flex-col text-center mx-auto"
    >
        {children}
    </button>
);
const WrapperProject: React.FC<{ classNamesrc: string }> = ({ classNamesrc, children }) => (
    <div className={`w-10/12 mx-auto ${classNamesrc}`}>{children}</div>
);

const Headbarwrapper: React.FC = ({ children }) => (
    <div className="relative w-10/12 mx-auto flex flex-wrap items-center bg-primaryBackgroundColor rounded-t-2xl">
        {children}
    </div>
);

interface ProjectsSectionSliderProps {
    projects: Array<{
        clean: string;
        changedToMatter: {
            [key: string]: any;
        };
    }>;
}

export const ProjectsSectionSlider: React.FC<ProjectsSectionSliderProps> = ({ projects }) => {
    const [current, setCurrent] = useState(0);
    const nextSlide = () => {
        if (current === projects.length - 1) {
            setCurrent(0);
        } else {
            setCurrent(current + 1);
        }
    };
    const prevSlide = () => {
        if (current === 0) {
            setCurrent(projects.length - 1);
        } else {
            setCurrent(current - 1);
        }
    };

    return (
        <ProjectContainer>
            <Headbarwrapper>
                <Arrowleft onClick={prevSlide} />
                <TitlesContainer>
                    <Titles whichTitle="h1">{projects[current].changedToMatter.h1}</Titles>
                </TitlesContainer>
                <Arrowright onClick={nextSlide} />
            </Headbarwrapper>
            <WrapperProject classNamesrc="animate-fadeinup">
                <MarkdownContentProject>
                    <div dangerouslySetInnerHTML={{ __html: projects[current].clean }}></div>
                </MarkdownContentProject>
            </WrapperProject>
        </ProjectContainer>
    );
};
