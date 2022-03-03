import React from "react";

const projectCard = ({
  project: { title, description, image, source, tags },
}) => {
  return (
    <>
      <div className="project_card" onClick={()=>window.open(source, "_blank")}>
        <img src={image.url} alt="asd" />
        <h3>{title}</h3>
        <p>{description}</p>
        {tags.map(tag=>(
            <b className="tag_holder">{tag}</b>
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
            cursor: pointer;

            @media (pointer: none), (pointer: coarse) {
                width: 400px;
            }

            &:hover{
                transition:100ms all;
                transform: translate(0, -5px);
            }

            img{
                border-radius:10px;
                width:100%;
                height: 200px;
            }

            h3{
                margin:20px 0 10px 0;
                color:var(--foreground);
            }

            p{
                color:var(--foreground);
            }

            .tag_holder{
                background: gray;
                border-radius:5px;
                padding:5px 15px;
                float:left;
                font-weight:600;
                margin-top:20px;
                margin-right:5px;
                color: white;
            }
        }

        `}</style>
    </>
  );
};

export default projectCard;
