import { Layout } from '@/src/layouts';
import { Header } from '@/src/components/molecules/Header';
import ProjectsSectionSlider from '@/src/components/atoms/ProjectsSliderSection';
import { getAllProjects } from '@/ssg/projects';
import { InferGetStaticPropsType } from 'next';
import { CopyRights } from '@/src/components/molecules/CopyRights';

const projectsPage = ({ content }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <Layout pageTitle="Projects">
            <Header isHomepage={false} />
            <ProjectsSectionSlider projects={content}></ProjectsSectionSlider>
            <CopyRights />
        </Layout>
    );
};
export const getStaticProps = () => {
    return {
        props: {
            content: getAllProjects(),
        },
    };
};

export default projectsPage;
