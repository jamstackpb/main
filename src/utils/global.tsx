import { css } from '@emotion/react';

export const globalStyle = css`
    @import url('https://fonts.googleapis.com/css?family=Barlow:100,300,400,500,600,700,800,900&display=swap');

    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
        transition: 0.3s;
    }

    body,
    button {
        box-sizing: border-box;
        font-family: 'Barlow', sans-serif;
    }

    a:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    button:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    button:active {
        transform: translateY(2px);
    }

    button,
    select {
        cursor: pointer;
    }

    /* OPTIONAL */
    /* this ensures that 1rem = 10px, makes responsiveness a lot easier with below settings */
    html {
        font-size: 62.5%;
        text-size-adjust: none;
        -webkit-text-size-adjust: none;
    }
    @media (max-width: 1230px) {
        html {
            font-size: 50%;
        }
    }

    @media (max-width: 600px) {
        html {
            font-size: 40%;
        }
    }

    @media (max-width: 350px) {
        html {
            font-size: 33%;
        }
    }

    @media (min-width: 1700px) {
        html {
            font-size: 70%;
        }
    }

    @media (min-width: 2000px) {
        html {
            font-size: 90%;
        }
    }

    @media (min-width: 3800px) {
        html {
            font-size: 150%;
        }
    }

    input,
    select {
        font-family: 'Barlow', sans-serif;
        font-size: 1.6rem;
    }

    ul {
        list-style: none;
    }

    h1 {
        font-size: 5rem;
    }
    h2 {
        font-size: 3.8rem;
    }
    h3 {
        font-size: 3rem;
    }
    h4 {
        font-size: 2.2rem;
    }

    p {
        font-size: 1.6rem;
    }

    a {
        text-decoration: none;
        color: white;
        font-size: 1.6rem;
    }
`;
