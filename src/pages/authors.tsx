import { Layout } from '@/src/layouts';
import { Header } from '@/src/components/molecules/Header';
import { InferGetStaticPropsType } from 'next';

import styled from '@emotion/styled';
import { getAllAuthors } from '@/ssg/authors';
const H1 = styled.h1`
    text-align: center;
    padding: 4rem 0 6rem;
    color: ${({ theme }) => theme.colorsPalette.quaternaryFontColor};
    background-color: ${({ theme }) => theme.colorsPalette.commonWhite};
    width: 100%;
    height: 15rem;
`;

const Autor = styled.div`
    padding: 8px;
    font-size: 20px;
`;

const projectsPage = ({ authors }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <Layout pageTitle="Projects">
            <Header isHomepage={false} />
            <H1>Autorzy</H1>
            {authors.map(({ firstName, lastName }) => {
                return <Autor key={`${firstName}-${lastName}`}>{`${firstName} ${lastName}`}</Autor>;
            })}
        </Layout>
    );
};

export const getStaticProps = () => {
    return {
        props: {
            authors: getAllAuthors(),
        },
    };
};

export default projectsPage;
