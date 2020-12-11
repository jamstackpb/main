import { Layout } from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import { Date } from "../../components/date";
import utilStyles from "../../styles/utils.module.css";
import { GetStaticProps } from "next";

export default ({
  postData,
}: UnwrapStaticPromiseProps<typeof getStaticProps>) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
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
