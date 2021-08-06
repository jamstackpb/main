import styled from '@emotion/styled';
import { Button } from '@/src/components/atoms/Button';


export const Signup = () => {
    const Background = styled.div`
        background-color:#fff;
        display:flex;
        flex-direction:column;
    `;
    const Title = styled.div`
            font-size:15px;
            font:bold;
            color:#25acd9;
            margin-top:10px;
            margin-bottom:5px;
            font-weight:600;
    `;
    const SubTitle = styled.div`
            color:blue;
            font-size:23px;
            font-weight:900;
            margin-bottom:10px;
    `;
    const Opis = styled.div`
            font-size: 15px;
            color:#878787;
            margin-bottom:15px;
            width:250px;
    `;
    const InputContainer = styled.div`
            display:flex;
            max-width:100%;
            align-items:stretch;
            flex-direction:column;
            text-align:center;
    `;

    const Input = styled.input`
            background: #edf3f5;
            padding:15px 10px;
            color:#25acd9;
            font-size:14px;
            border:0
    `;

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
