import styled from '@emotion/styled';

const Temacik = styled.div`
    width: 70%;
    margin-bottom: 20px;
    background: transparent;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    h1 {
        color: #78a0fa;
        font-size: 2.6rem;
    }
    h2 {
        color: #78a0fa;
        font-size: 2.4rem;
    }
    h3 {
        color: #78a0fa;
        font-size: 2.2rem;
    }
    h4 {
        color: #78a0fa;
        font-size: 2rem;
    }
    h5 {
        color: #78a0fa;
        font-size: 1.8rem;
    }
    h6 {
        color: #78a0fa;
        font-size: 1.6rem;
    }
    p {
        color: #7e849d;
        font-size: large;
        & > img {
            margin: 0 auto;
            padding-top: 2rem;
        }
    }
    figcaption {
        justify-content: center;
        display: flex;
        padding-bottom: 2rem;
    }
    blockquote {
        margin: 1.6rem 0.8rem;
        padding-left: 2rem;
        background: #f6f6f6;
        border-left: 4px solid #15159b;
    }
    table {
        border-style: solid;
        border-color: #78a0fa;
        border-width: 4px;
        margin: 0 auto;
        & > thead > tr {
            border-color: #78a0fa;
            border-width: 4px;
            & > th {
                border-color: #78a0fa;
                border-width: 2px;
            }
        }
        & > tbody > tr {
            border-width: 2px 0px 0px 0px;
            border-color: #78a0fa;
        }
        & > tbody > tr > td {
            border-width: 0 2px 0;
            border-color: #78a0fa;
        }
    }
    pre {
        background: #f6f6f6;
        padding: 1rem;
    }
    ul {
        padding: 1rem 2rem;
        font-family: inherit;
    }
    li::marker {
        content: '•';
        color: #78a0fa;
    }
    li {
        padding-left: 0.5rem;
        & > p {
            display: inline-block;
        }
        & > ul {
            padding: 0 1rem;
            & > li::marker {
                content: '○';
                color: #78a0fa;
            }
        }
    }

    ol {
        padding: 1rem 2rem;
        & > li {
            counter-increment: li;
            & > ol {
                padding: 0 1rem;
            }
        }
        & > li::marker {
            content: counter(li);
            color: #78a0fa;
        }
    }
`;

export const MarkdownContent: React.FC = ({ children }) => {
    return <Temacik>{children}</Temacik>;
};

export default MarkdownContent;
