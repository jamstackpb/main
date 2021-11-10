import { Layout } from '@/src/layouts';

import { BlogGrid, CopyRights, CardPost, Titles } from '@/src/components';
import { InferGetStaticPropsType } from 'next';

import { getAllPosts } from '@/ssg/blogPosts';

const blogspage = ({ content }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const sortedContent = content.sort((a, b) => {
        const a1 = a.changedToMatter.postDate.split('.').reverse().join();
        const b1 = b.changedToMatter.postDate.split('.').reverse().join();
        return a1 > b1 ? -1 : a1 < b1 ? 1 : 0;
    });

    return (
        <Layout pageTitle="Blogs Page">
            <Titles
                title="Aktualności"
                firstSubTitle="Nasz JamstackPB nieustannie się rozwija. Poniżej prezentujemy najważniejsze aktualności, dotyczące
                naszego koła."
            />
            <BlogGrid>
                {sortedContent.map((card, index) => {
                    return <CardPost key={index} newest={index === 0} post={card} />;
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
