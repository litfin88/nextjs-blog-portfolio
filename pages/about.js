import Head from "next/head";
import { useTheme } from "next-themes";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Skill from "../components/Skill";
import { getAllAchivements } from "../functions/getAllAchivements";

export default function about({ achivements }) {
  const { theme, setTheme } = useTheme();
  const reversedAchivements = achivements.reverse();

  return (
    <div>
      <Head>
        <title>About Me - Emirhan Kursun</title>
        <meta name="robots" content="index, follow" />
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
            <img
              src="/image/profilepic.jpg"
              alt="Profile"
              width={300}
              height={300}
            />
          </div>
          <div className="text_content">
            <span className="hello_text">HELLO!</span>

            {/* Edit this section for your name */}
            <h1>
              I am <b>Emirhan Kurşun</b>
            </h1>
            <p
              style={{
                fontSize: "16px",
                marginBottom: "20px",
                marginTop: "5px",
              }}
            >
              Game Developer, Frontend Developer and Designer
            </p>
            <span className="divider"> ‎</span>
            <br />
            <div className="infos">
              {/* Edit this section for your infos */}
              <p>
                <b>Location: </b>Istanbul/Turkey
              </p>
              <p>
                <b>Email: </b>contact@emirhankursun.com
              </p>
              <p>
                <b>Birthday: </b>17.12.2004
              </p>
            </div>
            <div>
              {/* EDIT HERE AND PUT YOUR SOCIAL ACCOUNT LINKS */}

              {/* For Instagram */}
              <div
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/krsnemirhan/",
                    "_blank"
                  )
                }
                className="social_button"
              >
                <p>
                  <FaInstagram />
                </p>
              </div>

              {/* For Github */}
              <div
                onClick={() =>
                  window.open("https://github.com/litfin88", "_blank")
                }
                className="social_button"
              >
                <p>
                  <FaGithub />
                </p>
              </div>

              {/* For LinkedIn */}
              <div
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/emirhan-kur%C5%9Fun-037a3b206",
                    "_blank"
                  )
                }
                className="social_button"
              >
                <p>
                  <FaLinkedin />
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <h2 style={{ margin: "40px 0 20px 0" }}>- ABOUT ME -</h2>

        {/* Edit this section for your biography */}
        <p style={{ lineHeight: "1.6", fontFamily: "Open Sans" }}>
          Hello, I am Emirhan Kurşun. I was born on December 17, 2004 in a
          village in Nevşehir. I completed my high school education in Istanbul.
          <br />
          <br />I started my software life at the age of 12 and since then I
          have been developing various software. Beginning with game
          development, I've made gains on a variety of topics and I'm actively
          involved in web development. <br />
          <br />
          My first game that I published professionally in the "hypercasual"
          category was the game 'Space Ball'. I received various comments about
          the game and continued to improve myself. I am actively working on crypto-based indie game sales
          platform.
        </p>
        <h2 style={{ margin: "40px 0 20px 0" }}>- SKILLS -</h2>
        <div>
          <Skill name="unity 3d" percent={85} />
          <Skill name="blender & modeling" percent={90} />
          <Skill name="substance painter" percent={65} />
          <Skill name="html & js & css" percent={85} />
          <Skill name="c#" percent={75} />
          <Skill name="react.js" percent={70} />
          <Skill name="ui design (figma)" percent={80} />
        </div>
        <h2 style={{ margin: "40px 0 20px 0" }}>- ACHIVEMENTS -</h2>
        {achivements.map((achiv) => (
          <div className="achivement_tab" key={achiv.id}>
            <p>{achiv.name}</p>
            <p style={{ fontSize: "0.8em" }}>({achiv.year})</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .content {
          text-align: center;

          @media (pointer: none), (pointer: coarse) {
            width: 90%;
            margin-top: 80px;
          }

          .achivement_tab {
            width: 100%;
            height: auto;
            text-align: left;
            padding: 10px 20px;
            margin: 10px 0;
            background: var(--back-header);
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

            p {
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

          .content_med {
            width: 100%;
            height: auto;
            text-align: left;
            border-radius: 10px;
            background: var(--back-header);
            padding: 20px;
            display: flex;

            @media (pointer: none), (pointer: coarse) {
              display: grid;
            }

            .text_content {
              float: left;
              width: 55%;
              margin-left: 20px;

              @media (pointer: none), (pointer: coarse) {
                width: 100%;
                margin: 30px 5px;
              }

              .divider {
                height: 1px;
                width: 100%;
                display: flex;
                margin: 0 auto;
                background: gray;
              }

              .hello_text {
                color: white;
                font-weight: 700;
                height: 30px;
                line-height: 1.1;
                display: inline-block;
                padding: 7px 12px;
                text-transform: uppercase;
                position: relative;
                background: linear-gradient(
                  90deg,
                  rgba(248, 0, 255, 1) 0%,
                  rgba(169, 48, 212, 1) 49%,
                  rgba(132, 0, 255, 1) 100%
                );

                &::before {
                  content: "";
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

              h1 {
                font-weight: 400;
                font-size: 32px;
                color: var(--foreground);
                margin-top: 20px;
              }

              .infos {
                p {
                  font-size: 1em;
                  margin-top: 10px;

                  b {
                    text-transform: uppercase;
                  }
                }
              }
            }

            .img_content {
              width: 35%;
              float: left;
              @media (pointer: none), (pointer: coarse) {
                width: 100%;
              }
            }
          }
        }
      `}</style>
    </div>
  );
}

export const getStaticProps = async () => {
  const achivements = (await getAllAchivements()) || [];
  return {
    props: {
      achivements,
    },
  };
};
