import { useState, useEffect } from 'react';
import { Cards } from '../components/atoms/Cards';
import { Layout } from '@/src/layouts';
import { Header, Footer } from '@/src/components';
import { Techbar } from '@/src/components';

const HomePage = () => {
    interface Size {
        width: number;
    }

    function screenWidth() {
        const size: Size = useWindowSize();
        return size.width;
    }

    function useWindowSize(): Size {
        const [windowSize, setWindowSize] = useState<Size>({
            width: 0,
        });
        useEffect(() => {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                });
            }
            window.addEventListener('resize', handleResize);

            handleResize();

            return () => window.removeEventListener('resize', handleResize);
        }, []);
        return windowSize;
    }
    return (
        <Layout pageTitle="HomePage">
            <Header isHomepage winSize={screenWidth()} />
            <Cards winSize={screenWidth()} />
            <Techbar images={[]} />
            <Footer />
        </Layout>
    );
};

export default HomePage;
