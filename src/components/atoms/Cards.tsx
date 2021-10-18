import styled from '@emotion/styled';

const Main = styled.div`
    background: ${({ theme }) => theme.colorsPalette.secondaryBackgroundColor};
    color: ${({ theme }) => theme.colorsPalette.commonWhite};
    padding: 30px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Rail = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    & > div {
        width: 15%;
        height: 420px;
        margin: 100px 40px;
    }
    @media (max-width: 780px) {
        & {
            flex-wrap: wrap;
        }
        & > div {
            max-width: 250px;
            width: 70%;
            height: 380px;
            margin: 50px 40px;
        }
    }
`;

const Card = styled.div`
    background: ${({ theme }) => theme.colorsPalette.commonWhite};
    padding: 0 0 50px 0;
    min-width: 180px;
    box-shadow: 2px 6px 30px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    :hover {
        box-shadow: 2px 6px 30px rgba(0, 0, 0, 0.4);
    }
`;

const CardImage = styled.div`
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 250px;
    @media only screen and (max-width: 680px) {
       height:230px;
	}
`;

const card_1 = 'images/card1.svg';

const card_2 = 'images/card2.svg';

const card_3 = 'images/card3.svg';

const CardTitle = styled.h2`
    padding: 15px 0;
    color: ${({ theme }) => theme.colorsPalette.quaternaryFontColor};
    font-size: 20px;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
`;

const CardText = styled.p`
    padding: 0 10px;
    color: ${({ theme }) => theme.colorsPalette.quinaryFontColor};
    font-size: 15px;
    text-align: center;
`;

export const Cards = () => {
    return (
        <Main>
            <Rail>
                <Card>
                    <CardImage>
                        <img src={card_1} style={{ border: 'none', padding: '10px ' }}></img>
                    </CardImage>
                    <CardTitle>Front-end</CardTitle>
                    <CardText>
                        {' '}
                        HTML, CSS, JS? Te technologie same w sobie już nie wystarczają. Twórz korzystając z React
                    </CardText>
                </Card>
                <Card>
                    <CardImage>
                        <img src={card_2} style={{ border: 'none', padding: '10px ' }}></img>
                    </CardImage>
                    <CardTitle>CLI tooling</CardTitle>
                    <CardText> Czy korzystasz z narzędzi w terminalu? Odkryj ich moc i zacznij pisać swoje.</CardText>
                </Card>
                <Card>
                    <CardImage>
                        <img src={card_3} style={{ border: 'none', padding: '10px ' }}></img>
                    </CardImage>
                    <CardTitle>Automatyzacja</CardTitle>
                    <CardText> Znasz drogę na skróty? Jeśli nie, pokażemy Ci jak użyć narzędzi low code.</CardText>
                </Card>
            </Rail>
        </Main>
    );
};
