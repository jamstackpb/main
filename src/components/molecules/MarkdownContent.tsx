import styled from '@emotion/styled';

const Temacik = styled.div`
    width: 70%;
    margin-bottom: 20px;
    h1 {
        color: #78a0fa;
    }
    h2 {
        color: #78a0fa;
    }
    h3 {
        color: #78a0fa;
    }
    h4 {
        color: #78a0fa;
    }
    h5 {
        color: #78a0fa;
    }
    h6 {
        color: #78a0fa;
    }
    p {
        color: #7e849d;
    }
`;

export const MarkdownContent: React.FC = ({ children }) => {
    return <Temacik>{children}</Temacik>;
};

export default MarkdownContent;
