import React from 'react';
import twitterIcon from "../../twitter-icon.svg";
import dribbbleIcon from "../../dribbble-icon.svg";
import facebookIcon from "../../facebook-icon.svg";
import githubIcon from "../../github-icon.svg";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-text">
                    <div className="footer-text-header">Thank you for supporting us!</div>
                    <div className="footer-text-description">Let's get in touch on any of these platforms.</div>
                </div>
                <div className="footer-social">
                    <div className="footer-icon twitter-icon">
                        <img src={twitterIcon} alt="" />
                    </div>
                    <div className="footer-icon facebook-icon">
                        <img src={facebookIcon} alt="" />
                    </div>
                    <div className="footer-icon dribbble-icon">
                        <img src={dribbbleIcon} alt="" />
                    </div>
                    <div className="footer-icon github-icon">
                        <img src={githubIcon} alt="" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-text">
                    © 2018  <span className="footer-text-logo">  Şikayetvar</span>
                </div>
                <div className="footer-bottom-post">
                    Posts
                </div>
            </div>

        </div>
    )
}

export default Footer
