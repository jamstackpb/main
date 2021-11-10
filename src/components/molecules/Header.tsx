import React from 'react';

const Container: React.FC = ({ children }) => {
    return <div className="bg-primaryBackgroundColor pt-24 pb-24">{children}</div>;
};

const Motto: React.FC = ({ children }) => (
    <div className="max-w-full w-full flex flex-col items-center p-5">{children}</div>
);

const SubTitle: React.FC = ({ children }) => (
    <p className="max-w-full w-102 font-light text-white text-xl mb-6">{children}</p>
);

const Title: React.FC = ({ children }) => (
    <div className="max-w-full w-102 tracking-tight text-left font-black leading-normal text-white text-5xl pt-1 pb-6">
        {children}
    </div>
);

const InputContainer: React.FC = ({ children }) => (
    <div className="max-w-full w-102 flex flex-row pt-2 -ml-3">{children}</div>
);

const Input: React.FC<{ placeHolder: string }> = ({ children, placeHolder }) => (
    <input className="max-w-full bg-white w-full text-black border-0 p-7 ml-2" placeholder={placeHolder}>
        {children}
    </input>
);

const Button: React.FC = ({ children }) => (
    <a
        className="max-w-full flex justify-center items-center bg-quaternaryBackgroundColor w-2/5 text-black font-bold text-base uppercase text-center cursor-pointer border-0
 hover:bg-primaryHoverColor focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
    >
        {children}
    </a>
);

interface HeaderProps {
    isHomepage?: boolean;
}

export const Header: React.FC<HeaderProps> = () => {
    return (
        <Container>
            <Motto>
                <SubTitle>Najnowsze technologie TypeScript, React, NodeJS i inne</SubTitle>
                <Title>Naucz się robić front-end wśród najlepszych </Title>
                <InputContainer>
                    <Input placeHolder="E-maill address" />
                    <Button>Zapisz się</Button>
                </InputContainer>
            </Motto>
        </Container>
    );
};
