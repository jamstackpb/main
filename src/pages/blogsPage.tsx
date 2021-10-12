import { Layout } from '@/src/layouts';
import { Header } from '@/src/components/molecules/Header';
import { CopyRights } from '../components/molecules/CopyRights';
import SectionWrapper from '@/src/components/atoms/SectionWrapper';
import styled from '@emotion/styled';
import { InferGetStaticPropsType } from 'next';
import { PostCard } from '@/src/components/atoms/blogPageAtoms/PostCard';
import { getAllPosts } from '@/ssg/blogPosts';

const Titles = styled.div`
    & * {
        text-align: center;
    }
    & h1 {
        color: ${({ theme }) => theme.colorsPalette.quaternaryFontColor};
        font-weight: 600;
    }
    & h3 {
        color: ${({ theme }) => theme.colorsPalette.primaryFontColor};
        font-size: 2em;
        padding-bottom: 2em;
        font-weight: 600;
    }
    & h4 {
        font-size: 1.5em;
        color: ${({ theme }) => theme.colorsPalette.secondaryFontColor};
        font-weight: 700;
    }
`;
const GridContainer = styled.div`
    color: #2727a3;
    font-weight: 700;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: 'newestpost newestpost';
    row-gap: 30px;
    column-gap: 40px;
    width: 100%;
    & > div {
        cursor: pointer;
    }
`;
const PageTitle = styled.div``;

const blogspage = ({ content }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const sortedContent = content.sort((a, b) => {
        const a1 = a.changedToMatter.postDate.split('.').reverse().join();
        const b1 = b.changedToMatter.postDate.split('.').reverse().join();
        return a1 > b1 ? -1 : a1 < b1 ? 1 : 0;
    });

    return (
        <Layout pageTitle="Blogs Page">
            <Header isHomepage={false} />
            <SectionWrapper>
                <Titles>
                    <h4>AKTUALNOŚCI</h4>
                    <h1>Zapoznaj się z najnowszymi wiadomościoami</h1>
                    <h3>
                        Nasz JamstackPB nieustannie się rozwija. Poniżej prezentujemy najważniejsze aktualności
                        dotyczące naszego koła.
                    </h3>
                </Titles>
                <GridContainer>
                    {console.log(content)}
                    {sortedContent.map((card, index) => {
                        return (
                            <PostCard
                                key={index}
                                newest={index === 0}
                                imageUrl={card.changedToMatter.postImg}
                                postTitle={card.changedToMatter.postTitle}
                                postSubTitle={card.changedToMatter.postFragment}
                                date={card.changedToMatter.postDate}
                            />
                        );
                    })}
                </GridContainer>
            </SectionWrapper>
            <CopyRights />
        </Layout>
    );
};
export default blogspage;
export const getStaticProps = () => {
    return {
        props: {
            content: getAllPosts(),
        },
    };
};
