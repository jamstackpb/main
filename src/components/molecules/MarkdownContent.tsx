import tw from 'tailwind-styled-components';
import DOMPurify from 'isomorphic-dompurify';
import marked from 'marked';

const Temacik = tw.div`



`;

const MarkdownContent = (content: any) => {
    const clean = DOMPurify.sanitize(marked(content));

    return <Temacik dangerouslySetInnerHTML={{ __html: clean }} />;
};

export default MarkdownContent;
