import { Layout } from '@/src/layouts';
import { Header } from '@/src/components/molecules/Header';
import { CopyRights } from '../components/molecules/CopyRights';
import { BlogGrid } from '@/src/components/molecules/BlogPostsGrid';
import { InferGetStaticPropsType } from 'next';
import { PostCard } from '@/src/components/molecules/PostCard';
import { getAllPosts } from '@/ssg/blogPosts';
import { Titles } from '@/src/components/molecules/Titles';

const blogspage = ({ content }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const sortedContent = content.sort((a, b) => {
        const a1 = a.changedToMatter.postDate.split('.').reverse().join();
        const b1 = b.changedToMatter.postDate.split('.').reverse().join();
        return a1 > b1 ? -1 : a1 < b1 ? 1 : 0;
    });

    return (
        <Layout pageTitle="Blogs Page">
            <Header isHomepage={false} />
            <Titles
                title="Aktualności"
                firstSubTitle="Nasz JamstackPB nieustannie się rozwija. Poniżej prezentujemy najważniejsze aktualności, dotyczące
                naszego koła."
            />
            <BlogGrid>
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
            </BlogGrid>

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
