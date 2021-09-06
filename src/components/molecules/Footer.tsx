import styled from '@emotion/styled';
const fb_icon = 'images/fb_icon.svg';
const tw_icon = 'images/tw_icon.svg';
const git_icon = 'images/git_icon.svg';
const in_icon = 'images/in_icon.svg';

import { InvertedButton } from './InvertedButton';
import { TinyLogo } from './TinyLogo';

const GrandFooter = styled.div`
    background: ${({ theme }) => theme.colorsPalette.backgroundColors.tertiary};
    height: 470px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const FootNavWords = styled.div`
    color: ${({ theme }) => theme.colorsPalette.fontColors.primary};
    height: 12px;
    width: 380px;
    font-size: ${({ theme }) => theme.font.fontSize.nonary};
    font-weight: ${({ theme }) => theme.font.fontWeight.quaternary};
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
    color: ${({ theme }) => theme.colorsPalette.fontColors.secondary};
    border: 0px;
    font-weight: ${({ theme }) => theme.font.fontWeight.quaternary};
    font-size: ${({ theme }) => theme.font.fontSize.nonary};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: ${({ theme }) => theme.boxShadow.primary};
    z-index: 1;
`;
export const Footer = () => {
    return (
        <GrandFooter>
            <div style={{ width: '100%', height: 100 }} />
            <TinyLogo />
            <div style={{ width: '100%', height: 50 }} />
            <FootNavWords>
                <a href="https://github.com/aexol" style={{ color: 'inherit' }}>
                    Prowadzący
                </a>
                <a href="https://github.com/jamstackpb" style={{ color: 'inherit' }}>
                    Pages
                </a>
                <a href="https://github.com/jamstackpb" style={{ color: 'inherit' }}>
                    Legal
                </a>
                <a href="https://github.com/jamstackpb" style={{ color: 'inherit' }}>
                    Resources
                </a>
            </FootNavWords>
            <FootIcons>
                <InvertedButton ahref="https://www.facebook.com" imagIcon={fb_icon} />
                <InvertedButton ahref="https://twitter.com/?lang=pl" imagIcon={tw_icon} />
                <InvertedButton ahref="https://github.com/jamstackpb" imagIcon={git_icon} />
                <InvertedButton ahref="https://www.facebook.com" imagIcon={fb_icon} />
                <InvertedButton ahref="https://pl.linkedin.com/" imagIcon={in_icon} />
            </FootIcons>
            <div style={{ width: '100%', height: 45 }} />
            <CopyRights>
                <p>All rights reserved &copy; JAMstack PB 2021</p>
            </CopyRights>
            <div style={{ width: '100%', height: 48, zIndex: 2, background: '#f6fafd' }} />
        </GrandFooter>
    );
};
