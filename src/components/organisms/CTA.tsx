import styled from '@emotion/styled';
import { Signup } from '../molecules/Signup';

const Container = styled.div`
    background-color:#1633AB;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    width:100%;
    padding:60px 20%; 
    `;
const Title = styled.div`
    font-size:15px;
    font:bold;
    color:#507EE0;
    font-weight:600;
`;
const SubTitle = styled.div`
    color:#FFFFFF;
    font-size:30px;
    font-weight:bold;
    line-height: 1;
    margin-top:20px;
    margin-bottom:30px;
`;
const Description = styled.div`
    font-size: 15px;
    color:#A7B1DB;

`;
const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;

`
const Spacer = styled.div`
    width:40%;
`

export const CTA = () => {
    return (
        <Container>
            <Column>
            <Title>SING UP</Title>
            <SubTitle>Nie czekaj! Świat już nie czeka.</SubTitle>
            <Description>Jeżeli jeszcze zastanawiasz czy warto dołączyć do międzywydziałowego koła JAMStack PB, nie trać ani chwili i zapisz się do nas</Description>
            </Column>
            <Spacer/>
            <Signup/>
        </Container>
    );           
};
