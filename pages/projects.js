import Head from "next/head";
import { useTheme } from "next-themes";
import ProjectCard from "../components/ProjectCard";
import { useState } from "react";
import { groq } from "next-sanity";
import { getClient } from "../utils/sanity";

const query = groq`*[_type == "project"]{
    _id,
    title,
    description,
    "image": image.asset->url,
    projectType,
    tags,
    _createdAt,
    source,
    demo,
  }`;

export default function ProjectsPage({project}) {
    const { theme, setTheme } = useTheme();
    const [ header, setHeader ] = useState("");

    const addHeader = (headerObj) => {
        if(header.includes(elem => elem == headerObj)){
            //Dont do anything
        }else{
            setHeader(header + ", " + headerObj);
        }
    }

    return ( <>
            <Head>
                <title>Projects Page</title>
                
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
            
            {console.log(header)}
            <div className="content">
                <div className="project_loc">
                    {project.map(projectHeader =>
                        {header.includes(projectHeader.projectType)?<></>:addHeader(projectHeader.projectType)}
                    )}

                    {header.split(", ").slice(1).map(hdr => (
                        <>
                            <h2>{hdr} Projects</h2>
                            <div>
                            {project.map(project => (
                                project.projectType === hdr?<ProjectCard key={project._id} project={project} />:<></>
                            ))}
                            </div>
                        </>
                    ))}
                
                </div>
            </div>

            <style jsx>{`
                .content{
                    @media (pointer: none), (pointer: coarse) {
                        width: 90%;
                        margin-top: 80px;
                    }
                }
                .project_loc{

                    div{
                        display: flex;
                        flex-wrap: wrap;
                        margin: 0 auto;
                        text-align:center;
                        gap:20px;
                    }

                    h2{
                        margin: 40px 0 20px 10px;
                    }
                }
            `}</style>
        </>
    );
}

export async function getStaticProps() {
    let response = await getClient().fetch(query);
  
    return {
      props: {
        project: response || null,
      },
      revalidate: 5,
    };
  }