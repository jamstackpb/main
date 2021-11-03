import styled from '@emotion/styled';
import Link from 'next/link';
import { useState } from 'react';

const Svg = styled.svg`
    width: 80px;
    height: 80px;
    cursor: pointer;
    margin-right: 4px;
    transition: 0.5s;
    position: sticky;
    top: 0;

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

const DropMenu = styled.div`
    background-color: ${({ theme }) => theme.colorsPalette.primaryBackgroundColor};
    border-radius: 0 0 2rem 0;
    display: flex;
    left: -20rem;
    top: 80px;
    z-index: 12;
    flex-direction: column;
    align-items: center;
    justify-content: stretch;
    width: 20rem;
    padding: 0;
    margin: 0;
    transition-timing-function: ease-in;
    transition: 0.2s;
    transform: translateX(0%);
    height: 25rem;
    position: fixed;

    & > div,
    & > div > div {
        position: relative;
        left: -20rem;
        margin: 0;
        padding: 0px;
        width: 100%;
        height: 5rem;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    &.active > div > div:hover {
        background-color: ${({ theme }) => theme.colorsPalette.secondaryHoverColor};
        transition-delay: 0s;
    }
    & > div > div > a {
        text-align: center;
        color: white;
        display: block;
        text-decoration: none;
        font-weight: 500;
        font-size: 2.6rem;
        margin: 0;
        padding: 1.2rem 0;
        width: 100%;
        height: 100%;
        line-height: 2.6rem;
    }
    &.active {
        transition-timing-function: ease-out;
        transition: 0.5s;
        transform: translateX(100%);
    }
    &.active div {
        transition-timing-function: ease-out;
        transition: 0.5s;
        transform: translateX(100%);
    }
    &.active div:nth-of-type(1) {
        transition-delay: 0s;
    }
    &.active div:nth-of-type(2) {
        transition-delay: 0.25s;
    }
    &.active div:nth-of-type(3) {
        transition-delay: 0.5s;
    }
    &.active div:nth-of-type(4) {
        transition-delay: 0.75s;
    }
    &.active div:nth-of-type(5) {
        transition-delay: 1s;
    }
`;

export const MenuIcon: React.FC<{ isHomepage?: boolean }> = ({ isHomepage = false }) => {
    const [clicked, setClicked] = useState(false);
    const ToggleMenu = () => setClicked(!clicked);
    return (
        <div className="min-h-30 min-w-80 w-80">
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
            <DropMenu className={clicked ? 'active' : ''}>
                <div>
                    <div style={{ borderRadius: isHomepage ? ' 0 2rem 0 0' : '0' }}>
                        <Link href="/">
                            <a>Strona główna</a>
                        </Link>
                    </div>
                </div>
                <div>
                    <div>
                        <Link href="/ProjectsPage/">
                            <a>Projekty</a>
                        </Link>
                    </div>
                </div>
                <div>
                    <div>
                        <Link href="/aboutUs">
                            <a>O nas</a>
                        </Link>
                    </div>
                </div>
                <div>
                    <div>
                        <Link href="/teamMembers">
                            <a>Członkowie</a>
                        </Link>
                    </div>
                </div>
                <div>
                    <div style={{ borderRadius: ' 0 0 2rem 0' }}>
                        <Link href="/blogsPage">
                            <a>Blog</a>
                        </Link>
                    </div>
                </div>
            </DropMenu>
        </div>
    );
};
