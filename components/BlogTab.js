import React from "react";
import moment from "moment";
import Link from "next/link";
  
const BlogTab = ({
  blog: { id, title, slug, content, image, tags, createdAt, excerpt, creator },
}) => {
  return (
    <div className="blog-tab" key={id}>
      <div className="img-content">
        <img src={image} alt="Profile" width={300} height={300} />
      </div>
      <div className="text-content">
        <h2>{title}</h2>
        <span style={{margin: "20px 0"}} className="divider" > ‎</span>
        <div className="paragraph">
            <p>{excerpt}</p>
            <p className="created" style={{opacity: "0.5", marginTop: "10px", fontSize:"1em"}}>{moment(createdAt).fromNow() + " from " + creator}</p>
        </div>
        <div className="button-div">
            <Link href={`/blog/post/${slug.current}`}>
                <span className="continue-button">
                    Continue Reading
                </span>
            </Link>
        </div>
      </div>

      <style jsx>{`
        .created{
            @media (pointer: none), (pointer: coarse) {
            margin-bottom:50px;
            }
        }

        .blog-tab {
          width: 100%;
          height: auto;
          padding: 20px;
          display: flex;
          border-radius: 10px;
          background: var(--back-header);
          text-align: left;
          margin-bottom:20px;
          box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
          
          @media (pointer: none), (pointer: coarse) {
            display: grid;
            }

          .img-content {
            width: 35%;
            float: left;

            @media (pointer: none), (pointer: coarse) {
              width: 100%;
            }

            img{
              object-fit: cover;
            }
          }

          .text-content {
            float: left;
            width: 60%;
            margin-left: 10px;
            position: relative;

            @media (pointer: none), (pointer: coarse) {
                width:100%;
                margin:30px 5px;
            }

            .button-div{
                transition: 200ms all;
                position: absolute;
                bottom: 0px;
                margin-bottom:3%;

                @media (pointer: none), (pointer: coarse) {
                    margin-bottom:0;
                }
            }

            .divider{
                height:1px;
                width:100%;
                display: flex;
                margin:0 auto;
                background: gray;
            }

            .continue-button{
                transition: 200ms all;
                padding: 10px 20px;
                border-radius: 50px;
                color: white;
                box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                background: linear-gradient(90deg, rgba(248,0,255,1) 0%, rgba(169,48,212,1) 49%, rgba(132,0,255,1) 100%);
                cursor: pointer;

                &:hover{
                    transition: 400ms all;
                    padding: 10px 25px;
                    margin-bottom:0;
                }
            }
          }
        }
      `}</style>
    </div>
  );
};

export default BlogTab;
