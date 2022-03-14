import { useTheme } from "next-themes";
import Head from "next/head";
import Link from "next/link"

export default function noSource() {
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
            <h1>Sorry!</h1>
            <br />
            <p>This project does not have any source code. This may be because the project is hidden or because I don't want to show the source codes of the project. I would probably like to activate this project in the future.<br /><br />Thank you for your understanding!</p>
            <br />
            <Link href={`/projects`}>
                <button className="continue-button" href>Return to Projects</button>
            </Link>
        </div>

        <style jsx>{`
            .content{
                @media (pointer: none), (pointer: coarse) {
                    width: 90%;
                    margin-top: 80px;
                }
            }

            .continue-button{
                transition: 200ms all;
                padding: 10px 20px;
                border-radius: 50px;
                color: white;
                font-size:16px;
                box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                background: linear-gradient(90deg, rgba(248,0,255,1) 0%, rgba(169,48,212,1) 49%, rgba(132,0,255,1) 100%);
                cursor: pointer;

                &:hover{
                    transition: 400ms all;
                    padding: 10px 25px;
                    margin-bottom:0;
                }
            }
        `}</style>
    </>)
}