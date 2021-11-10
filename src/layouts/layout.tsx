import React from 'react';
import { CustomHelmet } from '@/src/components';

interface LayoutProps {
    pageTitle?: string;
}

const Container: React.FC = ({ children }) => <div className="container mx-auto max-w-full">{children}</div>;

export const Layout: React.FC<LayoutProps> = ({ children, pageTitle }) => {
    return (
        <>
            <CustomHelmet pageTitle={pageTitle ? pageTitle : undefined} />
            <Container>{children}</Container>
        </>
    );
};
