import { Footer, CTA, Cards, Techbar, Header } from '@/src/components';

import React from 'react';

const HomePage = () => {
    return (
        <>
            <Header />
            <Cards />
            <CTA />
            <Techbar images={[]} />
            <Footer />
        </>
    );
};

export default HomePage;
