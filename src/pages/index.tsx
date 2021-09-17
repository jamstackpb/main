import { Cards } from '../components/atoms/Cards';
import { Layout } from '@/src/layouts';
import { Header, Footer } from '@/src/components';
import { Techbar } from '@/src/components';

const HomePage = () => {
    return (
        <Layout pageTitle="HomePage">
            <Header isHomepage />
            <Cards />
            <Techbar images={[]} />
            <Footer />
        </Layout>
    );
};

export default HomePage;
