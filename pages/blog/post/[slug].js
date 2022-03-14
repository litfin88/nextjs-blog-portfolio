import React from "react";
import { getBlogSlugs } from "../../../functions/getAllBlogs";
import { getBlogDetails } from "../../../functions/getBlogDetails";
import Head from "next/head";
import { useTheme } from "next-themes";
import moment from "moment";

const getContentFragment = (index, text, obj, type) => {
  let modifiedText = text;

  if (obj) {
    if (obj.bold) {
      modifiedText = <b key={index}>{text}</b>;
    }

    if (obj.italic) {
      modifiedText = <em key={index}>{text}</em>;
    }

    if (obj.underline) {
      modifiedText = <u key={index}>{text}</u>;
    }
  }

  switch (type) {
    case "heading-three":
      return (
        <h3 key={index} style={{ margin: "20px 0", fontFamily: "Open Sans" }}>
          {modifiedText.map((item, i) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </h3>
      );
    case "paragraph":
      return (
        <p key={index} style={{ margin: "20px 0", fontFamily: "Open Sans" }}>
          {modifiedText.map((item, i) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </p>
      );
    case "heading-four":
      return (
        <h4 key={index} style={{ margin: "20px 0", fontFamily: "Open Sans" }}>
          {modifiedText.map((item, i) => (
            <React.Fragment key={i}>{item}</React.Fragment>
          ))}
        </h4>
      );
    case "image":
      return (
        <img
          key={index}
          alt={obj.title}
          height={obj.height}
          width={obj.width}
          src={obj.src}
        />
      );
    default:
      return modifiedText;
  }
};

const PostDetails = ({ blogs }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="content">
      <Head>
        <title>{blogs[0].title}</title>
        <meta name="description" content={blogs[0].excerpt} />
        
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
        <img src={blogs[0].featuredImage.url} width="100%" />
        <p style={{fontSize: "0.9em", color: "#f800ff", fontWeight: "600", marginTop: "10px"}}>{blogs[0].category}</p>
        <h2 style={{margin: "10px 0 5px 0"}}>{blogs[0].title}</h2>
        <p style={{opacity: "0.5", marginBottom: "20px", fontSize:"0.9em", fontFamily: "Open Sans"}}>{moment(blogs[0].createdAt).fromNow() + " from " + blogs[0].creator}</p>
        {blogs[0].content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) =>
            getContentFragment(itemIndex, item.text, item)
          );

          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
        <h4>Tags</h4>
        <div style={{display: "flex"}}>
        {blogs[0].tags.map(tag=>(
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

export async function getStaticProps ({ params }) {
    const blogs = await getBlogDetails(params.slug);
    return {
        props: {
            blogs
        },
    }
}

export async function getStaticPaths(){
  const slugsRes = await getBlogSlugs();
  const slugs = slugsRes.blogs;

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug.slug } })),
    fallback: false,
  }
}

export default PostDetails;
