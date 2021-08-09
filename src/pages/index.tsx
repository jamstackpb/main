import { Button } from '@/src/components/atoms/Button';
import { Full_Logo, Header } from '@/src/components/atoms/Header';
import { Input } from '@/src/components/atoms/Input';
import { Layout } from '@/src/layouts';
import styled from '@emotion/styled';

const SubTitle = styled.p`
    color: #fff;
    font-weight:300;
    font-size:18px;
    margin-bottom:25px;
`

const Title = styled.h1`
    font-weight:900;
    color:#fff;
    line-height:1.2;
    font-size:48px;
    margin-bottom:25px;
`

const Motto = styled.div`
    max-width:640px;
    padding:20px;
`

const InputContainer = styled.div`
    display:flex;
    max-width:100%;
    align-items:stretch;
`

const HomePage = () => {
    return (
        <Layout pageTitle="HomePage">
            <Header>
                <Full_Logo></Full_Logo>
                <Motto>
                    <SubTitle>Najnowsze technologie TypeScript, React, NodeJS i inne</SubTitle>
                    <Title>Naucz się robić front-end wśród najlepszych </Title> 
                    <InputContainer>
                        <Input style={{flex:1}} placeholder="podaj email" />
                        <Button>Zapisz się</Button>
                    </InputContainer>
                </Motto>
           </Header>
        </Layout>
    );
};

export default HomePage;
