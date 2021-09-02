import { Cards } from '../components/atoms/Cards';
import { Layout } from '@/src/layouts';
import { Header, Footer } from '@/src/components';

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
