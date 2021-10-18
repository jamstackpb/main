import styled from '@emotion/styled';

const Icon = styled.div<{ imagIcon: any }>`
    background-image: url(${({ imagIcon }) => imagIcon});
    height: 50px;
    width: 50px;
    box-shadow: 2px 6px 30px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    :hover {
        box-shadow: 2px 6px 30px rgba(0, 0, 0, 0.3);
    }
`;

type Param = {
    ahref: any;
    imagIcon: any;
};

export const InvertedButton = ({ ahref, imagIcon }: Param) => {
    return (
        <a href={ahref} style={{ height: 50, width: 50 }}>
            <Icon imagIcon={imagIcon} />
        </a>
    );
};
