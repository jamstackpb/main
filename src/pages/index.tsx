import { Cards } from '../components/atoms/Cards';
import { Header, Footer, CTA } from '@/src/components';
import { Techbar } from '@/src/components';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <Header isHomepage />
            <Cards />
            <CTA />
            <Techbar images={[]} />
            <Footer />
        </div>
    );
};

export default HomePage;
