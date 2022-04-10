import Head from "next/head";
import { useTheme } from "next-themes";
import { getAllCertificates } from "../functions/getAllCertificates";

export default function certificates({ certificates }) {
    const { theme, setTheme } = useTheme();
    return ( 
        <div>
            <Head>
                <title>Certificates Page</title>
                
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
                {certificates.reverse().map(cert => (
                    <div className="content-item">
                        <img src={cert.image.url} style={{width: "100%"}}/>
                        <h2>{cert.certificateName}</h2>
                        <p>{cert.certificateDescription}</p>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .content{
                    @media (pointer: none), (pointer: coarse) {
                        width: 90%;
                        margin-top: 80px;
                    }

                    .content-item{
                        display:grid;
                        margin-bottom:80px;

                        h2{
                            margin:20px 0;
                        }
                    }
                }
            `}</style>
        </div>
    );
}

export const getStaticProps = async () => {
    const certificates = await getAllCertificates();
    return {
        props: {
            certificates
        },
    }
}