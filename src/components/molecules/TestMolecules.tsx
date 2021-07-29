import styled from '@emotion/styled';

export const TestMolecules = () => {
    const TestDiv = styled.div`
        margin: 20px 0;
        p {
            font-size: 30px;
        }
    `;

    return (
        <TestDiv>
            <p>Component Test</p>
        </TestDiv>
    );
};
