import styled from '@emotion/styled';
import { Button } from '@/src/components/atoms/Button';

const Background = styled.div`
    background-color: ${({ theme }) => theme.colorsPalette.common.white};
    display: flex;
    flex-direction: column;
`;
const Title = styled.div`
    font-size: ${({ theme }) => theme.font.fontSize.septenary};
    font: ${({ theme }) => theme.font.fontWeight.tertiary};
    color: ${({ theme }) => theme.colorsPalette.fontColors.tertiary};
    margin-top: 10px;
    margin-bottom: 5px;
`;
const SubTitle = styled.div`
    color: ${({ theme }) => theme.colorsPalette.fontColors.quaternary};
    font-size: ${({ theme }) => theme.font.fontSize.quaternary};
    font-weight: ${({ theme }) => theme.font.fontWeight.primary};
    margin-bottom: 10px;
`;
const Opis = styled.div`
    font-size: ${({ theme }) => theme.font.fontSize.septenary};
    color: ${({ theme }) => theme.colorsPalette.fontColors.quinary};
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
    background: ${({ theme }) => theme.colorsPalette.backgroundColors.tertiary};
    padding: 15px 10px;
    color: ${({ theme }) => theme.colorsPalette.fontColors.tertiary};
    font-size: ${({ theme }) => theme.font.fontSize.septenary};
    border: 0;
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
