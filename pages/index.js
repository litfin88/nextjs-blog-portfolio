import React, { Component } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Typical from "react-typical";
import {
  FaInstagram,
  FaTelegram,
  FaMedium,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";


const TypingAnimation = React.memo(
  () => {
    return (
      <Typical
        loop={3}
        wrapper="h2"
        steps={[
          "Frontend Developer",
          2000,
          "Game Developer",
          2000,
          "3D Designer",
          2000,
        ]}
      />
    )
  },
  (props, prevProps) => true
)

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Head>
        <title>Portfolio - Main Page</title>
        <meta name="description" content="With this website, you can have information about me and browse my blogs." />
        <meta name="robots" content="index, follow" />

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
        <div className="ball1">
          <motion.img
            src="/image/ball-1.svg"
            alt="ball-1"
            whileHover={{ y: -10, rotate: 45, transition: { duration: 0.4 } }}
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          />
        </div>

        <div className="ball2">
          <motion.img
            src="/image/ball-2.svg"
            alt="ball-2"
            whileHover={{ y: -10, rotate: 45, transition: { duration: 0.4 } }}
            drag
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          />
        </div>

        <div>
          <a>Hello, I am</a>
          <br />

          {/* EDIT HERE AND PUT YOUR NAME */}
          <h1 className="text-green-500">EMIRHAN KURSUN</h1>
          
          <div className="typical_text">
            <TypingAnimation />
          </div>
          <div className="code_part">
            <p style={{ color: "#808080" }}>// Portfolio.js</p>
            <br />
            <p>
              <span style={{ color: "#2c2aa3" }}>const</span>{" "}
              <span style={{ color: "#499fd6" }}>functions</span> ={" "}
              <span style={{ color: "#b06b50" }}>
                "The balloons are clickable and cool!"
              </span>
            </p>
            <p>
              <span style={{ color: "#9c6e9f" }}>return</span>{" "}
              <span style={{ color: "#499fd6" }}>functions</span>;
            </p>
            <br />
            <p style={{ color: "#808080" }}>
              // Welcome to my personal website!
            </p>
            <p style={{ color: "#808080" }}>
              // Navigate the site with the navigation buttons.
            </p>
            <br />
            <p style={{ color: "#808080" }}>`<a href="/certificates" style={{color: "#2c2aa3", fontFamily: "Fira Code", textDecoration: "none", fontSize: "18px"}}>{"${"}<a style={{color: "#499fd6"}}>Click</a>{"}"}</a>` // to see my certificates, thanks.</p>
            <br />
            <p className="waiting_for_write">|</p>
          </div>
          {/* EDIT HERE AND PUT YOUR SOCIAL ACCOUNT LINKS */}

          {/* For Instagram */}
          <div onClick={()=>window.open("https://www.instagram.com/krsn.emirhan/", "_blank")} className="social_button">
            <p>
              <FaInstagram />
            </p>
          </div>

          {/* For Telegram */}
          <div onClick={()=>window.open("https://t.me/scalebit", "_blank")} className="social_button">
            <p>
              <FaTelegram />
            </p>
          </div>

          {/* For Medium */}
          <div onClick={()=>window.open("https://medium.com/@krsn.emirhan", "_blank")} className="social_button">
            <p>
              <FaMedium />
            </p>
          </div>

          {/* For Github */}
          <div onClick={()=>window.open("https://github.com/litfin88", "_blank")} className="social_button" style={{ float: "right" }}>
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

      <style jsx>
        {`
          .footer{
            display: none !important;
          }

          @keyframes mymove {
            0% {
              opacity: 100%;
            }
            50% {
              opacity: 0%;
            }
            100% {
              opacity: 100%;
            }
          }

          .typical_text{
            background: linear-gradient(90deg, rgba(248,0,255,1) 0%, rgba(169,48,212,1) 49%, rgba(132,0,255,1) 100%);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            font-style: normal;
            width:300px;
            margin: 10px 0;
            
            h2 {
              font-size:24px;
              font-weight: 400;
            }
          }

          .ball1 {
            user-drag: none;
            -webkit-user-drag: none;
            user-select: none;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            display: block;
            height: auto;
            position: absolute;
            bottom: 10%;
            left: 10%;
            z-index: 1;

            @media (pointer: none), (pointer: coarse) {
              display: none;
            }
          }

          .ball2 {
            user-drag: none;
            -webkit-user-drag: none;
            user-select: none;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            display: block;
            height: auto;
            position: absolute;
            top: 28%;
            right: 10%;
            z-index: 1;

            @media (pointer: none), (pointer: coarse) {
              display: none;
            }
          }

          .waiting_for_write {
            animation: mymove 1s infinite;
          }

          .social_button {
            transition: 200ms all;
            width: 50px;
            height: 50px;
            background-color: white;
            border-radius: 100%;
            align-items: center;
            display: flex;
            margin-top: 20px;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            float: left;
            margin-right: 10px;
            position: relative;
            z-index: 2;

            p {
              font-size: 25px;
              margin: 0 auto;
              margin-top: 6px;
              color: black;
            }

            &:hover {
              transition: 200ms all;
              transform: translate(0, -10%);
              cursor: pointer;
            }
          }

          .content {
            @media (pointer: none), (pointer: coarse) {
              width: 90%;
              margin-top: 80px;
            }

            p {
              font-family: "Fira Code", sans-serif ;
              font-weight: 400;

              span {
                font-family: "Fira Code", sans-serif !important;
              }
            }
          }

          .code_part {
            width: 100%;
            border-radius: 10px;
            background-color: var(--back-content);
            margin-top: 20px;
            padding: 30px;
            padding-right: 100px;
            box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
            position: relative;
            z-index: 2;
          }
        `}
      </style>
    </div>
  );
}
