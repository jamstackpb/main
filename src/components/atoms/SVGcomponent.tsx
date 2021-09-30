import styled from '@emotion/styled';

const ImageSVG = styled.div<{ imagIcon: any }>`
    background: url(${({ imagIcon }) => imagIcon});
    height: inherit;
    width: inherit;
`;

type Param = {
    imagIcon: any;
    // height: number;
    //  width: number;
};

export const SVGcomponent = ({ imagIcon }: Param) => {
    return <ImageSVG imagIcon={imagIcon} />;
};
