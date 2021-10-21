import styled from '@emotion/styled';
import React from 'react';

const Main: React.FC = ({ children }) => <div className="bg-white rounded-xl p-6 flex flex-col">{children}</div>;
const ImgCard: React.FC<{ src: string }> = ({ src }) => <img className="h-52 mb-6" src={src} />;
const CardTitle: React.FC = ({ children }) => (
    <div className="font-medium text-blue-darkfont text-xl text-center mb-4">{children}</div>
);

const CardText: React.FC = ({ children }) => <p className="mb-6 text-gray-700">{children}</p>;
const More: React.FC = ({ children }) => (
    <a className="bg-white block ml-auto px-4 py-2 text-blue-darkfont font-bold rounded-lg">{children}</a>
);

export const Card: React.FC<{ src: string; title: string; text: string }> = ({ src, title, text }) => {
    return (
        <Main>
            <ImgCard src={src} />
            <CardTitle>{title}</CardTitle>
            <CardText>{text}</CardText>
            <More>Więcej</More>
        </Main>
    );
};
