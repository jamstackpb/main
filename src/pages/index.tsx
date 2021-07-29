import { Layout } from '@/src/layouts';
import { LogoAexol } from '../assets';
import { TestMolecules } from '@/src/components';
import aexol_logo from '@/public/images/aexol_logo.svg';
import aexol_full_logo from '@/public/images/aexol_full_logo.png';

export default () => {
    return (
        <Layout pageTitle="HomePage">
            <TestMolecules />
            <LogoAexol />
            <img src={aexol_logo.src} alt="" />
            <img src={aexol_full_logo.src} alt="" />
        </Layout>
    );
};
