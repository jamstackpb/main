import { addImagePrefix } from '@/src/utils';
import React from 'react';

const MemberContainer: React.FC<{ memberRankId: string }> = ({ children, memberRankId }) => {
    if (memberRankId == '2') {
        return <div className="w-92 max-w-full bg-white rounded-3xl px-1 m-1">{children}</div>;
    } else if (memberRankId == '1') {
        return (
            <div className="w-92 max-w-full bg-primaryBackgroundColor rounded-3xl px-1 m-1 shadow-lg hover:bg-transparent hover:shadow-2xl">
                {children}
            </div>
        );
    } else return null;
};

const MemberImg: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
    <img className="bg-white h-84 max-h-84 w-92 mx-auto rounded-t-3xl mt-1" src={src} alt={alt} />
);

const MemberName: React.FC<{ name: string }> = ({ name }) => {
    return <div className="text-black font-bold font-Dosis text-xl max-w-full">{name}</div>;
};

const MemberRank: React.FC<{ rank: string }> = ({ rank }) => (
    <div className="text-black font-normal font-Roboto text-xl uppercase max-w-full">{rank}</div>
);

const MemberDescription: React.FC<{ description: string }> = ({ description }) => (
    <div className="text-black font-light font-Dosis text-base w-full max-w-10/12 mx-auto">{description}</div>
);

const MemberFigure: React.FC<{ git: string }> = ({ children, git }) => {
    return (
        <a
            className="flex flex-col rounded-3xl w-full h-full mb-1 cursor-pointer
            hover:bg-git bg-body bg-center bg-no-repeat "
            href={git}
            target="_blank"
        >
            {children}
        </a>
    );
};

const MemberFigureCaption: React.FC = ({ children }) => (
    <figcaption className="font-medium text-center bg-tertiaryBackgroundColor max-w-92 h-32 mx-auto rounded-b-3xl">
        {children}
    </figcaption>
);

interface TeamMemberProps {
    memberName: string;
    memberRank: string;
    memberRankId: string;
    memberDescription: string;
    memberGIT: string;
    imgPath: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
    memberName,
    memberRank,
    memberRankId,
    memberDescription,
    memberGIT,
    imgPath,
}) => {
    return (
        <MemberContainer memberRankId={memberRankId}>
            <MemberFigure git={memberGIT}>
                <div className="hover:opacity-40">
                    <MemberImg src={addImagePrefix(imgPath)} alt="Member Image" />
                    <MemberFigureCaption>
                        <MemberName name={memberName}></MemberName>
                        <MemberRank rank={memberRank}></MemberRank>
                        <MemberDescription description={memberDescription}></MemberDescription>
                    </MemberFigureCaption>
                </div>
            </MemberFigure>
        </MemberContainer>
    );
};

export default TeamMember;
