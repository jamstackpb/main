import { Logo, Menu } from '@/src/components';
import { useState } from 'react';

export const Navigation: React.FC<{ isHomepage?: boolean }> = ({ isHomepage = false }) => {
    const [clicked, setClicked] = useState(false);
    const ToggleMenu = () => setClicked(!clicked);
    return (
        <div className="w-full bg-primaryBackgroundColor text-base max-h-22 h-22 z-50 fixed top-0 flex justify-between ">
            <Menu />

            <Logo />
        </div>
    );
};
