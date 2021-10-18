import styled from '@emotion/styled';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';
import { Logo } from '@/src/components/molecules/Logo';
import { MenuIcon } from '@/src/components/atoms/MenuIcon';
import { css } from '@emotion/react';

const Container = styled.div<{ isHomepage: boolean }>`
    width: 100%;
    background: ${({ theme }) => theme.colorsPalette.primaryBackgroundColor};
    color: ${({ theme }) => theme.colorsPalette.commonWhite};
    font-size: 18px;
    ${({ isHomepage }) =>
        isHomepage === true
        ? css`
            padding: 100px 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            
        `
        : css`
                  position: sticky;
                  top:0px;
                  min-height: 8rem;
                  z-index: 99;
              `};
`;

const Motto = styled.div`
    width: 640px;
    max-width: 100%;
    padding: 20px;
`;
const SubTitle = styled.p`
    color: ${({ theme }) => theme.colorsPalette.commonWhite};
    font-weight: 300;
    font-size: 20px;
    margin-bottom: 25px;
`;
const Title = styled.h1`
    font-weight: 900;
    color: ${({ theme }) => theme.colorsPalette.commonWhite};
    font-size: 50px;
    margin-bottom: 25px;
    @media (max-width: 385px) {
        & {
            font-size: 25px;
        }
    }
`;
const InputContainer = styled.div`
    display: flex;
    width: 600px;
    max-width: 100%;
    align-items: stretch;
    flex-grow: (3, 1);
`;
interface HeaderProps {
    isHomepage?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isHomepage = false }) => {
    return (
        <>
            <Container isHomepage={isHomepage}>
                {isHomepage ? (
                    <>
                        <div style={{ position: 'absolute', top: 0, left: 0 }}>
                            <MenuIcon isHomepage />
                        </div>
                        <Logo />
                        <Motto>
                            <SubTitle>Najnowsze technologie TypeScript, React, NodeJS i inne</SubTitle>
                            <Title>Naucz się robić front-end wśród najlepszych </Title>
                            <InputContainer>
                                <Input style={{ flex: 3 }} placeholder="podaj email" />
                                <Button>Zapisz się</Button>
                            </InputContainer>
                        </Motto>
                    </>
                ) : (
                    <MenuIcon />
                )}
            </Container>
        </>
    );
};
