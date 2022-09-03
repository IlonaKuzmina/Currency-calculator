import React from 'react'
import './Footer.scss';

export const Footer = () => {
    return (
        <div className="footer__wrapper">
            <div className="footer__container">
                <div className="footer__left--wrapper">
                    <img className="footer__logo" src="/assets/logo/logo.png" alt="Logo" />
                    <p className="footer__copyright">© Copyright 2022. Created by Ilona</p>
                </div>
                <div className="footer__right--wrapper">
                    <img className="footer__icons" src="/assets/logo/facebook.png" alt="Facebook" />
                    <img className="footer__icons" src="/assets/logo/twitter.png" alt="Twitter" />
                    <img className="footer__icons" src="/assets/logo/linkedin.png" alt="Youtube" />
                </div>
            </div>
        </div>
    )
}
