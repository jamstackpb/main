import React from 'react';
import { Layout } from '@/src/layouts';
import { InvertedButton, CopyRights } from '@/src/components';

const fb_icon = 'images/fb_icon.svg';
const tw_icon = 'images/tw_icon.svg';
const git_icon = 'images/git_icon.svg';
const in_icon = 'images/in_icon.svg';
const logo1 = 'images/logo1.svg';

const GrandFooter: React.FC = ({ children }) => (
    <div className="bg-tertiaryBackgroundColor h-100 flex justify-center items-center flex-col gap-y-10">
        {children}
    </div>
);
const Wrapper: React.FC = ({ children }) => <div className="flex flex-col justify-center items-center">{children}</div>;

const TinyLogo: React.FC = ({ children }) => (
    <img src={logo1} className="w-20 h-20 border-0 pb-8">
        {children}
    </img>
);

const FootNavWords: React.FC = ({ children }) => (
    <div className="flex text-primaryFontColor text-base font-bold pt-2 gap-7">{children}</div>
);

const FootIcons: React.FC = ({ children }) => <div className="mt-8 max-w-full gap-5 h-12 flex p-2">{children}</div>;

const Links: React.FC<{ ahref: string }> = ({ ahref, children }) => (
    <a href={ahref} className="no-underline hover:underline text-quaternaryFontColor visited:text-gray-200">
        {children}
    </a>
);

export const Footer = () => {
    return (
        <GrandFooter>
            <Layout>
                <Wrapper>
                    <TinyLogo />
                    <FootNavWords>
                        <Links ahref="https://github.com/aexol">Leader</Links>
                        <Links ahref="https://github.com/jamstackpb">Pages</Links>
                        <Links ahref="https://github.com/jamstackpb">Legal</Links>
                        <Links ahref="https://github.com/jamstackpb">Resources</Links>
                    </FootNavWords>
                    <FootIcons>
                        <InvertedButton ahref="https://www.facebook.com" imagIcon={fb_icon} />
                        <InvertedButton ahref="https://twitter.com/?lang=pl" imagIcon={tw_icon} />
                        <InvertedButton ahref="https://github.com/jamstackpb" imagIcon={git_icon} />
                        <InvertedButton ahref="https://pl.linkedin.com/" imagIcon={in_icon} />
                    </FootIcons>
                </Wrapper>
            </Layout>
            <CopyRights />
        </GrandFooter>
    );
};
