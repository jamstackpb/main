import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import DOMPurify from 'isomorphic-dompurify';
import marked from 'marked';
import Link from 'next/link';
import { Layout } from '@/src/layouts';
import { Header } from '@/src/components';
import { CopyRights } from '../../components/molecules/CopyRights';
import { addImagePrefix } from '../../utils';
import { InferGetStaticPropsType, GetStaticProps } from 'next';
import MarkdownContent from '@/src/components/molecules/MarkdownContent';

const Post = ({
    frontmatter: { postImg, postTitle, postDate, author, avatar },
    clean,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <Layout pageTitle={postTitle}>
            <Header isHomepage={false} />
            <div className="flex flex-row px-48 w-full h-360px " style={{ marginTop: '80px' }}>
                <div className="absolute top-160px -left-56 transform -skew-x-30 translate-x-96 bg-white w-1/2 h-360px z-20" />
                <div className="static h-full w-4/6 pl-6 block z-30 bg-white">
                    <div className="flex flex-row transform mb-7">
                        <div>
                            <Link href="/">
                                <a className="text-xl text-blue-font  font-bold hover:no-underline">HOME </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/blogsPage">
                                <a className="text-xl text-blue-font  font-bold hover:no-underline"> &#707; NEWS</a>
                            </Link>
                        </div>
                        <div>
                            <Link href="#">
                                <a className="text-xl text-blue-font  font-bold hover:no-underline"> &#707; ARTICLE</a>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="block text-blue-darkfont font-bold text-7xl text-left bg-transparent w-full h-auto"
                        style={{ maxHeight: '260px' }}
                    >
                        {postTitle}
                    </div>
                    <div className="flex mt-7">
                        <div
                            style={{ backgroundImage: 'url(' + avatar + ')' }}
                            className="bg-cover h-50px w-50px z-30"
                        ></div>
                        <div className="inline-block h-50px ml-6">
                            <div className="text-gray-font font-bold text-2xl z-30 h-25px">{author}</div>
                            <div className="text-xl text-blue-font  font-medium h-25px">{postDate}</div>
                        </div>
                    </div>
                </div>
                <div
                    className="h-9/10 w-full relative block z-10"
                    style={{
                        backgroundPosition: 'right',
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: 'url(' + addImagePrefix(postImg) + ')',
                    }}
                ></div>
            </div>
            <MarkdownContent>
                <div dangerouslySetInnerHTML={{ __html: clean }}></div>
            </MarkdownContent>

            <CopyRights />
        </Layout>
    );
};

export default Post;

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('content/blogposts'));

    const paths = files.map((filename) => ({
        params: {
            id: filename.replace('.md', ''),
        },
    }));
    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps = ({ params }) => {
    const id = params?.id;
    if (!id) {
        throw new Error('Invalid static prop');
    }
    const markdownWithMeta = fs.readFileSync(path.join('content/blogposts', id + '.md'), 'utf-8');

    const { data: frontmatter, content } = matter(markdownWithMeta);
    const dirty = marked(content);
    const clean = DOMPurify.sanitize(dirty);
    return {
        props: {
            frontmatter,
            id,
            clean,
        },
    };
};
