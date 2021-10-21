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
    button,
    select {
        cursor: pointer;
    }

    /* OPTIONAL */
    /* this ensures that 1rem = 10px, makes responsiveness a lot easier with below settings */
    html {
        text-size-adjust: none;
        -webkit-text-size-adjust: none;
    }
    input,
    select {
        font-family: 'Barlow', sans-serif;
        font-size: 1.6rem;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }
`;
