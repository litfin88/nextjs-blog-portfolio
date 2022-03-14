import BlogTab from "../../components/BlogTab";
import Head from "next/head";
import { useTheme } from "next-themes";
import { groq } from "next-sanity";
import { getClient } from "../../utils/sanity";

const query = groq`*[_type == "blog"]{
    _id,
    title,
    slug,
    category,
    content,
    excerpt,
    "image": image.asset->url,
    tags,
    createdAt,
    creator,
  }`;

const Home = ({blog}) => {
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
                {blog.reverse().map(blogC=>(
                    <BlogTab key={blogC._id} blog={blogC} />
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

export async function getStaticProps() {
    let response = await getClient().fetch(query);
  
    return {
      props: {
        blog: response || null,
      },
      revalidate: 5,
    };
  }

export default Home;