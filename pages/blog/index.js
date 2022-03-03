import BlogTab from "../../components/BlogTab";
import { getAllBlogs } from "../../functions/getAllBlogs";
import Head from "next/head";
import { useTheme } from "next-themes";

const Home = ({blogs}) => {
    const { theme, setTheme } = useTheme();

    return (
        <div className="content">
            <Head>
                <title>React, Software and Off Topic Blog</title>
                
                {/* If you have a logo, write it in this section. "emirhank.png" is the logos for the white theme,
                "emirhank_white.png" is the logos for the black theme.
                If you don't have a logo, you can delete the "<link />" section. */}
                <link
                rel="icon"
                type="image/x-icon"
                href={
                    "/image/" +
                    (theme === "light" ? "emirhank.png" : "emirhank_white.png")
                }
                />
            </Head>

            <div>
                {blogs.map(blog=>(
                    <BlogTab key={blog.id} blog={blog} />
                ))}
            </div>

            <style jsx>{`
                .content{
                    @media (pointer: none), (pointer: coarse) {
                        width: 90%;
                        margin-top: 80px;
                    }
                }
            `}</style>
        </div>
    );
}

export const getStaticProps = async () => {
    const blogs = await getAllBlogs();
    return {
        props: {
            blogs
        },
    }
}

export default Home;