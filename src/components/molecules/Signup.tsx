import React from "react";

const Background: React.FC = ({ children }) => (
    <div className="bg-white flex flex-col w-84 max-w-full h-80 max-h-80 justify-center text-left items-center rounded-md px-10">{children}</div>
);
const Container: React.FC = ({ children }) => (
    <div className="max-w-64">
        {children}
    </div>
);
const Title: React.FC = ({ children }) => 
<div className="text-base font-bold text-tertiaryFontColor mt-2 mb-1 max-w-full">{children}</div>;

const SubTitle: React.FC = ({ children }) => (
    <div className="text-xl font-black text-quaternaryFontColor mb-1 max-w-full">{children}</div>
);

const Description: React.FC = ({ children }) => (
    <div className="text-base font-bold text-quinaryFontColor mb-1 max-w-full">{children}</div>
);

const InputContainer: React.FC = ({ children }) => (
    <a className="flex flex-col justify-center max-w-full py-2">{children}</a>
);

const Input: React.FC<{ placeHolder: string }> = ({ children, placeHolder }) => (
    <input className="max-w-full bg-white text-black border-0 py-4 text-center" placeholder={placeHolder}>
        {children}
    </input>
);

const Button: React.FC = ({ children }) => (
    <a
        className="flex justify-center py-4 items-center bg-quaternaryBackgroundColor max-w-full text-black font-bold text-base uppercase text-center cursor-pointer border-0 block
 hover:bg-primaryHoverColor focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
    >
        {children}
    </a>
);

export const Signup = () => {
    return (
        <Background>
            <Container>
                <Title>ZAPISZ SIĘ</Title>
                <SubTitle>Zapisz się do koła</SubTitle>
                <Description>Odkryj jak naprawdę pracuje front-end developer</Description>
                <InputContainer>
                    <Input placeHolder="E-maill address" />
                    <Button>ZGŁASZAM SIĘ</Button>
                </InputContainer>
            </Container>
        </Background>
    );
};
