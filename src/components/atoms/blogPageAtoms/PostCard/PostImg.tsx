import { addImagePrefix } from '@/src/utils';
import styled from '@emotion/styled';

interface ImgProps {
    imageUrl: string;
    date: string;
}
const PostDate = styled.div`
    &::before {
        position: absolute;
        left: -32px;
        display: block;
        content: '';
        border-right: 32px solid #f5f5f5;
        border-top: 32px solid transparent;
    }
`;
const Wrapper: React.FC = ({ children }) => (
    <div className="container relative h-48 sm:h-80 rounded-t-2xl overflow-hidden">{children}</div>
);

export const PostImg: React.FC<ImgProps> = ({ imageUrl, date }) => (
    <Wrapper>
        <img className="w-full h-full object-cover" src={addImagePrefix(imageUrl)} alt="" />
        <PostDate className="absolute right-0 bottom-0 pr-2 text-md sm:text-xl font-sans font-medium text-gray-700 bg-gray-100">
            {date}
        </PostDate>
    </Wrapper>
);
