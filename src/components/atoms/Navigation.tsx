import { Logo, Menu } from '@/src/components';
import { useState } from 'react';

export const Navigation: React.FC = () => {
    return (
        <div className="w-full bg-primaryBackgroundColor text-base max-h-22 h-22 z-50 fixed top-0 flex justify-between ">
            <Menu />
            <Logo />
        </div>
    );
};
