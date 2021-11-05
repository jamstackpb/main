import Link from 'next/dist/client/link';
import { MenuIcon } from '@/src/components';
import { useState } from 'react';

type Props = { className?: string };
const divStyles = {
    transition: ' w-full h-20 relative',
};

const DropMenu: React.FC<Props> = (props) => <div className={props.className}>{props.children}</div>;
const DivMenu: React.FC<Props> = (props) => <div className={props.className}>{props.children}</div>;
const DivLink: React.FC<{ link: string }> = ({ link, children }) => (
    <Link href={link}>
        <div className="text-center block font-medium -mt-12 p-5 w-full h-full leading-10 hover:no-underline hover:bg-gray-800 cursor-pointer">
            {children}
        </div>
    </Link>
);

const content = [
    {
        link: '/',
        name: 'Strona Głowna',
    },
    {
        link: '/ProjectsPage',
        name: 'Projekty',
    },
    {
        link: '/aboutUs',
        name: 'O nas',
    },
    {
        link: '/teamMembers',
        name: 'Członkowie',
    },
    {
        link: '/blogsPage',
        name: 'Blog',
    },
];

export const Menu: React.FC = () => {
    const [clicked, setClicked] = useState(false);
    const ToggleMenu = () => setClicked(!clicked);
    return (
        <div className={'h-28'}>
            <MenuIcon clicked={clicked} click={ToggleMenu} />
            <DropMenu
                className={`bg-gray-900 text-white flex flex-col items-center justify-center fixed top-22 w-full h-full z-auto md:w-60 ${
                    clicked
                        ? 'transform duration-500 translate-x-0'
                        : ' transform ease-in duration-300 -translate-x-full'
                }`}
            >
                {content.map(({ link, name }, i) => (
                    <DivMenu
                        className={`${divStyles.transition} ${
                            clicked
                                ? `transform ease-out duration-200 delay-${i * 150} translate-x-0`
                                : 'transform ease-out -translate-x-full'
                        }`}
                    >
                        <DivLink link={link}>{name}</DivLink>
                    </DivMenu>
                ))}
            </DropMenu>
        </div>
    );
};
