import { Logo, Menu } from '@/src/components';

export const Navigation: React.FC = () => {
    return (
        <div className="w-full bg-primaryBackgroundColor text-base h-24 z-40 sticky top-0 flex justify-between items-center">
            <Menu />
            <Logo />
        </div>
    );
};
