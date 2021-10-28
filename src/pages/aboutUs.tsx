import { Layout } from '@/src/layouts';
import { Header } from '@/src/components/molecules/Header';
import { CopyRights } from '../components/molecules/CopyRights';
import { InferGetStaticPropsType } from 'next';
import styled from '@emotion/styled';

const A1 = styled.h1`
    padding: 4rem 0 2rem;
`;

const B1 = styled.h2`
    color: rgb(138, 51, 51);
    padding: 2rem 0 6rem;
`;

const about = ({ about }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <Layout pageTitle="aboutUs">
            <Header isHomepage={false} />
            <A1>
                <h1 className="text-blue-darkfont text-3xl font-bold text-center mb-10">O NAS</h1>
            </A1>
            <B1>
                <h2 className="text-2xl text-center mb-10">
                    Jesteśmy kołem naukowym <b>Jamstack</b>! Zajmujemy się tworzeniem frontendu, czyli tworzeniem stron
                    internetowych od strony wizualnej. Korzystamy z wielu nowych i innowacyjnych technologii, które
                    pozwalają nam budować zaawansowane projekty z dużą łatwością i efektywnością. Celujemy w jak
                    największą prostotę wizualną i funkcjonalną naszych prac.
                </h2>
                <img src="https://jooinn.com/images/under-construction-3.png" width={100} />
            </B1>
            <CopyRights />
        </Layout>
    );
};
/*
-Jesteśmy kółkiem naukowym wielowydziałowym (czy cos)
-Ilosc czlonow
-mamy miejsca dla osob chcacych nauczyc sie frontendu
-Szukamy nowych rozwiazan
-praca glownie zdalna, dzieki githubowi
-Praca jest wygodna
-Praca wymaga kreatywnosci i zmyslu artystycznego, i estetycznego
*/
export default about;
