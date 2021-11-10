import { TextContainer, PostImg, PostButton } from '@/src/components';
import { useSpring, animated } from 'react-spring';

const calc = (x: number, y: number) => {
    return [-(y - window.innerHeight / 2) / 35, (x - window.innerWidth / 2) / 35, 1];
};
const trans = (x: number, y: number, s: number) => `perspective(2000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

interface blogPostProps {
    newest: boolean;
    post: any;
}

export const CardPost: React.FC<blogPostProps> = ({ newest = false, post }) => {
    const [coords, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 200, friction: 50 } }));
    return (
        <animated.div
            onMouseMove={(e) => set.start({ xys: calc(e.clientX, e.clientY) })}
            onMouseLeave={() => set.start({ xys: [0, 0, 1] })}
            style={{ transform: coords.xys.to(trans) }}
            className={
                newest
                    ? 'flex flex-col 2xl:col-span-2 p-2 rounded-3xl shadow-xl border cursor-pointer border-gray-200 bg-gray-100'
                    : 'flex flex-col p-2 rounded-3xl shadow-xl border cursor-pointer bg-gray-100 border-gray-300'
            }
        >
            <PostImg imageUrl={post.changedToMatter.postImg} date={post.changedToMatter.postDate} />
            <TextContainer title={post.changedToMatter.postTitle} subtitle={post.changedToMatter.postFragment} />

            <PostButton text="Przeczytaj całość" adress={post.slug} />
        </animated.div>
    );
};
