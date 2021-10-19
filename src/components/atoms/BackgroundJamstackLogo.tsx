import styled from '@emotion/styled';
import { addImagePrefix } from '@/src/utils';

const BackgroundJamstack = styled.div<{ imgUrl: string }>`
    background-image: url(${({ imgUrl }) => imgUrl});
    background-attachment: fixed;
    background-position: 50% 65%;
    background-repeat: no-repeat;
    background-size: 60%;
    background-color: rgba(247, 247, 249, 0.55);
    background-blend-mode: lighten;
`;
const BackgroundJamstackLogo: React.FC = ({ children }) => {
    return <BackgroundJamstack imgUrl={addImagePrefix('/images/full_logo1_black.svg')}>{children}</BackgroundJamstack>;
};

export default BackgroundJamstackLogo;
