interface TitlesProps {
    title: string;
    firstSubTitle?: string;
    secondSubTitle?: string;
}
export const Titles: React.FC<TitlesProps> = ({ title, firstSubTitle, secondSubTitle }) => (
    <>
        <h1 className="text-6xl py-12 font-sans font-medium uppercase text-blue-darkfont">{title}</h1>
        <h2 className="text-2xl  font-medium text-center text-gray-700s ">{firstSubTitle}</h2>
        <h3 className="text-lg py-16">{secondSubTitle}</h3>
    </>
);
