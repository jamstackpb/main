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
// export const getAllContent = ( ...pathtofolder: string[]) => {
//     const pathToFolderContent = path.join(process.cwd(), ...pathtofolder);
//     const contentDirectoryFiles = fs.readdirSync(pathToFolderContent);

//     const withGrayMatter = contentDirectoryFiles.map((adf) => {
//         const realPath = path.join(pathToFolderContent, adf);
//         const fileContents = fs.readFileSync(realPath).toString('utf-8');
//         const changeToMatter = matter(fileContents);

//         return changeToMatter.data as { name: string; rank: string; description: string; imgPath: string };
//     });
//     return withGrayMatter;
// };
// const pathToAuthors = path.join(process.cwd(), folder, 'authors');
// const authorDirectoryFiles = fs.readdirSync(pathToAuthors);
// const withGrayMatter = authorDirectoryFiles.map((adf) => {
//     const realPath = path.join(pathToAuthors, adf);
//     const fileContents = fs.readFileSync(realPath).toString('utf-8');
//     const changeToMatter = matter(fileContents);
//     return changeToMatter.data as { firstName: string; lastName: string };
// });
// return withGrayMatter;
