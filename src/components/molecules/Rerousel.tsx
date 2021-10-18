import styled from '@emotion/styled';
import React, { useRef } from 'react';
import { Rerousel } from 'rerousel';

const Main = styled.div`
    background: #f7f7f9;
    color: #fdf;
    padding: 10px;
    padding-bottom: 20px;
    width: 100%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
`;

const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    min-width: 80px;
    background-color: #f7f7f9;
    @media only screen and (max-width: 680px) {
	min-width:10px;
    width:33%;
	}
`;
const Technologybarnapis = styled.div`
    display: flex;
    padding:10px;
    margin-top:50px;
    flex-direction: column;
	}
`;
const Napis = styled.h1`
    color: ${({ theme }) => theme.colorsPalette.primaryBackgroundColor};
    font-weight: 650;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom:50px;
 
`
const Technologybar = styled.div`
    filter:grayscale(1);
`
const Images: { imageUrl: string; link: string; key: string }[] = [
    {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
        link: 'https://www.typescriptlang.org/',
        key: '1',
    },
    {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
        link: 'https://nextjs.org/',
        key: '2',
    },
    {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        link: 'https://reactjs.org/',
        key: '3',
    },
    {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Ei-sc-github.svg',
        link: 'https://github.com/',
        key: '4',
    },
    {
        imageUrl: 'https://external-content.duckduckgo.com/ip3/discord.com.ico',
        link: 'https://discord.com/',
        key: '5',
    },
    {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg',
        link: 'https://graphql.org/',
        key: '6',
    },
    {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
        link: 'https://www.javascript.com/',
        key: '7',
    },
    {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
        link: 'https://en.wikipedia.org/wiki/HTML',
        key: '8',
    },
    {
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
        link: 'https://en.wikipedia.org/wiki/CSS',
        key: '9',
    },
];
interface LogoCloudProps {
    images: Array<{ imageUrl: string; link: string; key: string }>;
}

export const Techbar: React.FC<LogoCloudProps> = ({ images }) => {
    const customerLogo = useRef(null);

    return (
        <Main>
            <Technologybarnapis>
                <Napis>Technologie, których używamy</Napis>
            </Technologybarnapis>
                <Technologybar>
                <Rerousel itemRef={customerLogo} interval={3000} stop={false}>
                        {Images.map(({ imageUrl, link, key }) => {
                            return (
                                <Item ref={customerLogo} key={key}>
                                    <a href={link}>
                                        <img
                                            style={{
                                                padding: '10px',
                                                background: 'transparrent',
                                                height: '100px',
                                                width: '100px',
                                                display: 'flex',
                                                justifyContent: 'center',
                                            }}
                                            src={imageUrl}
                                        />
                                    </a>
                                </Item>
                            );
                        })}
                    </Rerousel>
            </Technologybar>
        </Main>
    );
};
