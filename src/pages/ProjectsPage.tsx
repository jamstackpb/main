import { Layout } from '@/src/layouts';
import { Header } from '@/src/components/molecules/Header';
import { CopyRights } from '../components/molecules/Footer';
import ProjectsSectionSlider from '@/src/components/atoms/ProjectsSliderSection';
const projekt1 = '/images/ProjectsSiteImgs/projekt1.png';
const projekt2 = '/images/ProjectsSiteImgs/projekt2.jpg';
const projekt3 = '/images/ProjectsSiteImgs/projekt3.jpg';
const projekt4 = '/images/ProjectsSiteImgs/projekt4.jpg';
const projekt5 = '/images/ProjectsSiteImgs/projekt5.png';

const fakeProjects: Array<{ subTitle: string; h1: string; h2: string; imageUrl: string; description: string }> = [
    {
        subTitle: 'Projekt 1',
        h1: 'Lorem ipsum dolor sit amet.',
        h2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, totam?',
        imageUrl: projekt1,
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea recusandae pariatur, aperiam, iure error corporis placeat vel at laborum, laudantium similique temporibus optio officia exercitationem atque neque repellat quia maiores. Molestiae est, quasi corporis nostrum iure exercitationem vero quod voluptatibus voluptas fugiat accusantium culpa pariatur quisquam? Neque impedit, officia corrupti commodi eligendi sed atque perspiciatis, magni repellendus debitis nemo sapiente repellat eaque asperiores odio temporibus amet iure quia, mollitia expedita? Reprehenderit harum molestias iure mollitia. Dignissimos aliquam dicta natus officia quisquam magnam molestiae eligendi voluptatum facere minus ducimus perferendis, nostrum laboriosam excepturi voluptatem sit ratione ea culpa maiores mollitia, impedit vero! Neque, ipsa voluptatibus. Nesciunt magnam porro at voluptatibus veritatis repellendus, minima quisquam rerum accusantium, quidem assumenda, quaerat ullam eaque? Magni esse ex quod at dignissimos et! Aliquam cumque dignissimos perspiciatis animi consequatur at. Labore officiis voluptatum ratione iusto suscipit ut odio recusandae quasi veritatis beatae accusamus, exercitationem accusantium corrupti nostrum quisquam aspernatur libero laborum laudantium ex minima blanditiis aliquam quod? Saepe quod temporibus facere cum officiis magni labore fuga nostrum veniam maiores, corporis, odit harum accusantium. Velit rerum aperiam omnis aliquam ipsa repudiandae consequuntur aspernatur maxime laboriosam necessitatibus harum illo fugiat perferendis itaque saepe sint, ratione et totam deleniti. Corrupti minima quos blanditiis amet, numquam nisi, incidunt dolorum reprehenderit perspiciatis tempora excepturi! A recusandae totam saepe, quia perferendis quae accusamus consectetur aliquam, nisi assumenda corporis! Commodi, modi possimus non a incidunt placeat expedita quaerat nisi cupiditate quia quae, necessitatibus optio sunt nihil amet quisquam delectus. Repellendus porro necessitatibus eum voluptate! Eveniet eaque sint repellat veniam iste corrupti velit, ut maiores, dolorem dignissimos, tempore itaque magnam sunt! Ab doloribus in tenetur debitis dolor, veritatis nostrum excepturi ipsam. Ut dolor libero iste possimus veritatis. Odit, facilis ad provident dignissimos nihil adipisci earum corporis cumque! Consectetur nulla molestiae iste vitae explicabo quibusdam recusandae nemo iusto minima molestias, inventore exercitationem voluptates placeat aut at a excepturi quae corporis rem rerum. At excepturi quae blanditiis repudiandae fugit non nostrum magni, quo labore ex delectus dolorum quia est nemo rem quaerat aliquam molestiae recusandae animi pariatur quos, sed quisquam? Quae ex vitae unde voluptatem optio commodi consectetur facere quam fugit? Earum ea sit corporis odio fugit, quod officia voluptate ullam mollitia impedit eum temporibus accusantium totam vel incidunt? Nostrum laboriosam, voluptatibus in, impedit deserunt quaerat vero facere est obcaecati quasi aperiam! Enim molestiae necessitatibus laboriosam iure illum ea, vel aspernatur quibusdam omnis vitae velit fugit odit natus magni quaerat ducimus nisi quia perferendis aut amet temporibus. Deleniti explicabo culpa consectetur quidem eum labore dolore laudantium quibusdam tenetur delectus iste, adipisci atque ipsum fuga enim excepturi numquam ratione vero porro temporibus impedit hic doloremque! Corrupti nobis porro quia deleniti illum nesciunt labore qui recusandae ipsam, tempora expedita cum voluptas quo ipsum itaque sit consequuntur natus eum earum omnis reprehenderit sed. Molestias saepe officia beatae totam magni assumenda facere, vel eligendi. Tempora impedit fuga praesentium perferendis corporis ipsa vitae excepturi sequi suscipit dolore vel, aliquid hic reiciendis dolorum itaque! Delectus possimus quos voluptatem inventore, dolorem ipsam?',
    },
    {
        subTitle: 'Projekt 2',
        h1: 'Lorem ipsum dolor sit amet.',
        h2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, totam?',
        imageUrl: projekt2,
        description:
            ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum similique numquam unde? Distinctio nemo dignissimos tempore, ipsum error ea est, dicta quis cum incidunt veniam molestiae totam illum, beatae culpa deleniti. Nihil dolorum in hic provident. Molestias quam qui deserunt!',
    },
    {
        subTitle: 'Projekt 3',
        h1: 'Lorem ipsum dolor sit amet consectetur.',
        h2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, totam?',
        imageUrl: projekt3,
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sit itaque at quae nihil officiis fugit placeat optio, facilis ratione enim quia blanditiis rem mollitia rerum assumenda sapiente repudiandae numquam temporibus tempore maxime vero consequatur! Animi, asperiores! Eligendi ratione, explicabo sed itaque sapiente corporis minima!',
    },
    {
        subTitle: 'Projekt 4',
        h1: 'Lorem ipsum dolor si.',
        h2: 'Lorem ipsum dolor sit amet consectetur . Officiis, totam?',
        imageUrl: projekt4,
        description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur quas, officia error officiis temporibus unde, corporis voluptas fugiat sit saepe, exercitationem eaque magnam facere praesentium non ea alias aperiam illum?',
    },
    {
        subTitle: 'Projekt 5',
        h1: 'Lorem amet consectetur adipisicing elit.',
        h2: 'Lorem ipsum dolor sit amet consectetur adipisicing elit totam?',
        imageUrl: projekt5,
        description:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur quas, officia error officiis temporibus unde, corporis voluptas fugiat sit saepe, exercitationem eaque magnam facere praesentium non ea alias aperiam illum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur cupiditate nam non et officiis ut reiciendis quaerat a dicta dolore.',
    },
];

const projectsPage = () => {
    return (
        <Layout pageTitle="Projects">
            <Header isHomepage={false} />
            <ProjectsSectionSlider projects={fakeProjects}></ProjectsSectionSlider>
            <CopyRights>
                <p>All rights reserved &copy; JAMstack PB 2021</p>
            </CopyRights>
        </Layout>
    );
};

export default projectsPage;
