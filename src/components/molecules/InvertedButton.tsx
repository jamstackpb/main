import { prefix } from '@/src/pages';
import styled from '@emotion/styled';

const Icon = styled.div<{ imagIcon: any }>`
    background-image: url(${({ imagIcon }) => imagIcon});
    background-position: center;
    width: 100%;
    height: 100%;
    :hover {
        filter: invert(3%);
        box-shadow: 6px 6px 6px -1px black;
    }
`;
type Param = {
    ahref: any;
    imagIcon: any;
};

export const InvertedButton = ({ ahref, imagIcon }: Param) => {
    return (
        <a href={ahref} style={{ height: 50, width: 50 }}>
            <Icon imagIcon={prefix() + imagIcon} />
        </a>
    );
};
