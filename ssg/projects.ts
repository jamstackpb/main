import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getAllProjects = () => {
    const pathToFolderProjects = path.join(process.cwd(), 'content', 'projects');
    const projectsDirectoryFiles = fs.readdirSync(pathToFolderProjects);

    const withGrayMatter = projectsDirectoryFiles.map((adf) => {
        const realPath = path.join(pathToFolderProjects, adf);
        const fileContents = fs.readFileSync(realPath).toString('utf-8');
        const changeToMatter = matter(fileContents);

        return changeToMatter.data as {
            subTitle: string;
            h1: string;
            h2: string;
            imageUrl: string;
            description: string;
        };
    });
    return withGrayMatter;
};
