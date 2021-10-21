import { Card } from '@/src/components/atoms/Card';
import styled from '@emotion/styled';
import React from 'react';

const Rail: React.FC = ({ children }) => <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-10">{children}</div>;

const card_1 = 'images/card1.svg';
const card_2 = 'images/card2.svg';
const card_3 = 'images/card3.svg';

export const Cards = () => {
    return (
        <div className="w-full bg-gray-200 py-40">
            <div className="container mx-auto">
                <h2 className="text-blue-darkfont text-3xl font-bold text-center mb-10">Co robimy?</h2>
                <Rail>
                    <Card
                        src={card_1}
                        title="Front-end"
                        text="HTML, CSS, JS? Te technologie same w sobie już nie wystarczają. Twórz korzystając z React"
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
            </div>
        </div>
    );
};
