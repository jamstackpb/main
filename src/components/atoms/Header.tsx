import styled from '@emotion/styled';
import full_logo1 from '@/public/images/full_logo1.svg';

const prefix = '/main';

export const Header = styled.div`
    background: #15159b;
    color: #fff;
    font-size: 18px;
    padding: 100px 40px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Full_Logo = styled.div`
    width: 168px;
    height: 50px;
    margin: 28px;
    background-image: url(${prefix + full_logo1.src});
    position: absolute;
    top: 0;
    left: 0;
`;
