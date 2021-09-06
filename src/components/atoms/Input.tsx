import styled from '@emotion/styled';

export const Input = styled.input`
    background: ${({ theme }) => theme.colorsPalette.common.white};
    padding: 20px 10px;
    color: ${({ theme }) => theme.colorsPalette.common.black};
    font-size: ${({ theme }) => theme.colorsPalette.backgroundColors.septenary};
    border: 0;
`;
