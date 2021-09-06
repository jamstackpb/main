import styled from '@emotion/styled';

export const Button = styled.a`
    background: ${({ theme }) => theme.colorsPalette.backgroundColors.quaternary};
    color: ${({ theme }) => theme.colorsPalette.common.black};
    font-weight: ${({ theme }) => theme.font.fontWeight.primary};
    font-size: ${({ theme }) => theme.font.fontSize.septenary};
    text-transform: uppercase;
    padding: 20px 34px;
    border: 0;
    display: block;
    min-width: 150px;
    :hover {
        text-decoration: none;
        background: ${({ theme }) => theme.colorsPalette.hoverColors.primary};
    }
`;
