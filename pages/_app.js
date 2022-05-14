import "../public/styles/global.css"
import Header from '../components/Header'
import { ThemeProvider } from "next-themes"
import Head from "next/head"
import NextNProgress from "nextjs-progressbar"
import Footer from "../components/Footer"
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
    const router = useRouter();

    if(router.pathname != "/" && router.pathname != "/no-source")
    return (<>
        <ThemeProvider>
            <Head>
                {/* CHANGE THIS TO YOUR BUYMEACOFFEE.COM SCRIPT AND CHANGE META TAGS */}

                <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="krsnemirhan" data-description="Support me on Buy me a coffee!" data-message="Thank you for your visiting. You can buy a coffee for me here." data-color="#5F7FFF" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
                <meta name="description" content="Emirhan Kurşun Portfolio | Blog" />
                <meta charset="utf-8" />
                <meta name="author" content="Emirhan Kurşun" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content="Emirhan Kursun, React, Portfolio, Software, Blog" />
                <meta name="googlebot" content="notranslate" />
                <meta http-equiv='content-language' content='en-us' />
            </Head>
            <NextNProgress color="#e82ae5" height={4} />
            <Header/>
            <Component {...pageProps} />
            <Footer />
        </ThemeProvider>
    </>)
    else {
        return (
        <ThemeProvider>
            <Head>
                {/* CHANGE THIS TO YOUR BUYMEACOFFEE.COM SCRIPT AND CHANGE META TAGS */}
                
                <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="krsnemirhan" data-description="Support me on Buy me a coffee!" data-message="Thank you for your visiting. You can buy a coffee for me here." data-color="#5F7FFF" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
                <meta name="description" content="Emirhan Kurşun Portfolio | Blog" />
                <meta name="author" content="Emirhan Kurşun" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content="Emirhan Kursun, React, Portfolio, Software, Blog" />
                <meta name="googlebot" content="notranslate" />
            </Head>
            <NextNProgress color="#e82ae5" height={4} />
            <Header/>
            <Component {...pageProps} />
        </ThemeProvider>
        )
    }
}