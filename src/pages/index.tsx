import { Cards } from '../components/atoms/Cards';
import { Layout } from '@/src/layouts';
<<<<<<< HEAD
import { Footer } from '../components/molecules/Footer';
import styled from '@emotion/styled';
import { CTA } from '../components/organisms/CTA';
=======
import { Header, Footer } from '@/src/components';
>>>>>>> 0dfae8409781d9b318957a40c2b5c4fbbc2dafc4

export const prefix = () => {
    return process.env.NEXT_PUBLIC_BASE_PATH || '';
};

const HomePage = () => {
    return (
        <Layout pageTitle="HomePage">
            <Header isHomepage />
            <Cards />
            <Footer />
        </Layout>
    );
};

export default HomePage;
