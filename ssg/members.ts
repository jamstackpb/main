import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getAllMembers = () => {
    const pathToFolderContent = path.join(process.cwd(), 'content', 'teammembers');
    const contentDirectoryFiles = fs.readdirSync(pathToFolderContent);

    const withGrayMatter = contentDirectoryFiles.map((adf) => {
        const realPath = path.join(pathToFolderContent, adf);
        const fileContents = fs.readFileSync(realPath).toString('utf-8');
        const changeToMatter = matter(fileContents);

        return changeToMatter.data as { name: string; rank: string; description: string; imgPath: string };
    });
    return withGrayMatter;
};
