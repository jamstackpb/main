import { Layout } from '../../layouts/layout';
import { getAllPostIds, getPostData } from '../../../lib/posts';

export default ({ postData }: UnwrapStaticPromiseProps<typeof getStaticProps>) => {
    return (
        <Layout pageTitle={postData.title}>
            <article>
                <h1>{postData.title}</h1>
                <div>
                    <p>{postData.date}</p>
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
};

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps = async ({
    params,
}: {
    params: {
        id: string;
    };
}) => {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
};
