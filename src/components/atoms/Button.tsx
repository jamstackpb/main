import styled from '@emotion/styled';

export const Button = styled.a`
    background: ${({ theme }) => theme.colorsPalette.quaternaryBackgroundColor};
    color: ${({ theme }) => theme.colorsPalette.commonBlack};
    font-weight: 900;
    font-size: 15px;
    text-transform: uppercase;
    padding: 20px 34px;
    border: 0;
    display: block;
    min-width: 150px;
    :hover {
        text-decoration: none;
        background: ${({ theme }) => theme.colorsPalette.primaryHoverColor};
    }
`;
