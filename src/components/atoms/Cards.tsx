import { Card } from '@/src/components/atoms/Card';
import React from 'react';
import { Layout } from '@/src/layouts';

const Rail: React.FC = ({ children }) => <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-10">{children}</div>;

const card_1 = 'images/card1.svg';
const card_2 = 'images/card2.svg';
const card_3 = 'images/card3.svg';

const CardsContainter: React.FC = ({children}) => 
    <div className="w-full text-center bg-tertiaryBackgroundColor py-40">{children}</div>
const CardsText: React.FC = ({ children }) => 
    <div className="text-blue-darkfont text-3xl font-bold text-center mb-10">{children}</div>;

export const Cards = () => {
    return (
        <CardsContainter>
            <Layout>
                <CardsText>Co robimy?</CardsText>
                <Rail>
                    <Card
                        src={card_1}
                        title="Front-end"
                        text="HTML, CSS, JS? Te technologie same w sobie już nie wystarczają. Twórz korzystając z React!"
                    />
                    <Card
                        src={card_2}
                        title="CLI tooling"
                        text="Czy korzystasz z narzędzi w terminalu? Odkryj ich moc i zacznij pisać swoje."
                    />
                    <Card
                        src={card_3}
                        title="Automatyzacja"
                        text="Znasz drogę na skróty? Jeśli nie, pokażemy Ci jak użyć narzędzi low code."
                    />
                </Rail>
            </Layout>
        </CardsContainter>
    );
};
