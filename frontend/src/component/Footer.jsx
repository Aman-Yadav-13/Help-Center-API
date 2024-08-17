const Footer = () => {
    return (
        <div>
            {/* Main footer container with background and text color */}
            <footer className="footer bg-black text-white p-10">
                {/* First navigation section */}
                <nav>
                    <h6 className="footer-title">Abstract</h6>
                    <a className="link link-hover">Branches</a>
                </nav>
                
                {/* Second navigation section with resource links */}
                <nav>
                    <h6 className="footer-title">Resources</h6>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Help Center</a>
                    <a className="link link-hover">Release Notes</a>
                    <a className="link link-hover">Status</a>
                </nav>
                
                {/* Third navigation section with community links */}
                <nav>
                    <h6 className="footer-title">Community</h6>
                    <a className="link link-hover">Twitter</a>
                    <a className="link link-hover">LinkedIn</a>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">Dribble</a>
                    <a className="link link-hover">Podcast</a>
                </nav>
                
                {/* Fourth navigation section with company-related links */}
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Carrer</a>
                    <a className="link link-hover">Legal</a>
                    <a className="link link-hover"></a>
                    <a className="footer-title mb-0">Contact us</a>
                    <a className="link link-hover">info@abstract.com</a>
                </nav>
                
                {/* Fifth navigation section with additional links and copyright information */}
                <nav>
                    <h6 className="footer-title"></h6>
                    <a className="link link-hover"></a>
                    <a className="link link-hover"></a>
                    <a className="link link-hover"></a>
                    <a className="link link-hover"></a>
                    <a className="link link-hover">
                        <img src={require("../image/abs-help.png")} alt="" className="h-[45px] rounded-3xl"/>
                    </a>
                    <a className="link link-hover">© Copyright 2022</a>
                    <a className="link link-hover">Abstract Studio Design, Inc.</a>
                    <a className="link link-hover">All rights reserved</a>
                </nav>
            </footer>
        </div>
    )
}

export default Footer;
