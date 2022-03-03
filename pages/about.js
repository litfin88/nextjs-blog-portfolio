import Head from "next/head"
import { useTheme } from "next-themes";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Skill from "../components/Skill";
import { getAllAchivements } from "../functions/getAllAchivements";

export default function about({ achivements }){
    const { theme, setTheme } = useTheme();

    return(
        <div>
            <Head>
                <title>About Me - Emirhan Kursun</title>
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
                <div className="content_med">
                    <div className="img_content">
                        <img src="/image/profilepic.jpg" alt="Profile" width={300} height={300} />
                    </div>
                    <div className="text_content">
                        <span className="hello_text">HELLO!</span>
                        
                        {/* Edit this section for your name */}
                        <p>I am <b>Emirhan Kurşun</b></p>
                        <p style={{fontSize: "16px", marginBottom: "20px", marginTop: "5px"}}>Frontend Developer, Game Developer and Designer</p>
                        <span className="divider" > ‎</span>
                        <br />
                        <div className="infos">

                            {/* Edit this section for your infos */}
                            <p><b>Location: </b>Istanbul/Turkey</p>
                            <p><b>Email: </b>krsn.emirhan@gmail.com</p>
                            <p><b>Birthday: </b>17.12.2004</p>
                        </div>
                        <div>
                            {/* EDIT HERE AND PUT YOUR SOCIAL ACCOUNT LINKS */}

                            {/* For Instagram */}
                            <div onClick={()=>window.open("https://www.instagram.com/krsn.emirhan/", "_blank")} className="social_button">
                                <p>
                                <FaInstagram />
                                </p>
                            </div>

                            {/* For Github */}
                            <div onClick={()=>window.open("https://github.com/litfin88", "_blank")} className="social_button">
                                <p>
                                <FaGithub />
                                </p>
                            </div>

                            {/* For LinkedIn */}
                            <div onClick={()=>window.open("https://www.linkedin.com/in/emirhan-kur%C5%9Fun-037a3b206", "_blank")} className="social_button">
                                <p>
                                <FaLinkedin />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <h2 style={{margin: "40px 0 20px 0"}}>- ABOUT ME -</h2>
                <p style={{lineHeight: "1.6", fontFamily: "Open Sans"}}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.<br /><br />Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                <h2 style={{margin: "40px 0 20px 0"}}>- SKILLS -</h2>
                <div>
                    <Skill name="html" percent={90} />
                    <Skill name="css & sass" percent={85} />
                    <Skill name="php" percent={75} />
                    <Skill name="javascript" percent={70} />
                    <Skill name="c#" percent={75} />
                    <Skill name="react.js" percent={70} />
                    <Skill name="3d design (blender)" percent={85} />
                    <Skill name="ui design" percent={90} />
                </div>
                <h2 style={{margin: "40px 0 20px 0"}}>- ACHIVEMENTS -</h2>
                {achivements.reverse().map(achiv => (
                    <div className="achivement_tab" key={achiv.id}>
                        <p>{achiv.name}</p>
                        <p style={{fontSize: "0.8em"}}>({achiv.year})</p>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .content{
                    text-align:center;

                    @media (pointer: none), (pointer: coarse) {
                        width: 90%;
                        margin-top: 80px;
                    }

                    .achivement_tab{
                        width:100%;
                        height:auto;
                        text-align:left;
                        padding:10px 20px;
                        margin: 10px 0;
                        background: var(--back-header);
                        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

                        p{
                            color: var(--foreground);
                        }
                    }

                    .social_button {
                        transition: 200ms all;
                        width: 35px;
                        height: 35px;
                        background-color: var(--foreground);
                        border-radius: 100%;
                        align-items: center;
                        display: flex;
                        margin-top: 20px;
                        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                        float: left;
                        margin-right: 10px;

                        p {
                        font-size: 16px !important;
                        margin: 0 auto;
                        margin-bottom: 0px !important;
                        margin-top: 6px !important;
                        color: var(--background) !important;
                        }

                        &:hover {
                        transition: 200ms all;
                        transform: translate(0, -10%);
                        cursor: pointer;
                        }
                    }

                    .content_med{
                        width:100%;
                        height: auto;
                        text-align:left;
                        border-radius:10px;
                        background:var(--back-header);
                        padding:20px;
                        display:flex;

                        @media (pointer: none), (pointer: coarse) {
                            display: grid;
                        }

                        .text_content{
                            float:left;
                            width: 55%;
                            margin-left:20px;

                            @media (pointer: none), (pointer: coarse) {
                                width:100%;
                                margin:30px 5px;
                            }

                            .divider{
                                height:1px;
                                width:100%;
                                display: flex;
                                margin:0 auto;
                                background: gray;
                            }

                            .hello_text{
                                color: white;
                                font-weight: 700;
                                height:30px;
                                line-height: 1.1;
                                display: inline-block;
                                padding: 7px 12px;
                                text-transform: uppercase;
                                position: relative;
                                background: linear-gradient(90deg, rgba(248,0,255,1) 0%, rgba(169,48,212,1) 49%, rgba(132,0,255,1) 100%);

                                &::before{
                                    content: '';
                                    width: 0;
                                    height: 0;
                                    top: 100%;
                                    left: 5px;
                                    display: block;
                                    position: absolute;
                                    border-style: solid;
                                    border-width: 0 0 8px 8px;
                                    border-color: transparent;
                                    border-left-color: #f800ff;
                                }
                            }

                            p{
                                font-size:32px;
                                color: var(--foreground);
                                margin-top:20px;
                            }

                            .infos{
                                p{
                                    font-size:1em;
                                    margin-top:10px;

                                    b{
                                        text-transform: uppercase;
                                    }
                                }
                            }
                        }

                        .img_content{
                            width: 35%;
                            float:left;
                            @media (pointer: none), (pointer: coarse) {
                                width:100%;
                            }
                        }
                    }
                }
            `}</style>
        </div>
    )
}

export const getStaticProps = async () => {
    const achivements = (await getAllAchivements()) || [];
    return {
        props: {
            achivements
        },
    }
}