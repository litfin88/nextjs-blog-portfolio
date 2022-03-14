import React from "react";

const projectCard = ({
  project: { title, description, image, source, tags, demo },
}) => {
  return (
    <>
      <div className="project_card">
        <img src={image} alt="Project image" />
        <h3>{title}</h3>
        <p>{description}</p>
        <div style={{marginTop: 20}}>
          {source != ""?<button className="continue-button" onClick={()=>window.open(source, "_blank")}>Source</button>:<></>}
          {demo != ""?<button className="continue-button" onClick={()=>window.open(demo, "_blank")}>Demo</button>:<></>}
        </div>
        {tags.map(tag=>(
            <b className="tag_holder">-{tag}-</b>
        ))}
      </div>
      <style jsx>{`
        .project_card{
            transition:100ms all;
            width: calc(50% - 20px);
            height: auto;
            border-radius: 10px;
            background: var(--back-header) !important;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            border:0px solid transparent;
            text-align:left;
            padding: 20px;
            margin:0 auto;

            @media (pointer: none), (pointer: coarse) {
                width: 400px;
            }

            &:hover{
                transition:100ms all;
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            }

            img{
                border-radius:10px;
                width:100%;
                height: 200px;
                object-fit: cover;
            }

            h3{
                margin:20px 0 10px 0;
                color:var(--foreground);
            }

            p{
                color:var(--foreground);
            }

            .tag_holder{
                border-radius:100px;
                padding-right:10px;
                opacity:0.8;
                float:left;
                font-weight:500;
                font-size:14px;
                margin-right:5px;
                color: var(--foreground);
                margin-top:20px;
            }

            .continue-button{
                transition: 200ms all;
                padding: 10px 20px;
                border-radius: 50px;
                color: white;
                font-weight:500;
                box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                background: linear-gradient(90deg, rgba(248,0,255,1) 0%, rgba(169,48,212,1) 49%, rgba(132,0,255,1) 100%);
                margin-right:10px;
                font-size:16px;
                cursor: pointer;

                &:hover{
                    transition: 400ms all;
                    transform: translate(0, -3px);
                    margin-bottom:0;
                }
            }
        }

        `}</style>
    </>
  );
};

export default projectCard;
