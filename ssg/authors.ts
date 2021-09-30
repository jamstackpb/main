import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
export const getAllAuthors = () => {
    const pathToAuthors = path.join(process.cwd(), 'content', 'authors');
    const authorDirectoryFiles = fs.readdirSync(pathToAuthors);
    const withGrayMatter = authorDirectoryFiles.map((adf) => {
        const realPath = path.join(pathToAuthors, adf);
        const fileContents = fs.readFileSync(realPath).toString('utf-8');
        const changeToMatter = matter(fileContents);
        return changeToMatter.data as { firstName: string; lastName: string };
    });
    return withGrayMatter;
};
