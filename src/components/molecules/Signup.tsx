import * as React from 'react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { init } from '@emailjs/browser';
import { Header } from '../';
init('be60f020cdb0594e6239a85d438f7da0');

const Background: React.FC = ({ children }) => (
    <div className="bg-white flex flex-col w-84 max-w-full h-80 max-h-80 justify-center text-left items-center rounded-md px-10">
        {children}
    </div>
);
const Container: React.FC = ({ children }) => (
    <div className="bg-white flex flex-col w-84 max-w-full h-80 max-h-80 justify-center text-left items-center rounded-md px-10">
        {children}
    </div>
);
const Title: React.FC = ({ children }) => (
    <div className="text-base font-bold text-tertiaryFontColor mt-2 mb-1 max-w-full">{children}</div>
);

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
    <input
        type="email"
        name="user_email"
        className="max-w-full bg-white text-black border-0 py-4 text-center"
        placeholder={placeHolder}
    ></input>
);

const Button: React.FC = ({ children }) => (
    <input
        value="Send"
        type="submit"
        className="flex justify-center py-4 items-center bg-quaternaryBackgroundColor max-w-full text-black font-bold text-base uppercase text-center cursor-pointer border-0 block
 hover:bg-primaryHoverColor focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
    ></input>
);

const Button_send_again: React.FC = ({ children }) => (
    <input
        value="Resend"
        className="flex justify-center py-4 items-center bg-quaternaryBackgroundColor max-w-full text-black font-bold text-base uppercase text-center cursor-pointer border-0 block
  hover:bg-primaryHoverColor focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
    ></input>
);

export const Signup = () => {
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
        <Background>
            <Container>
                <Title>ZAPISZ SIĘ</Title>
                <SubTitle>Zapisz się do koła</SubTitle>
                <Description>Odkryj jak naprawdę pracuje front-end developer</Description>
                {!isSend ? (
                    <form ref={form} onSubmit={SendEmail}>
                        <InputContainer>
                            <Input placeHolder="E-mail address" />
                            <Button>Zapisz się</Button>
                        </InputContainer>
                    </form>
                ) : (
                    <div>
                        <Title>E-mail został wysłany!</Title>

                        <button
                            onClick={() => {
                                setIsSend(false);
                            }}
                        >
                            <Button_send_again>RESEND</Button_send_again>
                        </button>
                    </div>
                )}
            </Container>
        </Background>
    );
};
