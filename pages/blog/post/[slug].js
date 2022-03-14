import React from "react";
import Head from "next/head";
import { useTheme } from "next-themes";
import moment from "moment";
import { groq } from "next-sanity";
import { getClient } from "../../../utils/sanity";

const PostDetails = ({ blog }) => {
  const { theme, setTheme } = useTheme();

  const correctType = (text) => {
    let curText = text;
    let textArray = curText.split("\n")

    return (
    textArray.map(txt => (
      <>
        <p>{txt}</p>
        <br />
      </>
    )))
  }
  return (
    <div className="content">
      <Head>
        <title>{blog[0].title}</title>
        <meta name="description" content={blog[0].excerpt} />
        
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
      <div className="main-content">
        <img src={blog[0].image} width="100%" />
        <p style={{fontSize: "0.9em", color: "#f800ff", fontWeight: "600", marginTop: "10px"}}>{blog[0].category}</p>
        <h2 style={{margin: "10px 0 5px 0"}}>{blog[0].title}</h2>
        <p style={{opacity: "0.5", marginBottom: "20px", fontSize:"0.9em", fontFamily: "Open Sans"}}>{moment(blog[0].createdAt).fromNow() + " from " + blog[0].creator}</p>
        <div>{correctType(blog[0].content)}</div>
        <h4>Tags</h4>
        <div style={{display: "flex"}}>
        {blog[0].tags.map(tag=>(
          <p className="tag-holder">{tag}</p>
        ))}
        </div>
        <div>
          <p></p>
        </div>
      </div>

      <style jsx>{`
        .content{
          @media (pointer: none), (pointer: coarse) {
            width: 90%;
            margin-top: 80px;
          }
        }

        .main-content{
          width: 100%;
          height: auto;
          background-color: var(--back-header);
          padding: 20px;

          img{
            border-radius:10px;
            max-height: 400px;
            object-fit: cover;
            user-select: none;
            -ms-user-select: none;
            -webkit-user-select: none;
          }

          .tag-holder{
            padding: 5px 15px;
            margin-right:5px;
            margin-top:10px;
            border-radius:5px;
            font-size: 0.8em;
            font-weight:500;
            color:white;
            background: linear-gradient(90deg, rgba(248,0,255,1) 0%, rgba(169,48,212,1) 49%, rgba(132,0,255,1) 100%);
          }
        }  
      `}</style>
    </div>
  );
};

export async function getStaticProps({params}) {
  const query = groq`*[_type == "blog" && slug.current == $slug]{
    id,
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

  const post = await getClient().fetch(query, {
    slug: params.slug
  });

  if (!post) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      blog: post
    }
  }
}

export async function getStaticPaths(){
  const query2 = `*[_type == blog]{
    _id,
    slug {
      current
    }
  }`;

  const posts = await getClient().fetch(query2)

  const paths = posts.map(post => ({
    params: {
      slug: post.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export default PostDetails;
