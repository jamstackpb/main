import { Layout } from '@/src/layouts';
import { Header } from '@/src/components/molecules/Header';
import { CopyRights } from '../components/molecules/Footer';
import { useEffect, useState } from 'react';
import { teamMembersArray } from '@/src/utils';
import TeamMember from '@/src/components/atoms/TeamMember';
import SectionWrapper from '@/src/components/atoms/SectionWrapper';
const chooseSide = (
    array: Array<{
        name: string;
        rank: string;
        description: string;
        memberImg: string;
        side?: 'left' | 'right';
        whichMargin?: number;
    }>,
) => {
    array.map((item) => {
        const side = Math.floor(Math.random() * 2);
        const randomPadding = Math.floor(Math.random() * 6 + 1);
        if (side) return (item.side = 'right'), (item.whichMargin = randomPadding);
        return (item.side = 'left'), (item.whichMargin = randomPadding);
    });
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const teamMembers = () => {
    useEffect(() => {
        const newArray = chooseSide(teamMembersArray);
        setNewArray([...newArray]);
    }, []);
    const [newArrray, setNewArray] = useState<
        Array<{
            name: string;
            rank: string;
            description: string;
            memberImg: string;
            side?: 'left' | 'right';
            whichMargin?: number;
        }>
    >([]);
    return (
        <Layout pageTitle="teamMembers">
            <Header isHomepage={false} siteTitle="Team Members" />
            <SectionWrapper>
                {newArrray.map((member) => {
                    return (
                        <TeamMember
                            key={member.name}
                            memberImg={member.memberImg}
                            side={member.side}
                            memberName={member.name}
                            memberRank={member.rank}
                            memberDescription={member.description}
                            whichMargin={member.whichMargin}
                        ></TeamMember>
                    );
                })}
            </SectionWrapper>
            <CopyRights>
                <p>All rights reserved &copy; JAMstack PB 2021</p>
            </CopyRights>
        </Layout>
    );
};

export default teamMembers;
