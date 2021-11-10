interface TextProps {
    title: string;
    subtitle: string;
}
export const TextContainer: React.FC<TextProps> = ({ title, subtitle }) => (
    <div className="flex-col flex flex-grow">
        <div className="text-sm pt-2 sm:text-xl sm:pt-5 font-mono font-extrabold text-gray-700">{title}</div>
        <div className=" text-xs sm:text-lg py-2 sm:py-3 text-justify text-gray-500">{subtitle}</div>
    </div>
);
