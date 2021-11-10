import { Layout } from '@/src/layouts';
import { Header } from '@/src/components/molecules/Header';
import { CopyRights } from '../components/molecules/CopyRights';
import styled from '@emotion/styled';
import Link from 'next/link';

const A1 = styled.h1`
    padding: 4rem 0 2rem;
`;

const B1 = styled.h2`
    color: rgb(84, 125, 221);
    padding: 2rem 8rem 6rem;
`;

const about = () => {
    return (
        <Layout pageTitle="aboutUs">
            <Header isHomepage={false} />
            <A1>
                <h1 className="text-blue-darkfont text-3xl font-bold text-center mb-10">O NAS</h1>
            </A1>
            <B1>
                <h2 className="text-2xl text-center mb-10">
                    <div>
                        Jesteśmy kołem naukowym{' '}
                        <Link href="/">
                            <a>
                                <b>Jamstack</b>
                            </a>
                        </Link>
                        ! Zajmujemy się tworzeniem frontendu, czyli tworzeniem stron internetowych od strony wizualnej.
                        Korzystamy z wielu nowych i innowacyjnych technologii, które pozwalają nam budować zaawansowane
                        projekty z dużą łatwością i efektywnością. Celujemy w jak największą prostotę wizualną i
                        funkcjonalną naszych prac.
                    </div>
                    <br />
                    <div>
                        Praca nad projektami jest wygodna i w pełni zdalna, gdyż większość spotkań odbywa się przez{' '}
                        <a href="https://discord.gg/CQpKMTNXMt">
                            <b>Discord</b>
                        </a>
                        , a modyfikowanie i budowanie projektów przebiega przez{' '}
                        <a href="https://github.com/jamstackpb">
                            <b>Github</b>
                        </a>
                        .
                    </div>
                    <br />
                    <div>
                        Rozwijanie projektów wymaga kreatywności, odrobiny zmysłu artystycznego i estetycznego, jako iż
                        budujemy strony internetowe, które chcemy, by były jak najlepsze i jak najczytelniejsze. Zawsze
                        szukamy nowych rozwiązań, które pomagają nam przyśpieszyć i ułatwić pracę.
                    </div>
                    <br />
                    <div>
                        Pomimo iż jesteśmy kółkiem na wydziale mechanicznym, przyjmujemy osoby z innych wydziałów, które
                        zainteresowane są pracowaniem we front-endzie. Dla nowych członków zawsze są miejsca wolne!
                        Zachęcamy do dołączenia i powiększenia naszego grona programistów!
                    </div>
                </h2>
            </B1>
            <CopyRights />
        </Layout>
    );
};
/*
-Praca wymaga kreatywnosci i zmyslu artystycznego, i estetycznego, co skłania nas do Szukania nowych rozwiazan
*/
export default about;
