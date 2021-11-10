import styled from '@emotion/styled';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5vh 10vh;
    background-color: ${({ theme }) => theme.colorsPalette.secondaryBackgroundColor};
    @media (max-width: 580px) {
        padding: 5vh 3vh;
    }
`;
export const SectionWrapper: React.FC = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};
