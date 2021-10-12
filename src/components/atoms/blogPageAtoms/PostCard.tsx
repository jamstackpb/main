import { addImagePrefix } from '@/src/utils';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { DoubleRightArrow } from '@/src/components/atoms/blogPageAtoms/DoubleRightArrow';
import { useSpring, animated } from 'react-spring';
const calc = (x: number, y: number) => {
    return [-(y - window.innerHeight / 2) / 35, (x - window.innerWidth / 2) / 35, 1];
};
const trans = (x: number, y: number, s: number) => `perspective(2000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
const bounceAlpha = keyframes` 0% {opacity: 1; transform: translateX(0px) scale(1);}
25%{opacity: 0; transform:translateX(10px) scale(0.9);}
26%{opacity: 0; transform:translateX(-10px) scale(0.9);}
55% {opacity: 1; transform: translateX(0px) scale(1);}`;
const animate = keyframes`
  0%{
      background-position: 0% 50%;
  }
  50%{
      background-position: 100% 50%;
  }
  100%{
      background-position: 0% 50%;
  }  
  `;
const PostImgWrapper = styled.div`
    width: 100%;
    height: 500px;
    overflow: hidden;
    border-radius: 5vh;
`;
const PostImgContainer = styled.div`
    padding: 0;
    position: relative;
    width: 100%;
    height: 100%;

    overflow: hidden;
`;
const PostImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const PostDate = styled.div`
    font-size: 2em;
    line-height: 32px;
    padding-left: 0.5em;
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: #ddd;
    height: 32px;
    width: 10vw;

    &:hover {
        border: none;
    }
    &::before {
        position: absolute;
        left: -32px;
        display: block;
        content: '';
        border-right: 32px solid #ddd;
        border-top: 32px solid transparent;
    }
`;
const PostTitle = styled.div`
    padding: 0 1em;
    font-size: 3em;
`;
const PostSubtitle = styled.div`
    font-size: 2em;
    line-height: 2em;
    font-weight: 900;
    color: #78a0fa;
    max-height: 35vh;

    box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`;
const Card = styled(animated.div)<{ newest: boolean }>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 5vh;
    z-index: 2;

    grid-area: ${({ newest }) => newest && 'newestpost'};
    & div + div {
        padding: 0.5em 1.5em;
    }
    &:hover div > svg.first {
        animation: ${bounceAlpha} 1.4s 0.2s infinite linear;
    }
    &:hover div > svg.second {
        animation: ${bounceAlpha} 1.4s infinite linear;
    }

    &:hover:before {
        animation: ${animate} 3s ease alternate infinite;
    }

    &:before {
        content: '';
        position: absolute;
        top: -2.5px;
        left: -2.5px;
        height: calc(100% + 5px);
        width: calc(100% + 5px);
        background: linear-gradient(
            60deg,
            rgba(2, 0, 36, 1) 0%,
            rgba(9, 9, 121, 1) 10%,
            rgba(0, 125, 255, 1) 30%,
            rgba(9, 9, 121, 1) 50%,
            rgba(0, 125, 255, 1) 70%,
            rgba(9, 9, 121, 1) 90%,
            rgba(2, 0, 36, 1) 100%
        );
        border-radius: 5vh;
        z-index: -2;
        background-size: 300% 300%;
    }
    &:after {
        position: absolute;
        top: 0;
        border-radius: 5vh;
        display: block;
        content: '';
        width: 100%;
        height: 100%;
        background-color: #fff;
        z-index: -1;
    }
`;
const ReadAll = styled.div`
    text-transform: uppercase;
    font-size: 1.6em;
    display: flex;
    align-items: center;
`;
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
        <Card
            newest={newest}
            onMouseMove={({ clientX: x, clientY: y }) => set.start({ xys: calc(x, y) })}
            onMouseLeave={() => set.start({ xys: [0, 0, 1] })}
            style={{ transform: coords.xys.to(trans) }}
        >
            {' '}
            <PostImgWrapper>
                <PostImgContainer>
                    <PostImg src={addImagePrefix(imageUrl)} alt="" />
                    <PostDate>
                        <span className="date">{date}</span>
                    </PostDate>
                </PostImgContainer>
            </PostImgWrapper>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                <PostTitle>{postTitle}</PostTitle>
                <PostSubtitle>{postSubTitle}</PostSubtitle>
                <ReadAll>
                    <span>Przeczytaj całość</span> <DoubleRightArrow />
                </ReadAll>{' '}
            </div>
        </Card>
    );
};
