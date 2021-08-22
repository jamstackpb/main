import React from 'react';
import { Layout } from '@/src/layouts';
import { Header, Footer } from '@/src/components';

const HomePage = () => {
    return (
        <Layout pageTitle="HomePage">
            <Header isHomepage />
            <Footer />
        </Layout>
    );
};

export default HomePage;
