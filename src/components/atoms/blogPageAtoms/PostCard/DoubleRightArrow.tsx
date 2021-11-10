import styled from '@emotion/styled';

const SVGrightArrow = styled.svg`
    display: inline-block;
    width: 1em;
    height: 0.8em;
    margin: auto 0;
`;
interface ArrowColor {
    color?: string;
}

export const DoubleRightArrow: React.FC<ArrowColor> = ({ color = '#f5f5f5' }) => {
    return (
        <div className="flex items-center relative  ">
            <SVGrightArrow className="first" version="1.1" viewBox="0 0 25.582 39.623">
                <g transform="translate(-76.032 -86.231)">
                    <path
                        fill={color}
                        transform="scale(.26458)"
                        d="m298.68 325.91a11.339 11.339 0 0 0-0.32421 6e-3 11.339 11.339 0 0 0-8.3418 4.0527 11.339 11.339 0 0 0 1.4102 15.975l63.973 53.6-62.977 56.338a11.339 11.339 0 0 0-0.89258 16.004 11.339 11.339 0 0 0 16.012 0.89453l72.734-65.064a11.34 11.34 0 0 0-0.27343-17.141l-74.02-62.016a11.339 11.339 0 0 0-7.3008-2.6484z"
                    />
                </g>
            </SVGrightArrow>
            <SVGrightArrow className="second absolute left-2" version="1.1" viewBox="0 0 25.582 39.623">
                <g transform="translate(-76.032 -86.231)">
                    <path
                        fill={color}
                        transform="scale(.26458)"
                        d="m298.68 325.91a11.339 11.339 0 0 0-0.32421 6e-3 11.339 11.339 0 0 0-8.3418 4.0527 11.339 11.339 0 0 0 1.4102 15.975l63.973 53.6-62.977 56.338a11.339 11.339 0 0 0-0.89258 16.004 11.339 11.339 0 0 0 16.012 0.89453l72.734-65.064a11.34 11.34 0 0 0-0.27343-17.141l-74.02-62.016a11.339 11.339 0 0 0-7.3008-2.6484z"
                    />
                </g>
            </SVGrightArrow>
        </div>
    );
};
