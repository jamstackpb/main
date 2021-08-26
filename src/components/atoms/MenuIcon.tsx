import styled from '@emotion/styled';
import { useState } from 'react';

interface SvgProps {
    width?: number;
    height?: number;
}

const Svg = styled.svg`
    width: 10vh;
    height: 10vh;
    cursor: pointer;
    margin-right: 1%;
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

export const MenuIcon: React.FC<SvgProps> = ({ width, height }) => {
    const [clicked, setClicked] = useState(false);
    const ToggleMenu = () => setClicked(!clicked);
    return (
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
    );
};
