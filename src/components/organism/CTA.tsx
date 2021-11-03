import { Signup } from '../molecules/Signup';
import { Layout } from '@/src/layouts';

const Background: React.FC = ({ children }) => (
    <div className="bg-primaryBackgroundColor py-20 px-14">
        {children}
    </div>
);

const Container: React.FC = ({ children }) => (
    <div className="flex flex-wrap justify-center gap-x-32 gap-y-6">{children}</div>
);

const Column: React.FC = ({ children }) => <div className="flex flex-col max-w-full justify-top pt-6">{children}</div>;

const Title: React.FC = ({ children }) => (
    <div className="font-bold text-primaryFontColor text-1xl max-w-full pb-1">{children}</div>
);

const SubTitle: React.FC = ({ children }) => (
    <div className="text-white text-4xl font-bold w-full max-w-full pb-5">{children}</div>
);

const Description: React.FC = ({ children }) => <div className="max-w-full text-xl text-white w-102">{children}</div>;

export const CTA = () => {
    return (
        <Background>
            <Layout>
                <Container>
                    <Column>
                        <Title>SING UP</Title>
                        <SubTitle>Nie czekaj! Świat już nie czeka.</SubTitle>
                        <Description>
                            Jeżeli jeszcze zastanawiasz czy warto dołączyć do międzywydziałowego koła JAMStack PB, nie
                            trać ani chwili i zapisz się do nas
                        </Description>
                    </Column>
                    <Signup />
                </Container>
            </Layout>
        </Background>
    );
};
