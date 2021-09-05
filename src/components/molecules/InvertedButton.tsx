import styled from '@emotion/styled';

const Icon = styled.div<{ imagIcon: any }>`
    background-image: url(${({ imagIcon }) => imagIcon});
    height: 50px;
    width: 50px;
    :hover {
        filter: invert(3%);
        box-shadow: ${({ theme }) => theme.boxShadow.secondary};
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
