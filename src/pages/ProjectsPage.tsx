import { Layout } from '@/src/layouts';

import { getAllProjects } from '@/ssg/projects';
import { InferGetStaticPropsType } from 'next';
import { CopyRights, ProjectsSectionSlider } from '@/src/components';

const PageTitle: React.FC = ({ children }) => (
    <div className="w-full text-center font-bold text-4xl text-primaryBackgroundColor my-10 font-Roboto uppercase">
        {children}
    </div>
);
const projectsPage = ({ content }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <Layout pageTitle="Projects">
            <PageTitle>Projekty</PageTitle>
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
