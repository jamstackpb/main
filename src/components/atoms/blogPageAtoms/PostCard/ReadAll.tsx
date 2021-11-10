import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { DoubleRightArrow } from '@/src/components/atoms/blogPageAtoms/PostCard/DoubleRightArrow';
import Link from 'next/dist/client/link';
interface ButtonText {
    text: string;
    adress: string;
}

const bounceAlpha = keyframes` 0% {opacity: 1; transform: translateX(0px) scale(1);}
25%{opacity: 0; transform:translateX(10px) scale(0.9);}
26%{opacity: 0; transform:translateX(-10px) scale(0.9);}
55% {opacity: 1; transform: translateX(0px) scale(1);}`;

const Button = styled.div`
    &:hover svg.first {
        animation: ${bounceAlpha} 1.4s 0.2s infinite linear;
    }
    &:hover svg.second {
        animation: ${bounceAlpha} 1.4s infinite linear;
    }
`;

export const PostButton: React.FC<ButtonText> = ({ text, adress }) => {
    return (
        <Link href={'/posts/' + adress + ''}>
            <Button className="flex w-40 sm:w-56 pl-4 md:pl-5 py-1 text-xs sm:text-lg ml-auto rounded-2xl bg-opacity-70 hover:bg-opacity-100 uppercase bg-quaternaryFontColor text-gray-100">
                {text} <DoubleRightArrow />
            </Button>
        </Link>
    );
};
