import styled from '@emotion/styled';

const SVGrightArrow = styled.svg`
    display: inline-block;
    width: 1em;
    height: 1em;
    margin: auto 0;
`;

const ArrowsContainer = styled.div`
    padding: 0.5em 0;
    margin-left: 0.5em;
    position: relative;
    display: flex;
    align-items: center;
    & svg.first {
        position: absolute;
        bottom: 0;
    }

    & svg.second {
        position: absolute;
        bottom: 0;
        left: 0.6em;
    }
`;

export const DoubleRightArrow: React.FC = () => {
    return (
        <ArrowsContainer>
            <SVGrightArrow className="first" version="1.1" viewBox="0 0 25.582 39.623">
                <g transform="translate(-76.032 -86.231)">
                    <path
                        fill="#2727a3"
                        transform="scale(.26458)"
                        d="m298.68 325.91a11.339 11.339 0 0 0-0.32421 6e-3 11.339 11.339 0 0 0-8.3418 4.0527 11.339 11.339 0 0 0 1.4102 15.975l63.973 53.6-62.977 56.338a11.339 11.339 0 0 0-0.89258 16.004 11.339 11.339 0 0 0 16.012 0.89453l72.734-65.064a11.34 11.34 0 0 0-0.27343-17.141l-74.02-62.016a11.339 11.339 0 0 0-7.3008-2.6484z"
                    />
                </g>
            </SVGrightArrow>
            <SVGrightArrow className="second" version="1.1" viewBox="0 0 25.582 39.623">
                <g transform="translate(-76.032 -86.231)">
                    <path
                        fill="#2727a3"
                        transform="scale(.26458)"
                        d="m298.68 325.91a11.339 11.339 0 0 0-0.32421 6e-3 11.339 11.339 0 0 0-8.3418 4.0527 11.339 11.339 0 0 0 1.4102 15.975l63.973 53.6-62.977 56.338a11.339 11.339 0 0 0-0.89258 16.004 11.339 11.339 0 0 0 16.012 0.89453l72.734-65.064a11.34 11.34 0 0 0-0.27343-17.141l-74.02-62.016a11.339 11.339 0 0 0-7.3008-2.6484z"
                    />
                </g>
            </SVGrightArrow>
        </ArrowsContainer>
    );
};
