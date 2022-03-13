import * as React from 'react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';
init('be60f020cdb0594e6239a85d438f7da0');

const Container: React.FC = ({ children }) => {
    return <div className="bg-primaryBackgroundColor pt-24 pb-24">{children}</div>;
};

const Motto: React.FC = ({ children }) => (
    <div className="max-w-full w-full flex flex-col items-center p-5">{children}</div>
);

const SubTitle: React.FC = ({ children }) => (
    <p className="max-w-full w-150 font-light text-white text-xl mb-6">{children}</p>
);

const Title: React.FC = ({ children }) => (
    <div className="max-w-full w-150 tracking-tight text-left font-black leading-normal text-white text-5xl pt-1 pb-6">
        {children}
    </div>
);

const InputContainer: React.FC = ({ children }) => (
    <div className="max-w-full w-150 flex flex-row pt-2 -ml-3">{children}</div>
);

const Input: React.FC<{ placeHolder: string }> = ({ placeHolder }) => (
    <input
        type="email"
        name="user_email"
        className="max-w-full bg-white w-full text-black border-0 p-7 ml-2"
        placeholder={placeHolder}
    ></input>
);

const Button: React.FC = ({ children }) => (
    <input
        value="Send"
        type="submit"
        className="max-w-full flex justify-center items-center bg-quaternaryBackgroundColor w-2/5 text-black font-bold text-base uppercase text-center cursor-pointer border-0
 hover:bg-primaryHoverColor focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
    ></input>
);

const Button_send_again: React.FC = ({ children }) => (
    <input
        value="RESEND"
        className="max-w-full flex justify-center items-center bg-quaternaryBackgroundColor w-3/5 text-black font-bold text-base uppercase text-center cursor-pointer border-0
 hover:bg-primaryHoverColor focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
    ></input>
);

interface HeaderProps {
    isHomepage?: boolean;
}

export const Header: React.FC<HeaderProps> = () => {
    const [isSend, setIsSend] = useState(false);
    const form = useRef() as React.MutableRefObject<HTMLFormElement>;

    function SendEmail(e: any) {
        e.preventDefault();

        emailjs.sendForm('service_jid49fz', 'template_ijvjd7x', form.current, 'user_vRYoj55RH0ZyhSZWOS5ju').then(
            (result) => {
                setIsSend(true);
                console.log(result.text);
            },
            (error) => {
                setIsSend(false);
                console.log(error.text);
            },
        );
    }

    return (
        <Container>
            <Motto>
                <SubTitle>Najnowsze technologie TypeScript, React, NodeJS i inne</SubTitle>
                <Title>Naucz się robić front-end wśród najlepszych </Title>
                {!isSend ? (
                    <form ref={form} onSubmit={SendEmail}>
                        <InputContainer>
                            <Input placeHolder="E-mail address" />
                            <Button>Zapisz się</Button>
                        </InputContainer>
                    </form>
                ) : (
                    <div>
                        <SubTitle>E-mail został wysłany!</SubTitle>

                        <button
                            onClick={() => {
                                setIsSend(false);
                            }}
                        >
                            <Button_send_again>RESEND</Button_send_again>
                        </button>
                    </div>
                )}
            </Motto>
        </Container>
    );
};
