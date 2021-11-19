import { Layout } from '@/src/layouts';

import { getAllProjects } from '@/ssg/projects';
import { InferGetStaticPropsType } from 'next';
import { CopyRights, ProjectsSectionSlider } from '@/src/components';


const projectsPage = ({ content }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <Layout pageTitle="Projects">
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
