import { addImagePrefix } from '@/src/utils/prefix';
import React, { useState } from 'react';

const ProjectContainer: React.FC = ({ children }) => (
    <div className="project-container">{children}</div>
)
const Arrowleft: React.FC<{onClick: () => void}>=({onClick})=><a
    onClick={onClick}
    className="cursor-pointer hover:opacity-60 w-8 md:w-16 h-8 md:h-16 transform rotate-180 bg-no-repeat bg-arrow md:relative absolute top-2/5 md:top-0 -left-0 md:left-0"
/>
const Arrowright: React.FC<{onClick: () => void}>=({onClick})=><a
    onClick={onClick}
    className="cursor-pointer hover:opacity-60 w-8 md:w-16 h-8 md:h-16 bg-no-repeat bg-arrow md:relative absolute top-2/5 md:top-0 -right-0 md:right-0"
/>
const TitlesContainer: React.FC=( {children })=> (
    <div className="w-10/12 md:w-3/5 flex flex-col mx-auto py-4 font-Dosis">
        {children}
    </div>
)
const Titles: React.FC<{whichTitle: "subTitle" | "h1" | "h2"}> = ({whichTitle, children}) => {
    if(whichTitle === 'subTitle')
        return (
            <div className="text-denaryBackgroundColor font-bold mx-2 md:mx-0">{children}</div>
        )
    else if (whichTitle === 'h1')
        return (
            <div className="text-white font-bold text-base md:text-xl mx-2 text-left md:text-justify ">{children}</div>
        )
    else if (whichTitle === 'h2')
        return (
            <div className="whitespace-pre-line font-bold text-quaternaryFontColor">{children}</div>
        )
    else return null;
}
const SectionImgContainer: React.FC<{src: string}> = ({ src, children }) => (
    <div className="w-10/12 h-76 md:h-[32rem] relative flex justify-center mx-auto">
        <img className="rounded-b-2xl" width="100%" src={addImagePrefix(src)}/>
        {children}
    </div>
)
const Readmore: React.FC<{onClick: () => void}> = ({ children, onClick }) => (
    <button onClick={onClick} className="text-base text-denaryBackgroundColor hover:underline flex flex-col">{children}</button>
)
const WrapperProject: React.FC<{classNamesrc: string}> = ({ classNamesrc, children }) => (
    <div 
        className={`md:w-1/2
                        absolute 
                        top-2
                        left-2
                        right-2
                        md:right-0
                        bottom-2
                        md:bottom-auto
                        bg-white 
                        bg-opacity-70
                        rounded-md
                        p-2 ${classNamesrc}`}>
        {children}
    </div>
)

const Headbarwrapper: React.FC = ({children}) => (
    <div className="relative w-10/12 mx-auto flex flex-wrap items-center bg-primaryBackgroundColor rounded-t-2xl">{children}</div>
)

interface ProjectsSectionSliderProps {
        projects: Array<{
        subTitle: string;
        h1: string;
        h2: string;
        imageUrl: string;
        description: string;
    }>;
}

const ProjectsSectionSlider: React.FC<ProjectsSectionSliderProps> = ({ projects }) => {
    const [current, setCurrent] = useState(0);
    const [read, setRead] = useState(0);
    const nextSlide = () => {
        if (current === projects.length - 1) {
            setCurrent(0)
        }
        else {
            setCurrent(current + 1);
        }
    };
    const prevSlide = () => {
        if (current === 0) {
            setCurrent(projects.length - 1);
        }
        else {
            setCurrent(current - 1);  
        }
    };
    const Readmorebutton = () => {
         if(read === 0) setRead(1)
         if(read === 1) setRead(2)
         if(read === 2) setRead(1)
    }
    return (
        <ProjectContainer>
            <Headbarwrapper>
                <Arrowleft onClick={prevSlide}></Arrowleft>
                <TitlesContainer>
                    <Titles whichTitle="subTitle">
                        {projects[current].subTitle}
                    </Titles>
                    <Titles whichTitle="h1">
                        {projects[current].h1} 
                            {read === 1 && (
                            <Readmore onClick={Readmorebutton}>Zwiń tekst...</Readmore>
                            ) || (
                            <Readmore onClick={Readmorebutton}>Czytaj więcej...</Readmore>
                            )}
                    </Titles>
                </TitlesContainer>
                <Arrowright onClick={nextSlide}></Arrowright>
            </Headbarwrapper>
            <SectionImgContainer src={projects[current].imageUrl}>
                {read === 1 && (
                <WrapperProject classNamesrc="animate-fadeinup ">
                            <Titles whichTitle="h2">
                                {projects[current].h2}
                            </Titles>
                            <div className="text-sm md:text-base text-justify">
                                {projects[current].description}   
                            </div> 
                </WrapperProject>
                ) || read === 2 && (
                <WrapperProject classNamesrc="animate-fadeoutdown">
                            <Titles whichTitle="h2">
                                {projects[current].h2}
                            </Titles>
                            <div className="text-sm md:text-base text-justify">
                                {projects[current].description}   
                            </div> 
                </WrapperProject>
                ) || (null)}  
            </SectionImgContainer>
        </ProjectContainer>
    );
};

export default ProjectsSectionSlider;
