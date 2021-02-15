import { Layout } from '@/src/layouts';
import { LogoAexol } from '../assets';
import { TestMolecules } from '@/src/components';

export default () => {
    return (
        <Layout>
            <TestMolecules></TestMolecules>
            <LogoAexol />
        </Layout>
    );
};
