import styled from '@emotion/styled';
import { Button } from '@/src/components/atoms/Button';



const Background = styled.div`
    background-color: ${({ theme }) => theme.colorsPalette.commonWhite};
    display: flex;
    flex-direction: column;
    padding:35px; 
    vertical-align:middle;
    @media only screen and (max-width: 680px) {
		margin-left:0px;
		margin-right:px;
		height:100%;
		width:300px;
	}
`;
const Title = styled.div`
    font-size: 15px;
    font: 600;
    color: ${({ theme }) => theme.colorsPalette.tertiaryFontColor};
    margin-top: 10px;
    margin-bottom: 5px;
    
    
`;
const SubTitle = styled.div`
    color: ${({ theme }) => theme.colorsPalette.quaternaryFontColor};
    font-size: 20px;
    font-weight: 900;
    margin-bottom: 10px;
    
`;
const Opis = styled.div`
    font-size: 15px;
    color: ${({ theme }) => theme.colorsPalette.quinaryFontColor};
    margin-bottom: 15px;
    width: 250px;
    
`;
const InputContainer = styled.div`
    display: flex;
    max-width: 100%;
    align-items: stretch;
    flex-direction: column;
    text-align: center;
    
    
    
`;

const Input = styled.input`
    background: ${({ theme }) => theme.colorsPalette.tertiaryBackgroundColor};
    padding: 30px 90px;
    color: ${({ theme }) => theme.colorsPalette.tertiaryFontColor};
    font-size: 15px;
    border: 0;
    @media only screen and (max-width: 680px) {
       padding: 10px 70px;
	}
`;

export const Signup = () => {
    return (
       
        <Background>
            <Title>ZAPISZ SIĘ</Title>
            <SubTitle>Zapisz się do koła</SubTitle>
            <Opis>Odkryj jak naprawdę pracuje front-end developer</Opis>
            <InputContainer>
                <Input placeholder="E-mail address" />
                <Button>ZGŁASZAM SIĘ</Button>
            </InputContainer>
        </Background>
        
    );
};
