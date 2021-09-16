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
    &.column {
        flex-direction: column;
    }

    &.column > div {
        max-width: 250px;
        width: 70%;
        height: 380px;
        margin: 50px 40px;
    }
    &.row {
        flex-direction: row;
    }
    &.row > div {
        width: 15%;
        height: 420px;
        margin: 100px 40px;
    }
`;

const Card = styled.div`
    background: ${({ theme }) => theme.colorsPalette.commonWhite};
    padding: 0 0 50px 0;
    min-width: 180px;
`;

const CardImageOne = styled.div`
    margin-bottom: 20px;
    width: 100%;
    height: 200px;
    background-color: ${({ theme }) => theme.colorsPalette.quinaryBackgroundColor};
`;
const CardImageTwo = styled.div`
    margin-bottom: 20px;
    width: 100%;
    height: 200px;
    background-color: ${({ theme }) => theme.colorsPalette.senaryBackgroundColor};
`;
const CardImageThree = styled.div`
    margin-bottom: 20px;
    width: 100%;
    height: 200px;
    background-color: ${({ theme }) => theme.colorsPalette.septenaryBackgroundColor};
`;

const CardTitle = styled.h2`
    padding: 15px 0;
    color: ${({ theme }) => theme.colorsPalette.quaternaryFontColor};
    font-size: 15px;
    text-align: center;
    text-transform: uppercase;
`;

const CardText = styled.p`
    padding: 0 10px;
    color: ${({ theme }) => theme.colorsPalette.quinaryFontColor};
    font-size: 15px;
    text-align: center;
`;

interface CardsProps {
    winSize: number;
}

export const Cards: React.FC<CardsProps> = ({ winSize }) => {
    const isTight = winSize < 780 ? 'column' : 'row';
    return (
        <Main>
            <Rail className={isTight}>
                <Card>
                    <CardImageOne></CardImageOne>
                    <CardTitle>Front-end</CardTitle>
                    <CardText>
                        {' '}
                        HTML, CSS, JS? Te technologie same w sobie już nie wystarczają. Twórz korzystając z React
                    </CardText>
                </Card>
                <Card>
                    <CardImageTwo></CardImageTwo>
                    <CardTitle>CLI tooling</CardTitle>
                    <CardText> Czy korzystasz z narzędzi w terminalu? Odkryj ich moc i zacznij pisać swoje.</CardText>
                </Card>
                <Card>
                    <CardImageThree></CardImageThree>
                    <CardTitle>Automatyzacja</CardTitle>
                    <CardText> Znasz drogę na skróty? Jeśli nie, pokażemy Ci jak użyć narzędzi low code.</CardText>
                </Card>
            </Rail>
        </Main>
    );
};
