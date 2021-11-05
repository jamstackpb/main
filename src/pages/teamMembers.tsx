import { getAllMembers } from '@/ssg/members';
import { InferGetStaticPropsType } from 'next';
import React from 'react';

import { CopyRights, CustomHelmet, TeamMember } from '@/src/components';

const Team2Wrapper: React.FC = ({ children }) => (
    <div className="flex flex-wrap justify-center bg-primaryBackgroundColor gap-6 pb-12 pt-6">{children}</div>
);
const TeamWrapper: React.FC = ({ children }) => (
    <div className="flex flex-wrap justify-center gap-x-6 gap-y-10 pb-6 pt-6">{children}</div>
);

const TeamHeader: React.FC = ({ children }) => (
    <h1 className="justify-center text-blue-darkfont text-6xl font-black font-Festive text-center w-full pt-5">
        {children}
    </h1>
);

const Team2Header: React.FC = ({ children }) => (
    <h1 className="justify-center text-white text-6xl font-black font-Festive text-center w-full pb-5">{children}</h1>
);

const teamMembers = ({ content }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div className="container max-w-full bg-tertiaryBackgroundColor">
            <CustomHelmet />

            <Team2Wrapper>
                <Team2Header>Zarząd</Team2Header>
                {content.map((member) => {
                    if (member.rankid == '2') {
                        return (
                            <TeamMember
                                key={member.name}
                                imgPath={member.imgPath}
                                memberName={member.name}
                                memberRank={member.rank}
                                memberRankId={member.rankid}
                                memberGIT={member.www}
                                memberDescription={member.description}
                            ></TeamMember>
                        );
                    }
                })}
            </Team2Wrapper>

            <TeamHeader>Członkowie</TeamHeader>

            <TeamWrapper>
                {content.map((member) => {
                    if (member.rankid == '1') {
                        return (
                            <TeamMember
                                key={member.name}
                                imgPath={member.imgPath}
                                memberName={member.name}
                                memberRank={member.rank}
                                memberRankId={member.rankid}
                                memberGIT={member.www}
                                memberDescription={member.description}
                            ></TeamMember>
                        );
                    }
                })}
            </TeamWrapper>
            <CopyRights />
        </div>
    );
};

export default teamMembers;

export const getStaticProps = () => {
    return {
        props: {
            content: getAllMembers(),
        },
    };
};
