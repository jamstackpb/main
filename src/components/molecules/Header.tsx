import styled from '@emotion/styled';
import { Input } from '../atoms/Input';
import { colors } from '@/src/styles';
import { Button } from '../atoms/Button';
import full_logo1 from '@/public/images/full_logo1.svg';
import { MenuIcon } from '@/src/components/atoms/MenuIcon';
import { css } from '@emotion/react';

const Container = styled.div<{ isHomepage: boolean }>`
    width: 100%;
    background: ${colors.nav_color};
    color: #fff;
    font-size: 18px;
    ${({ isHomepage }) =>
        isHomepage &&
        css`
            padding: 100px 40px;
            display: flex;
            justify-content: center;
            align-items: center;
        `};
`;
const Logo = styled.div<{ isHomepage?: boolean }>`
    background-image: url(${full_logo1.src});
    ${({ isHomepage }) =>
        isHomepage
            ? css`
                  width: 168px;
                  height: 50px;
                  margin: 28px;
                  position: absolute;
                  top: 0;
                  left: 0;
              `
            : css`
                  width: 168px;
                  height: 50px;
                  margin-left: 30px;
              `};
`;
const Motto = styled.div`
    max-width: 640px;
    padding: 20px;
`;
const SubTitle = styled.p`
    color: #fff;
    font-weight: 300;
    font-size: 18px;
    margin-bottom: 25px;
`;
const Title = styled.h1`
    font-weight: 900;
    color: #fff;
    line-height: 1.2;
    font-size: 48px;
    margin-bottom: 25px;
`;
const InputContainer = styled.div`
    display: flex;
    max-width: 100%;
    align-items: stretch;
`;

const Nav = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 11vh;
`;

interface HeaderTestProps {
    isHomepage?: boolean;
}

export const Header: React.FC<HeaderTestProps> = ({ isHomepage = false }) => {
    return (
        <>
            <Container isHomepage={isHomepage}>
                {isHomepage ? (
                    <>
                        <Logo isHomepage={isHomepage} />
                        <Motto>
                            <SubTitle>Najnowsze technologie TypeScript, React, NodeJS i inne</SubTitle>
                            <Title>Naucz się robić front-end wśród najlepszych </Title>
                            <InputContainer>
                                <Input style={{ flex: 1 }} placeholder="podaj email" />
                                <Button>Zapisz się</Button>
                            </InputContainer>
                        </Motto>{' '}
                    </>
                ) : (
                    <>
                        {' '}
                        <Nav>
                            <Logo />
                            <MenuIcon />
                        </Nav>
                        <h1
                            style={{
                                textAlign: 'center',
                                padding: '30px 0',
                                color: `${colors.nav_color}`,
                                backgroundColor: 'white',
                            }}
                        >
                            Projekty
                        </h1>
                    </>
                )}
            </Container>
        </>
    );
};
