import styled from '@emotion/styled';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';
import { Logo } from '@/src/components/molecules/Logo';
import { MenuIcon } from '@/src/components/atoms/MenuIcon';
import { css } from '@emotion/react';

const Container = styled.div<{ isHomepage: boolean }>`
    width: 100%;
    background: ${({ theme }) => theme.colorsPalette.backgroundColors.primary};
    color: ${({ theme }) => theme.colorsPalette.common.white};
    font-size: ${({ theme }) => theme.font.fontSize.quinary};
    ${({ isHomepage }) =>
        isHomepage &&
        css`
            padding: 100px 40px;
            display: flex;
            justify-content: center;
            align-items: center;
        `};
`;

const Motto = styled.div`
    max-width: 640px;
    padding: 20px;
`;
const SubTitle = styled.p`
    color: ${({ theme }) => theme.colorsPalette.common.white};
    font-weight: ${({ theme }) => theme.font.fontWeight.senary};
    font-size: ${({ theme }) => theme.font.fontSize.quaternary};
    margin-bottom: 25px;
`;
const Title = styled.h1`
    font-weight: ${({ theme }) => theme.font.fontWeight.primary};
    color: ${({ theme }) => theme.colorsPalette.common.white};
    font-size: ${({ theme }) => theme.font.fontSize.primary};
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
const H1 = styled.h1`
    text-align: center;
    padding: 30px 0;
    color: ${({ theme }) => theme.colorsPalette.backgroundColors.primary};
    background-color: ${({ theme }) => theme.colorsPalette.common.white};
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
                        <Logo />
                        <Motto>
                            <SubTitle>Najnowsze technologie TypeScript, React, NodeJS i inne</SubTitle>
                            <Title>Naucz się robić front-end wśród najlepszych </Title>
                            <InputContainer>
                                <Input style={{ flex: 1 }} placeholder="podaj email" />
                                <Button>Zapisz się</Button>
                            </InputContainer>
                        </Motto>
                    </>
                ) : (
                    <>
                        <Nav>
                            <MenuIcon />
                        </Nav>
                        <H1>Projekty</H1>
                    </>
                )}
            </Container>
        </>
    );
};
