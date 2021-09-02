import { Cards } from '../components/atoms/Cards';
import { Layout } from '@/src/layouts';
import { Header, Footer } from '@/src/components';

export const imageUrl = (src: string) => {
    return process.env.NODE_ENV === 'production' ? '/main' + src : src;
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
