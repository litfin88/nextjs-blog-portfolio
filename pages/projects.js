import { getAllProjects } from "../functions/getAllProjects";
import Head from "next/head";
import { useTheme } from "next-themes";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage({projects}) {
    const { theme, setTheme } = useTheme();
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
            
            <div className="content">
                <div className="project_loc">
                    {projects.reverse().map(project => (
                        <ProjectCard key={project.id} project={project} />
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
                    display: flex;
                    flex-wrap: wrap;
                    margin: 0 auto;
                    text-align:center;
                    gap:20px;
                }
            `}</style>
        </>
    );
}

export const getStaticProps = async () => {
    const projects = await getAllProjects();
    return {
        props: {
            projects
        },
    }
}