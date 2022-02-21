import styled from '@emotion/styled';

const Temacik = styled.div`
    width: 70%;

    margin-bottom: 20px;
    background: transparent;
    font-weight: bold;
    h1 {
        color: #78a0fa;
        font-size: 2.5rem;
        margin-top: 2rem;
        margin-bottom: 0.5rem;
    }
    h2 {
        color: #78a0fa;
        font-size: 2.375rem;
        margin-bottom: 0.5rem;
    }
    h3 {
        color: #78a0fa;
        font-size: 2.25rem;
        margin-bottom: 0.5rem;
    }
    h4 {
        color: #78a0fa;
        font-size: 2.125rem;
        margin-bottom: 0.5rem;
    }
    h5 {
        color: #78a0fa;
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }
    h6 {
        color: #78a0fa;
        font-size: 1.75rem;
        margin-bottom: 0.5rem;
    }
    p {
        color: #52525b;
        font-size: 1.625rem;
        font-weight: 400;
        ::first-letter {
            color: #4338ca;
            font-weight: 700;
        }
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
        -webkit-box-shadow: 5px 0px 15px 0px rgba(152, 160, 235, 1);
        -moz-box-shadow: 5px 0px 15px 0px rgba(152, 160, 235, 1);
        box-shadow: 5px 0px 15px 0px rgba(152, 160, 235, 1);
    }
    table {
        border-style: solid;
        border-color: #78a0fa;
        border-width: 4px;
        margin: 1rem auto;
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
        margin: 1rem 2rem;
        -webkit-box-shadow: 0px 0px 15px 0px rgba(152, 160, 235, 1);
        -moz-box-shadow: 0px 0px 15px 0px rgba(152, 160, 235, 1);
        box-shadow: 0px 0px 15px 0px rgba(152, 160, 235, 1);
    }
    ul {
        padding: 1rem 2rem;
        font-family: inherit;
        & > li {
            padding-top: 0;
            padding-bottom: 0%;
        }
    }
    li::marker {
        content: '•';
        color: #78a0fa;
    }
    li {
        padding-left: 0.5rem;
        justify-content: center;
        & > p {
            display: inline-block;
        }
        & > ul {
            padding: 0 1rem;
            & > li::marker {
                color: #78a0fa;
                content: '⚬';
            }
        }
    }
    ol {
        counter-reset: item;
        padding: 0 1rem;
        & > li {
            display: block;
        }
        & > li:before {
            content: counters(item, '.') ' ';
            counter-increment: item;
            color: #78a0fa;
        }
    }
    input[type='checkbox'] {
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        width: 2rem;
        height: 2rem;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        transform: translateX(-1rem);
        background-color: #e11d48;
        border-radius: 25%;
        border: 3px solid #881337;
        text-align: center;
        justify-content: center;
    }
    input[type='checkbox']:checked {
        background-color: #34d399;
        border-color: #065f46;
    }
    input[type='checkbox']:checked:before {
        content: '✓';
        font-weight: bold;
        color: white;
    }
    input[type='checkbox']:before {
        content: '✘';
        font-weight: bold;
        color: white;
    }
`;

export const MarkdownContent: React.FC = ({ children }) => {
    return <Temacik className="mx-auto ">{children}</Temacik>;
};

export default MarkdownContent;
