import { Layout } from '@/src/layouts';
import { Header } from '@/src/components';
import { CopyRights } from '../components/molecules/CopyRights';
import { SVGcomponent } from '../components/atoms/SVGcomponent';
import styled from '@emotion/styled';
const image = '/images/singleBP.svg';

const ThemeBox = styled.div`
    margin-top: 80px;
    width: 100%;
    height: 250px;
    padding: 0 40px;
    flex-direction: row;
`;

const Title = styled.h1`
    ${({ theme }) => theme.colorsPalette.quaternaryFontColor};
    text-align: left;
`;

const HomePage = () => {
    return (
        <Layout pageTitle="singleBlogPost">
            <Header isHomepage={false} />
            <ThemeBox>
                <Title className="text-red-400">Święta tuż tuż - Nie zwalniamy przed końcem roku</Title>
            </ThemeBox>
            <CopyRights />
        </Layout>
    );
};

export default HomePage;
