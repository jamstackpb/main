import React from 'react';
import styled from '@emotion/styled';
import { CustomHelmet } from '@/src/components';

export const siteTitle = 'Next.js Sample Website';

interface LayoutProps {
    home?: boolean;
    pageTitle?: string;
}

const Header = styled.header`
    display: flex;
    height: 150px;
    width: 100%;
    background-color: aliceblue;
    align-items: center;

    p {
        margin-right: 25px;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Layout: React.FC<LayoutProps> = ({ children, home, pageTitle }) => {
    return (
        <div>
            <CustomHelmet pageTitle={pageTitle ? pageTitle : undefined} />
            <Header>
                <p>Nav Link</p>
                <p>Nav Link</p>
                <p>Nav Link</p>
                <p>Nav Link</p>
                <p>Nav Link</p>
            </Header>
            <Container>{children}</Container>
        </div>
    );
};
