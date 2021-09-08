import styled from '@emotion/styled';
import { MenuIcon } from '../atoms/MenuIcon';

const Nav = styled.nav`
    width: 100%;
    //display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    position: static;
    top: 0px;
    display: inline-block;
    padding: 0;
    margin: 0;
`;

const DropMenu = styled.div`
    display: flex;
    position: absolute;
    //left: 0px;
    //top: 10vh;
    background-color: red;
    flex-direction: column;
    align-items: center;
    justify-content: stretch;
    width: 20rem;
    padding: 0;
    margin: 0;
    & > div {
        margin: 0;
        padding: 0px;
        width: 100%;
        height: 3.8rem;
        background-color: #99bbff;
    }
    & > div > a {
        text-align: center;
        color: #15159b;
        display: block;
        text-decoration: none;
        font-weight: 500;
        font-size: 2.6rem;
        margin: 0;
        padding: 0px;
        width: 100%;
        height: 100%;
    }
`;

export const NavBar = () => {
    return (
        <Nav>
            <MenuIcon />
            <DropMenu>
                <div>
                    <a href="#">Strona główna</a>
                </div>
                <div>
                    <a href="#">Projekty</a>
                </div>
                <div>
                    <a href="#">O nas</a>
                </div>
            </DropMenu>
        </Nav>
    );
};
