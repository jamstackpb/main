import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import DOMPurify from 'isomorphic-dompurify';
import marked from 'marked';
import Link from 'next/link';
import { Layout } from '@/src/layouts';
import { CopyRights } from '../../components/molecules/CopyRights';
import { addImagePrefix } from '../../utils';
import { InferGetStaticPropsType, GetStaticProps } from 'next';
import { LitleArrow } from '@/src/components';
import MarkdownContent from '@/src/components/molecules/MarkdownContent';

const Post = ({
    frontmatter: { postImg, postTitle, postDate, author, avatar },
    clean,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <Layout pageTitle={postTitle}>
            <div className="h-full w-full bg-blue-whitebg relative -top-20 pt-20">
                <div className="flex flex-row w-full h-88 mt-20 mb-14">
                    <div className="h-full w-3/7 px-7 md:px-22 xl:px-48 block z-40 bg-blue-whitebg">
                        <div className="flex flex-row transform ml-6 mb-7 h-7 w-120 2xl:w-150 items-center">
                            <div>
                                <Link href="/">
                                    <a className="text-xl text-blue-font  font-bold hover:no-underline">HOME </a>
                                </Link>
                            </div>
                            <LitleArrow color="fill-blue-font h-6 w-6" />
                            <div>
                                <Link href="/blogsPage">
                                    <a className="text-xl text-blue-font  font-bold hover:no-underline"> NEWS</a>
                                </Link>
                            </div>
                            <LitleArrow color="fill-blue-font h-6 w-6" />
                            <div>
                                <Link href="#">
                                    <a className="text-xl text-blue-font  font-bold hover:no-underline"> ARTICLE</a>
                                </Link>
                            </div>
                        </div>
                        <div className="block text-blue-darkfont font-bold md:text-5xl text-3xl text-left bg-transparent w-120 2xl:w-150 h-50">
                            {postTitle}
                        </div>
                        <div className="flex mt-7 w-98">
                            <div
                                style={{ backgroundImage: 'url(' + addImagePrefix(avatar) + ')' }}
                                className="bg-cover h-16 w-16 z-30"
                            ></div>
                            <div className="inline-block h-16 ml-6">
                                <div className="text-gray-font font-bold text-2xl z-30 h-8">{author}</div>
                                <div className="text-xl text-blue-font  font-medium h-8">{postDate}</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-0 h-0 border-solid border-blog relative left-0 z-30" />
                    <div
                        className="h-88 w-360 block z-10 absolute right-7 md:right-22 xl:right-48"
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
            </div>
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
