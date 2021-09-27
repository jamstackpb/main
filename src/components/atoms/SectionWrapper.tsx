import styled from '@emotion/styled';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5vh 10vh;
    background-color: ${({ theme }) => theme.colorsPalette.backgroundColors.secondary};
`;
const SectionWrapper: React.FC = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};
export default SectionWrapper;
