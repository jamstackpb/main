import { Logo } from '@/src/components';
import { useState } from 'react';
import { NewMenuIcon } from '@/src/components/atoms/MenuIcon';

type Props = { className?: string };
const divStyles = {
    div: 'bg-blue-darkfont flex flex-col items-center justify-center fixed w-full h-full z-30 md:w-60',
    transition: ' w-full h-20 relative',
};

const DropMenu: React.FC<Props> = (props) => <div className={props.className}>{props.children}</div>;
const DivMenu: React.FC<Props> = (props) => <div className={props.className}>{props.children}</div>;
const DivLink: React.FC<{ link: string }> = ({ link, children }) => (
    <a
        href={link}
        className="text-center block font-medium -mt-12 p-5 w-full h-full leading-10 hover:no-underline hover:bg-gray-300"
    >
        {children}
    </a>
);

export const Navigation: React.FC<{ isHomepage?: boolean }> = ({ isHomepage = false }) => {
    const [clicked, setClicked] = useState(false);
    const ToggleMenu = () => setClicked(!clicked);
    return (
        <div className="w-full bg-primaryBackgroundColor text-base max-h-22 h-22 z-50 fixed top-0 flex justify-between ">
            <NewMenuIcon click={ToggleMenu} clicked={clicked} />
            <DropMenu
                className={`${divStyles.div} ${
                    clicked ? 'transform duration-500 translate-x-0' : ' transform ease-in -translate-x-full'
                }`}
            >
                <DivMenu
                    className={`${divStyles.transition} ${
                        clicked
                            ? 'transform ease-out duration-200 delay-0 translate-x-0'
                            : 'transform ease-out -translate-x-full'
                    }`}
                >
                    <DivLink link="/">Strona główna</DivLink>
                </DivMenu>
                <DivMenu
                    className={`${divStyles.transition} ${
                        clicked
                            ? 'transform ease-out duration-200 delay-150 translate-x-0'
                            : 'transform ease-out -translate-x-full'
                    }`}
                >
                    <DivLink link="/ProjectsPage/">Projekty</DivLink>
                </DivMenu>
                <DivMenu
                    className={`${divStyles.transition} ${
                        clicked
                            ? 'transform ease-out duration-200 delay-300 translate-x-0'
                            : 'transform ease-out -translate-x-full'
                    }`}
                >
                    <DivLink link="#">O nas</DivLink>
                </DivMenu>
                <DivMenu
                    className={`${divStyles.transition} ${
                        clicked
                            ? 'transform ease-out duration-200 delay-450 translate-x-0'
                            : 'transform ease-out -translate-x-full'
                    }`}
                >
                    <DivLink link="/teamMembers">Członkowie</DivLink>
                </DivMenu>
                <DivMenu
                    className={`${divStyles.transition} ${
                        clicked
                            ? 'transform ease-out duration-200 delay-600 translate-x-0'
                            : 'transform ease-out -translate-x-full'
                    }`}
                >
                    <DivLink link="/blogsPage">Blog</DivLink>
                </DivMenu>
            </DropMenu>
            <Logo />
        </div>
    );
};
