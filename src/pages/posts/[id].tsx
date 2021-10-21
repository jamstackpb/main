import Link from 'next/link';
import { Layout } from '@/src/layouts';
import { Header } from '@/src/components';
import { CopyRights } from '../../components/molecules/CopyRights';
import { addImagePrefix } from '../../utils';
import { getAllPostIds } from '@/ssg/posts';
import { getAllPosts } from '@/ssg/blogPosts';
import { InferGetStaticPropsType } from 'next';
const image = addImagePrefix('/images/post1.svg');
const avatar = addImagePrefix('/images/teamMembersAvatars/smateo.jpeg');
const authorName = 'SMATEO49';
const date = '10 Oct 2021 | 19:40';
const text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ea recusandae pariatur, aperiam, iure error corporis placeat vel at laborum, laudantium similique temporibus optio officia exercitationem atque neque repellat quia maiores. Molestiae est, quasi corporis nostrum iure exercitationem vero quod voluptatibus voluptas fugiat accusantium culpa pariatur quisquam? Neque impedit, officia corrupti commodi eligendi sed atque perspiciatis, magni repellendus debitis nemo sapiente repellat eaque asperiores odio temporibus amet iure quia, mollitia expedita? Reprehenderit harum molestias iure mollitia. Dignissimos aliquam dicta natus officia quisquam magnam molestiae eligendi voluptatum facere minus ducimus perferendis, nostrum laboriosam excepturi voluptatem sit ratione ea culpa maiores mollitia, impedit vero! Neque, ipsa voluptatibus. Nesciunt magnam porro at voluptatibus veritatis repellendus, minima quisquam rerum accusantium, quidem assumenda, quaerat ullam eaque? Magni esse ex quod at dignissimos et! Aliquam cumque dignissimos perspiciatis animi consequatur at. Labore officiis voluptatum ratione iusto suscipit ut odio recusandae quasi veritatis beatae accusamus, exercitationem accusantium corrupti nostrum quisquam aspernatur libero laborum laudantium ex minima blanditiis aliquam quod? Saepe quod temporibus facere cum officiis magni labore fuga nostrum veniam maiores, corporis, odit harum accusantium. Velit rerum aperiam omnis aliquam ipsa repudiandae consequuntur aspernatur maxime laboriosam necessitatibus harum illo fugiat perferendis itaque saepe sint, ratione et totam deleniti. Corrupti minima quos blanditiis amet, numquam nisi, incidunt dolorum reprehenderit perspiciatis tempora excepturi! A recusandae totam saepe, quia perferendis quae accusamus consectetur aliquam, nisi assumenda corporis! Commodi, modi possimus non a incidunt placeat expedita quaerat nisi cupiditate quia quae, necessitatibus optio sunt nihil amet quisquam delectus. Repellendus porro necessitatibus eum voluptate! Eveniet eaque sint repellat veniam iste corrupti velit, ut maiores, dolorem dignissimos, tempore itaque magnam sunt! Ab doloribus in tenetur debitis dolor, veritatis nostrum excepturi ipsam. Ut dolor libero iste possimus veritatis. Odit, facilis ad provident dignissimos nihil adipisci earum corporis cumque! Consectetur nulla molestiae iste vitae explicabo quibusdam recusandae nemo iusto minima molestias, inventore exercitationem voluptates placeat aut at a excepturi quae corporis rem rerum. At excepturi quae blanditiis repudiandae fugit non nostrum magni, quo labore ex delectus dolorum quia est nemo rem quaerat aliquam molestiae recusandae animi pariatur quos, sed quisquam? Quae ex vitae unde voluptatem optio commodi consectetur facere quam fugit? Earum ea sit corporis odio fugit, quod officia voluptate ullam mollitia impedit eum temporibus accusantium totam vel incidunt? Nostrum laboriosam, voluptatibus in, impedit deserunt quaerat vero facere est obcaecati quasi aperiam! Enim molestiae necessitatibus laboriosam iure illum ea, vel aspernatur quibusdam omnis vitae velit fugit odit natus magni quaerat ducimus nisi quia perferendis aut amet temporibus. Deleniti explicabo culpa consectetur quidem eum labore dolore laudantium quibusdam tenetur delectus iste, adipisci atque ipsum fuga enim excepturi numquam ratione vero porro temporibus impedit hic doloremque! Corrupti nobis porro quia deleniti illum nesciunt labore qui recusandae ipsam, tempora expedita cum voluptas quo ipsum itaque sit consequuntur natus eum earum omnis reprehenderit sed. Molestias saepe officia beatae totam magni assumenda facere, vel eligendi. Tempora impedit fuga praesentium perferendis corporis ipsa vitae excepturi sequi suscipit dolore vel, aliquid hic reiciendis dolorum itaque! Delectus possimus quos voluptatem inventore, dolorem ipsam?';

const Post = ({ content }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <Layout pageTitle={'post'}>
            <Header isHomepage={false} />
            <div className="flex flex-row px-48 w-full h-360px " style={{ marginTop: '80px' }}>
                <div className="absolute top-160px -left-56 transform -skew-x-30 translate-x-96 bg-white w-1/2 h-360px z-20" />
                <div className="static h-full w-4/6 pl-6 block z-30 bg-white">
                    <div className="flex flex-row transform mb-7">
                        <div>
                            <Link href="/">
                                <a className="text-xl text-blue-font  font-bold hover:no-underline">HOME </a>
                            </Link>
                        </div>
                        <div>
                            <Link href="/blogsPage">
                                <a className="text-xl text-blue-font  font-bold hover:no-underline"> &#707; NEWS</a>
                            </Link>
                        </div>
                        <div>
                            <Link href="#">
                                <a className="text-xl text-blue-font  font-bold hover:no-underline"> &#707; ARTICLE</a>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="block text-blue-darkfont font-bold text-7xl text-left bg-transparent w-full h-auto"
                        style={{ maxHeight: '260px' }}
                    >
                        Święta tuż tuż - Nie zwalniamy przed końcem roku
                    </div>
                    <div className="flex mt-7">
                        <div
                            style={{ backgroundImage: 'url(' + avatar + ')' }}
                            className="bg-cover h-50px w-50px z-30"
                        ></div>
                        <div className="inline-block h-50px ml-6">
                            <div className="text-gray-font font-bold text-2xl z-30 h-25px">{authorName}</div>
                            <div className="text-xl text-blue-font  font-medium h-25px">{date}</div>
                        </div>
                    </div>
                </div>
                <div
                    className="h-9/10 w-full relative block z-10"
                    style={{
                        backgroundPosition: 'right',
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: 'url(' + image + ')',
                    }}
                ></div>
            </div>
            <div className="text-gray-font px-96 font-medium text-2xl my-16">{text}</div>
            <CopyRights />
        </Layout>
    );
};

export default Post;

export async function getStaticPaths() {
    const paths = getAllPostIds('content/blogposts');
    return {
        paths,
        fallback: false,
    };
}

export const getStaticProps = () => {
    return {
        props: {
            content: getAllPosts(),
        },
    };
};
