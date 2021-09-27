import styled from '@emotion/styled';

export const Input = styled.input`
    background: ${({ theme }) => theme.colorsPalette.commonWhite};
    padding: 20px 10px;
    color: ${({ theme }) => theme.colorsPalette.commonBlack};
    font-size: ${({ theme }) => theme.colorsPalette.septenaryBackgroundColor};
    border: 0;
`;
