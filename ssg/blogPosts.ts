import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getAllPosts = () => {
    const pathToFolderProjects = path.join(process.cwd(), 'content', 'blogposts');
    const projectsDirectoryFiles = fs.readdirSync(pathToFolderProjects);

    const withGrayMatter = projectsDirectoryFiles.map((adf) => {
        const slug = adf.replace('.md', '');
        const realPath = path.join(pathToFolderProjects, adf);
        const fileContents = fs.readFileSync(realPath).toString('utf-8');
        const { data: changedToMatter } = matter(fileContents);

        return {
            slug,
            changedToMatter,
        };
    });
    return withGrayMatter;
};
