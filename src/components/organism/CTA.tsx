import styled from '@emotion/styled';
import { Signup } from '../molecules/Signup';

const Container = styled.div`
    background-color: #1633ab;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    padding: 90px 15%;
    gap: 15%;
    @media only screen and (max-width: 680px) {
		display:flex-wrap;
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
        padding: 90px 15%;
        gap: 15%;
	}
`;
const Title = styled.div`
    font-size: 15px;
    font-weight: bold;
    color: #507ee0;
    font-weight: 600;
`;
const SubTitle = styled.div`
    color: #ffffff;
    font-size: 30px;
    font-weight: bold;
    line-height: 1;
    margin-top: 20px;
    margin-bottom: 30px;
`;
const Description = styled.div`
    font-size: 15px;
    color: #a7b1db;
`;
const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const CTA = () => {
    return (
        <Container>
            <Column>
                <Title>SING UP</Title>
                <SubTitle>Nie czekaj! Świat już nie czeka.</SubTitle>
                <Description>
                    Jeżeli jeszcze zastanawiasz czy warto dołączyć do międzywydziałowego koła JAMStack PB, nie trać ani
                    chwili i zapisz się do nas
                </Description>
            </Column>
            <Signup />
        </Container>
    );
};
