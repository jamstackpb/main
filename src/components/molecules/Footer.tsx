import styled from '@emotion/styled';
import logo1 from '@/public/images/logo1.svg';
import fb_icon from '@/public/images/fb_icon.svg';
import tw_icon from '@/public/images/tw_icon.svg';
import git_icon from './../../../public/images/git_icon.svg';
import in_icon from '@/public/images/in_icon.svg';
import { colors } from '@/src/styles';
import { InvertedButton } from './InvertedButton';
import { imageUrl } from '@/src/pages';

const GrandFooter = styled.div`
    background: ${colors.footer_color};
    height: 470px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Logo = styled.div`
    background-image: url(${logo1.src});
    width: 52px;
    height: 50px;
`;

const FootNavWords = styled.div`
    color: ${colors.footer_text};
    font-size: 12px;
    font-weight: 500;
    height: 12px;
    width: 380px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const FootIcons = styled.div`
    margin-top: 35px;
    width: 320px;
    height: 50px;
    display: flex;
    padding: 0px;
    justify-content: space-between;
    align-items: center;
`;

export const CopyRights = styled.div`
    width: 100%;
    height: 80px;
    color: ${colors.rights_text};
    border: 0px;
    font-weight: 500;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 2px 6px -1px black;
    z-index: 1;
`;

export const Footer = () => {
    return (
        <GrandFooter>
            <div style={{ width: '100%', height: 100 }} />
            <Logo />
            <div style={{ width: '100%', height: 50 }} />
            <FootNavWords>
                <a href="https://github.com/aexol" style={{ color: colors.footer_text }}>
                    Prowadzący
                </a>
                <a href="https://github.com/jamstackpb" style={{ color: colors.footer_text }}>
                    Pages
                </a>
                <a href="https://github.com/jamstackpb" style={{ color: colors.footer_text }}>
                    Legal
                </a>
                <a href="https://github.com/jamstackpb" style={{ color: colors.footer_text }}>
                    Resources
                </a>
            </FootNavWords>
            <FootIcons>
                <InvertedButton ahref="https://www.facebook.com" imagIcon={imageUrl(fb_icon.src)} />
                <InvertedButton ahref="https://twitter.com/?lang=pl" imagIcon={imageUrl(tw_icon.src)} />
                <InvertedButton ahref="https://github.com/jamstackpb" imagIcon={imageUrl(git_icon.src)} />
                <InvertedButton ahref="https://www.facebook.com" imagIcon={imageUrl(fb_icon.src)} />
                <InvertedButton ahref="https://pl.linkedin.com/" imagIcon={imageUrl(in_icon.src)} />
            </FootIcons>
            <div style={{ width: '100%', height: 45 }} />
            <CopyRights>
                <p>All rights reserved &copy; JAMstack PB 2021</p>
            </CopyRights>
            <div style={{ width: '100%', height: 48, zIndex: 2, background: colors.footer_color }} />
        </GrandFooter>
    );
};
