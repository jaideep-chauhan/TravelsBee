import React from 'react';

const Footer = () => {
    return <div>
        <div className="footer-cont d-flex-col">
            <div className="socials d-flex">
            <span className="icon d-flex"><span class="iconify" data-icon="akar-icons:instagram-fill" data-width="22" data-height="22"></span></span>
            <span className="icon d-flex"><span class="iconify" data-icon="brandico:facebook" data-width="22" data-height="22"></span></span>
            <span className="icon d-flex"><span class="iconify" data-icon="akar-icons:twitter-fill" data-width="22" data-height="22"></span></span>
            </div>
            <div className="useful-links">
                <div className="links d-flex">
                <a href="#">Info</a>•<a href="#">Support</a>•<a href="#">Marketing</a></div>
                <div className="links d-flex">
                <a href="#">Terms of use</a>•<a href="#">Privacy Policy</a></div>
            </div>
            <div className="copyright" style={{ textAlign:"center" }}>&copy;2022 TravelsBee Inc.</div>

        </div>
    </div>;
}

export default Footer;