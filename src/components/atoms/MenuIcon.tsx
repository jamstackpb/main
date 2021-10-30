import styled from '@emotion/styled';
import Link from 'next/link';
import { useState } from 'react';

const Svg = styled.svg`
    width: 60px;
    height: 60px;
    cursor: pointer;
    margin-right: 4px;
    transition: 0.5s;
    position: fixed;
    top: 0;
    z-index: 50;

    path:nth-of-type(1) {
        transform-origin: 36% 40%;
    }
    path:nth-of-type(2) {
        stroke-dasharray: 29 299;
    }
    path:nth-of-type(3) {
        transform-origin: 35% 63%;
    }
    path:nth-of-type(4) {
        stroke-dasharray: 29 299;
    }
    path:nth-of-type(5) {
        transform-origin: 61% 52%;
    }
    path:nth-of-type(6) {
        transform-origin: 62% 52%;
    }
    &.active path:nth-of-type(1) {
        transform: translateX(9px) translateY(1px) rotate(45deg);
    }
    &.active path:nth-of-type(2) {
        stroke-dasharray: 225 299;
        stroke-dashoffset: -72px;
    }
    &.active path:nth-of-type(3) {
        transform: translateX(9px) translateY(1px) rotate(-45deg);
    }
    &.active path:nth-of-type(4) {
        stroke-dasharray: 225 299;
        stroke-dashoffset: -72px;
    }
    &.active path:nth-of-type(5) {
        transform: translateX(9px) translateY(1px) rotate(-45deg);
    }
    &.active path:nth-of-type(6) {
        transform: translateX(9px) translateY(1px) rotate(45deg);
    }
`;

type Props = { className?: string };
const divStyles = {
    div: 'bg-blue-darkfont flex flex-col items-center justify-center fixed w-full h-full z-30 md:w-60',
    transition: ' w-full h-20 relative',
};

const DropMenu: React.FC<Props> = (props) => <div className={props.className}>{props.children}</div>;
const DivMenu: React.FC<Props> = (props) => <div className={props.className}>{props.children}</div>;
const DivLink: React.FC<{ link: string }> = ({ link, children }) => (
    <a
        href={link}
        className="text-center block font-medium -mt-12 p-5 w-full h-full leading-10 hover:no-underline hover:bg-gray-300"
    >
        {children}
    </a>
);

export const MenuIcon: React.FC<{ isHomepage?: boolean }> = ({ isHomepage = false }) => {
    const [clicked, setClicked] = useState(false);
    const ToggleMenu = () => setClicked(!clicked);
    return (
        <div className={'h-20'}>
            <Svg
                onClick={ToggleMenu}
                className={clicked ? 'active' : ''}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 200"
            >
                <g strokeWidth="6.5" strokeLinecap="round">
                    <path d="M72 82.286h28.75" fillRule="evenodd" stroke="#fff" />
                    <path
                        d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
                        fill="none"
                        stroke="#fff"
                    />
                    <path d="M72 125.143h28.75" fillRule="evenodd" stroke="#fff" />
                    <path
                        d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
                        fill="none"
                        stroke="#fff"
                    />
                    <path d="M100.75 82.286h28.75" fillRule="evenodd" stroke="#fff" />
                    <path d="M100.75 125.143h28.75" fillRule="evenodd" stroke="#fff" />
                </g>
            </Svg>
            <DropMenu
                className={`${divStyles.div} ${
                    clicked ? 'transform duration-500 translate-x-0' : ' transform ease-in -translate-x-full'
                }`}
            >
                <DivMenu
                    className={`${divStyles.transition} ${
                        clicked
                            ? 'transform ease-out duration-200 delay-0 translate-x-0'
                            : 'transform ease-out -translate-x-full'
                    }`}
                >
                    <DivLink link="/">Strona główna</DivLink>
                </DivMenu>
                <DivMenu
                    className={`${divStyles.transition} ${
                        clicked
                            ? 'transform ease-out duration-200 delay-150 translate-x-0'
                            : 'transform ease-out -translate-x-full'
                    }`}
                >
                    <DivLink link="/ProjectsPage/">Projekty</DivLink>
                </DivMenu>
                <DivMenu
                    className={`${divStyles.transition} ${
                        clicked
                            ? 'transform ease-out duration-200 delay-300 translate-x-0'
                            : 'transform ease-out -translate-x-full'
                    }`}
                >
                    <DivLink link="#">O nas</DivLink>
                </DivMenu>
                <DivMenu
                    className={`${divStyles.transition} ${
                        clicked
                            ? 'transform ease-out duration-200 delay-450 translate-x-0'
                            : 'transform ease-out -translate-x-full'
                    }`}
                >
                    <DivLink link="/teamMembers">Członkowie</DivLink>
                </DivMenu>
                <DivMenu
                    className={`${divStyles.transition} ${
                        clicked
                            ? 'transform ease-out duration-200 delay-600 translate-x-0'
                            : 'transform ease-out -translate-x-full'
                    }`}
                >
                    <DivLink link="/blogsPage">Blog</DivLink>
                </DivMenu>
            </DropMenu>
        </div>
    );
};
