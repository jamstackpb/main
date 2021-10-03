import { Layout } from '@/src/layouts';
import { Header } from '@/src/components/molecules/Header';
import { CopyRights } from '../components/molecules/CopyRights';
import { useEffect, useState } from 'react';
import TeamMember from '@/src/components/atoms/TeamMember';
import SectionWrapper from '@/src/components/atoms/SectionWrapper';
import { getAllMembers } from '@/ssg/members';
import { InferGetStaticPropsType } from 'next';

const chooseSide = (
    array: Array<{
        name: string;
        rank: string;
        description: string;
        imgPath: string;
        side?: 'left' | 'right';
        whichMargin?: number;
    }>,
) => {
    array.map((item) => {
        const side = Math.floor(Math.random() * 2);
        const randomMargin = Math.floor(Math.random() * 6 + 1);
        if (side) return (item.side = 'right'), (item.whichMargin = randomMargin);
        return (item.side = 'left'), (item.whichMargin = randomMargin);
    });
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const teamMembers = ({ content }: InferGetStaticPropsType<typeof getStaticProps>) => {
    useEffect(() => {
        const newArray = chooseSide(content);
        setNewArray([...newArray]);
    }, []);
    const [newArrray, setNewArray] = useState<
        Array<{
            name: string;
            rank: string;
            description: string;
            imgPath: string;
            side?: 'left' | 'right';
            whichMargin?: number;
        }>
    >([]);
    return (
        <Layout pageTitle="teamMembers">
            <Header isHomepage={false} />
            <h1 style={{ color: '#15159b', fontWeight: 600, padding: '.5em' }} className="padding-spacing-5">
                Członkowie
            </h1>
            <SectionWrapper>
                {newArrray.map((member) => {
                    return (
                        <TeamMember
                            key={member.name}
                            imgPath={member.imgPath}
                            side={member.side}
                            memberName={member.name}
                            memberRank={member.rank}
                            memberDescription={member.description}
                            whichMargin={member.whichMargin}
                        ></TeamMember>
                    );
                })}
            </SectionWrapper>
            <CopyRights />
        </Layout>
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
