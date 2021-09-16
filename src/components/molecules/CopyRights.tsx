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
    height: 128px;
    //position: relative;
    //top: 0px;
    color: ${({ theme }) => theme.colorsPalette.secondaryFontColor};
    padding-top: 34px;
    padding-bottom: 82px;
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
        <Copyrights>
            <p>All rights reserved &copy; JAMstack PB 2021</p>
        </Copyrights>
    );
};
