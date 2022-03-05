interface TitlesProps {
    title: string;
    firstSubTitle?: string;
    secondSubTitle?: string;
}
export const Titles: React.FC<TitlesProps> = ({ title, firstSubTitle, secondSubTitle }) => (
    <>
        <h1 className="text-5xl sm:text-6xl py-12 font-sans font-medium uppercase text-primaryBackgroundColor text-center ">
            {title}
        </h1>
        <h2 className="text-2xl  font-medium  text-gray-700 text-center ">{firstSubTitle}</h2>
        <h3 className="text-lg py-16 text-center">{secondSubTitle}</h3>
    </>
);
