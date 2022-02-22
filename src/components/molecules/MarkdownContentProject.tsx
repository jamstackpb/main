import styled from '@emotion/styled';

const MarkdownComponent = styled.div`
    width: 100%;
    margin-top: 3rem;
    margin-bottom: 8rem;
    background: transparent;
    h1 {
        color: #2727a3;
        font-size: 2.125rem;
        font-weight: bold;
    }
    h2 {
        color: #2727a3;
        font-size: 1.875rem;
        font-weight: bold;
    }
    h3 {
        color: #2727a3;
        font-size: 1.5rem;
        font-weight: bold;
    }
    h4 {
        color: #2727a3;
        font-size: 1.25rem;
        font-weight: bold;
    }
    h5 {
        color: #2727a3;
        font-size: 1.125rem;
        font-weight: bold;
    }
    h6 {
        color: #2727a3;
        font-size: 1rem;
        font-weight: bold;
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
        border-left: 4px solid #2727a3;
    }
    table {
        border-style: solid;
        border-color: #2727a3;
        border-width: 4px;
        margin: 0 auto;
        & > thead > tr {
            border-color: #2727a3;
            border-width: 4px;
            & > th {
                border-color: #2727a3;
                border-width: 2px;
            }
        }
        & > tbody > tr {
            border-width: 2px 0px 0px 0px;
            border-color: #2727a3;
        }
        & > tbody > tr > td {
            border-width: 0 2px 0;
            border-color: #2727a3;
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
        color: #2727a3;
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
                color: #2727a3;
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
            color: #2727a3;
        }
    }
`;

export const MarkdownContentProject: React.FC = ({ children }) => {
    return <MarkdownComponent>{children}</MarkdownComponent>;
};

export default MarkdownContentProject;
