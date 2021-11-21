import { TextContainer, PostImg, PostButton } from '@/src/components';

interface blogPostProps {
    newest: boolean;
    post: any;
}

export const CardPost: React.FC<blogPostProps> = ({ newest = false, post }) => {
    return (
        <div
            className={
                newest
                    ? 'flex flex-col 2xl:col-span-2 p-6 rounded-3xl shadow-xl border cursor-pointer border-gray-200 bg-gray-100 '
                    : 'flex flex-col p-6 rounded-3xl shadow-xl border cursor-pointer bg-gray-100 border-gray-300 '
            }
        >
            <PostImg imageUrl={post.changedToMatter.postImg} date={post.changedToMatter.postDate} />
            <TextContainer title={post.changedToMatter.postTitle} subtitle={post.changedToMatter.postFragment} />

            <PostButton text="Przeczytaj całość" adress={post.slug} />
        </div>
    );
};
