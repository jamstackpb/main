import styled from '@emotion/styled';

const Parent = styled.div`
    width: 100%;
    height: 128px;
    background-color: ${({ theme }) => theme.colorsPalette.tertiaryBackgroundColor};
    position: static;
    bottom: 0px;
`;

const Copyrights = styled.div`
    width: 100%;
    height: 80px;
    color: ${({ theme }) => theme.colorsPalette.secondaryFontColor};
    border: 0px;
    font-weight: 500;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: ${({ theme }) => theme.boxShadow.primary};
    z-index: 1;
`;

export const CopyRights = () => {
    return (
        <Parent>
            <Copyrights>
                <p>All rights reserved &copy; JAMstack PB 2021</p>
            </Copyrights>
            <div style={{ width: '100%', height: 48, zIndex: 2, background: 'inherit' }} />
        </Parent>
    );
};
