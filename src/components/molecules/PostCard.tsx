import { TextContainer } from '@/src/components/atoms/blogPageAtoms/PostCard/TextContainer';
import { PostImg } from '@/src/components/atoms/blogPageAtoms/PostCard/PostImg';
import { PostButton } from '@/src/components/atoms/blogPageAtoms/PostCard/ReadAll';
import { useSpring, animated } from 'react-spring';
const calc = (x: number, y: number) => {
    return [-(y - window.innerHeight / 2) / 35, (x - window.innerWidth / 2) / 35, 1];
};
const trans = (x: number, y: number, s: number) => `perspective(2000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

interface blogPostProps {
    newest: boolean;
    imageUrl: string;
    postTitle: string;
    postSubTitle: string;
    date: string;
}

export const PostCard: React.FC<blogPostProps> = ({ newest = false, date, imageUrl, postTitle, postSubTitle }) => {
    const [coords, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 200, friction: 50 } }));
    return (
        <animated.div
            onMouseMove={({ clientX: x, clientY: y }) => set.start({ xys: calc(x, y) })}
            onMouseLeave={() => set.start({ xys: [0, 0, 1] })}
            style={{ transform: coords.xys.to(trans) }}
            className={
                newest
                    ? 'flex flex-col lg:col-span-2 p-2 rounded-3xl shadow-xl border cursor-pointer border-gray-200 bg-gray-100'
                    : 'flex flex-col p-2 rounded-3xl shadow-xl border cursor-pointer bg-gray-100 border-gray-300'
            }
        >
            <PostImg imageUrl={imageUrl} date={date} />
            <TextContainer title={postTitle} subtitle={postSubTitle} />
            <PostButton text="Przeczytaj całość" />
        </animated.div>
    );
};
