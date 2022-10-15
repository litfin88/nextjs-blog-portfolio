import Link from "next/link";
import React, {PureComponent} from "react"
import { useTheme } from "next-themes";
import { useState } from 'react'; 

const header = () => {
    const [value, setValue] = useState("close")
    const { theme, setTheme } = useTheme();

    return (
    <div className="mainDiv">
        <header className={"header " + value}>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <a>Menu</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>About Me</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects">
                            <a>Projects</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog">
                            <a>Blog</a>
                        </Link>
                    </li>
                    <li onClick={()=>setValue(value === "open"?"close":"open")} className="mobile_menu">
                        <a><img src="/image/menu.png" width="25" height="25"></img></a>
                    </li>
                    <li className="blog_pass" onClick={()=>setTheme(theme==="dark" ? "light" : "dark")}>
                        <a>{theme === "light" ? "Dark 🌙" : "Light ☀️"}</a>
                    </li>
                </ul>
            </nav>
            <style jsx>
            {`
                .mainDiv{
                    height:500px;
                    width:500px;
                    background:gray;
                    position:absolute;
                    z-index:99;
    
                    button{
                        position: absolute;
                        width:200px;
                        height:200px;
                        border-radius:10px;
                        top:0px;
                        left:0px;
                        z-index:5;
                        background-color:gray;
                    }
                }
    
                .open{
                    transition: 100ms all;
                    @media (pointer:none), (pointer:coarse) {
                        transform: translate(0);
                    }
                }
    
                .close{
                    transition: 100ms all;
                    @media (pointer:none), (pointer:coarse) {
                        transform: translate(0, -80%);
                    }
                }
    
                .header{
                    top: 0;
                    position: absolute;
                    background: var(--back-header);
                    border-bottom: 1px solid var(--back-content);
                    width:100%;
                    margin:0 auto;
                    padding:0 25%;
                    top:0;
                    transition: 100ms all;
                    z-index: 99;
    
                    @media (pointer:none), (pointer:coarse) {
                        padding:0;
                    }
    
                    ul{
                        @media (pointer:none), (pointer:coarse) {
                            display: block;
                        }
    
                        display:flex;
    
                        li{
                            a{
                                height: 60px;
                                align-items:center;
                                padding-right:40px;
                                font-weight:500;
                                display:flex;
                                color:var(--foreground);
                                text-decoration:none;
    
                                @media (pointer:none), (pointer:coarse) { 
                                    padding-left:20px;
                                }
                            }
                        }
                    }
                }
    
                .blog_pass{
                    position:absolute;
                    right:25%;
                    border-radius: 0 0 10px 10px;
                    cursor:pointer;
    
                    a{
                        padding: 0 20px !important;
                        background: var(--lightpass);
                        color:var(--background) !important;
                    } 
    
                    @media (pointer:none), (pointer:coarse) {
                        position: relative;
                        right:0;
                        display:none;
                    }
                }
    
                .mobile_menu{
                    display: none;
                    @media (pointer:none), (pointer:coarse) {
                        display: block;
                    }
                }
            `}
            </style>
        </header>
        </div>
    );
}

export default header;