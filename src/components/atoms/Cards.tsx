import styled from '@emotion/styled';
const card_1 = 'images/card1.svg';
const card_2 = 'images/card2.svg';
const card_3 = 'images/card3.svg';

const Main = styled.div`
    font-family: 'Ubuntu', sans-serif;
    background: ${({ theme }) => theme.colorsPalette.secondaryBackgroundColor};
    color: ${({ theme }) => theme.colorsPalette.commonWhite};
    padding: 30px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    & span {
        color: #e8a438;
    }
`;

const Rail = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;

    @media (max-width: 780px) {
        & {
            flex-direction: column;
        }
        & > div {
            max-width: 60%;
            margin: 30px 0;
        }
    }
`;

const Card = styled.div`
    border-radius: 15px;
    background: ${({ theme }) => theme.colorsPalette.commonWhite};
    padding: 0 0 20px 0;
    max-width: 25%;
    box-shadow: 0 0 25px rgb(0 0 0 / 50%);
`;

const CardImage = styled.div`
    margin-bottom: 20px;
    height: 200px;
`;
const CardDescription = styled.div`
    padding: 20px;
`;

const CardTitle = styled.div`
    width: 100%;

    color: ${({ theme }) => theme.colorsPalette.quaternaryFontColor};
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    border-bottom: 1px solid #afacac;
`;

const CardText = styled.p`
    font-weight: 500;

    padding-top: 12px;
    color: ${({ theme }) => theme.colorsPalette.quinaryFontColor};
    font-size: 15px;
`;
const StyledImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const CardButton = styled.div`
    cursor: pointer;
    margin-top: 24px;
    text-align: center;
    padding: 6px;
    margin-top: 48px;
    border-radius: 5px;
    position: relative;
    font-size: 15px;
    color: #375275;
    font-weight: 600;
    border: 1px solid #375275;
    overflow: hidden;
    z-index: 1;
    transition: color 1.4s;
    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 0;
        background: #375275;
        z-index: -1;
        transition: 0.9s;
        border-radius: 0 0 50% 50%;
    }
    &:hover {
        color: #e8a438;
    }
    &:hover::before {
        height: 190%;
    }
`;

export const Cards = () => {
    return (
        <Main>
            <Rail>
                <Card>
                    <CardImage>
                        <StyledImg src={card_1} />
                    </CardImage>
                    <CardDescription>
                        <CardTitle>
                            <span>Front</span>-end
                        </CardTitle>
                        <CardText>
                            {' '}
                            HTML, CSS, JS? Te technologie same w sobie już nie wystarczają. Twórz korzystając z React
                        </CardText>
                        <CardButton>Przeczytaj więcej</CardButton>
                    </CardDescription>
                </Card>
                <Card>
                    <CardImage>
                        <StyledImg src={card_2} />
                    </CardImage>
                    <CardDescription>
                        <CardTitle>
                            CLI <span>tooling</span>
                        </CardTitle>
                        <CardText>
                            {' '}
                            Czy korzystasz z narzędzi w terminalu? Odkryj ich moc i zacznij pisać swoje.
                        </CardText>
                        <CardButton>Przeczytaj więcej</CardButton>
                    </CardDescription>
                </Card>

                <Card>
                    <CardImage>
                        <StyledImg src={card_3} />
                    </CardImage>
                    <CardDescription>
                        <CardTitle>Automatyzacja</CardTitle>
                        <CardText> Znasz drogę na skróty? Jeśli nie, pokażemy Ci jak użyć narzędzi low code.</CardText>
                        <CardButton>Przeczytaj więcej</CardButton>
                    </CardDescription>
                </Card>
            </Rail>
        </Main>
    );
};
