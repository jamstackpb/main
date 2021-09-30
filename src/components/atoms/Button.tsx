import styled from '@emotion/styled';

export const Button = styled.a`
    background: ${({ theme }) => theme.colorsPalette.quaternaryBackgroundColor};
    color: ${({ theme }) => theme.colorsPalette.commonBlack};
    font-weight: 900;
    font-size: 15px;
    text-transform: uppercase;
    text-align: center;
    padding: 20px 34px;
    border: 0;
    display: block;
    max-width: 150px;
    width: 150px;
    min-width: 50px;
    @media (max-width: 390px) {
        & {
            padding: 20px 5px;
            font-size: 10px;
        }
    }
    :hover {
        text-decoration: none;
        background: ${({ theme }) => theme.colorsPalette.primaryHoverColor};
    }
`;
