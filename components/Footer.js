const Footer = () => {
    return (
        <div>
            <p className="footer">Copyright © 2022 Emirhan Kurşun. All rights reserved.</p>

            <style jsx>{`
                .footer{
                    font-family: 'Open Sans', sans-serif;
                    position: absolute;
                    left:50%;
                    transform: translate(-50%, -40px);

                    @media (pointer:none), (pointer:coarse) {
                        transform: translate(0);
                        text-align:center;
                        width:90%;
                        left:5%;
                        padding-bottom:10px;
                    }
                }    
            `}</style>
        </div>
    );
}

export default Footer;