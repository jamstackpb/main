import React from 'react';
import { CustomHelmet } from '@/src/components';

interface LayoutProps {
    home?: boolean;
    pageTitle?: string;
}

const Container: React.FC = ({children}) => <div className="container mx-auto">{children}</div>

export const Layout: React.FC<LayoutProps> = ({ children, home, pageTitle }) => {
    return (
        <div>
            <CustomHelmet pageTitle={pageTitle ? pageTitle : undefined} />
            <Container>{children}</Container>
        </div>
    );
};
