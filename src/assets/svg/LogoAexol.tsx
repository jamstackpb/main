import styled from '@emotion/styled';

interface SvgProps {
    width?: number;
    height?: number;
}

const Svg = styled.svg`
    width: 300px;
    height: 300px;
    cursor: pointer;
`;

export const LogoAexol: React.FC<SvgProps> = ({ width, height }) => (
    <a href="/">
        <Svg viewBox="0 0 104 89" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width, height }}>
            <path
                d="M1.416 56H4.936C5.576 56 5.928 55.616 6.088 55.232L7.24 52.672H15.944L17.096 55.2C17.384 55.808 17.64 56 18.216 56H21.768C22.248 56 22.504 55.584 22.312 55.168L12.296 33.632C12.2 33.44 11.976 33.28 11.752 33.28H11.432C11.208 33.28 10.984 33.44 10.888 33.632L0.872 55.168C0.68 55.584 0.936 56 1.416 56ZM9.16 48.32L11.56 43.04H11.592L14.024 48.32H9.16ZM24.9395 55.392C24.9395 55.712 25.1955 56 25.5475 56H38.7955C39.1475 56 39.4035 55.712 39.4035 55.392V51.904C39.4035 51.584 39.1475 51.296 38.7955 51.296L29.9315 51.296V46.976L37.2275 46.976C37.5475 46.976 37.8355 46.72 37.8355 46.368L37.8355 42.88C37.8355 42.56 37.5475 42.272 37.2275 42.272L29.9315 42.272V38.304L38.7955 38.304C39.1475 38.304 39.4035 38.016 39.4035 37.696V34.208C39.4035 33.888 39.1475 33.6 38.7955 33.6L25.5475 33.6C25.1955 33.6 24.9395 33.888 24.9395 34.208L24.9395 55.392ZM41.7055 55.104C41.4175 55.52 41.7055 56 42.2495 56H46.6975C46.9535 56 47.1455 55.84 47.2415 55.712L51.3375 49.248H51.4015L55.5935 55.712C55.6895 55.872 55.9455 56 56.1375 56H60.5855C61.0975 56 61.3855 55.552 61.0975 55.104L54.3775 44.512L60.8735 34.496C61.1615 34.08 60.8735 33.6 60.3295 33.6H55.6575C55.4335 33.6 55.2095 33.76 55.1455 33.888L51.4015 39.84H51.3695L47.6895 33.888C47.5935 33.76 47.4015 33.6 47.1775 33.6H42.5055C41.9615 33.6 41.7055 34.08 41.9615 34.496L48.4255 44.512L41.7055 55.104ZM62.7138 44.832C62.7138 51.232 67.8018 56.32 74.2018 56.32C80.6018 56.32 85.7218 51.232 85.7218 44.832C85.7218 38.432 80.6018 33.28 74.2018 33.28C67.8018 33.28 62.7138 38.432 62.7138 44.832ZM67.8338 44.832C67.8338 41.312 70.7138 38.4 74.2018 38.4C77.7218 38.4 80.6018 41.312 80.6018 44.832C80.6018 48.32 77.7218 51.2 74.2018 51.2C70.7138 51.2 67.8338 48.32 67.8338 44.832ZM89.5958 55.392C89.5958 55.712 89.8518 56 90.2038 56H102.236C102.588 56 102.844 55.712 102.844 55.392V51.904C102.844 51.584 102.588 51.296 102.236 51.296H94.6198V34.208C94.6198 33.888 94.3318 33.6 94.0118 33.6H90.2038C89.8518 33.6 89.5958 33.888 89.5958 34.208V55.392Z"
                fill="#EAE8EB"
            />
            <path d="M43 78V88.9882H53.2171V78H43ZM50.4925 85.6584H45.6936V80.8969H50.4925V85.6584Z" fill="#414048" />
            <path d="M98.5388 65H96V76.3878H98.5388V65Z" fill="#414048" />
            <path d="M38.4647 0H28V11.2546H38.4647V0Z" fill="#414048" />
        </Svg>
    </a>
);
