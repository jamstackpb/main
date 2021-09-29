import { Cards } from '../components/atoms/Cards';
import { Layout } from '@/src/layouts';
import { Header, Footer, CTA } from '@/src/components';
import { Techbar } from '@/src/components';
import React from 'react';

const HomePage = () => {
    return (
        <Layout pageTitle="HomePage">
            <Header isHomepage />
            <Cards />
            <CTA />
            <Techbar images={[]} />
            <Footer />
        </Layout>
    );
};

export default HomePage;
