import React from "react";
import Language from "../../Assets/images/Language.svg";
import Image from "next/image";
import insta from "../../Assets/images/Insta.svg";
import linkedin from "../../Assets/images/a.svg";
import gpay from "../../Assets/images/Gpay.svg";
import masterCard from "../../Assets/images/MasterCard.svg";
import paypal from "../../Assets/images/Paypal.svg";
import amex from "../../Assets/images/Amex.svg";
import applePay from "../../Assets/images/ApplePay.svg";
import opay from "../../Assets/images/Opay.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
        {/* Footer Section One Start */}
        <div className="first-div">
          <div className="footer-subscribe">
            <h3>BE THE FIRST TO KNOW</h3>
            <p className="signup-div" >Sign up for updates from metta muse.</p>
            <div className="subscribe-input">
              <input type="text" placeholder="Enter your e-mail" />
              <button>SUBSCRIBE</button>
            </div>
          </div>
          <div className="footer-contact">
            <h3>CONTACT US</h3>
            <p>+44 221 133 5360 </p>
            <p>customercare@mettamuse.com</p>

            <h3>CURRENCY</h3>
            <div className="currency-section">
              <Image src={Language} alt="Language selection icon" />
            </div>
            <p>
              Transaction will be completed in Euros and a currency reference is
              available on hover
            </p>
          </div>
        </div>
        {/* Footer Section One Ends */}
      </div>
      <hr />
      {/* Footer Section Two Starts */}
      <div className="footer-links">
        <div>
          <h3>mettā muse</h3>
          <p>About Us</p>
          <p>Stories</p>
          <p>Artisans</p>
          <p>Boutiques</p>
          <p>Contact Us</p>
          <p>EU Compilances Docs</p>
        </div>
        <div>
          <h3>QUICK LINKS</h3>
          <p>Orders & Shipping</p>
          <p>Join/Login as a Seller</p>
          <p>Payment & Pricing</p>
          <p>Return & Refunds</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="footer-social">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            <Image src={insta} alt="Instagram icon" />
            <Image src={linkedin} alt="LinkedIn icon" />
          </div>
          <h4>mettā muse Accepts</h4>
          <div className="payment-icons">
            <Image src={gpay} alt="Google Pay icon" />
            <Image src={masterCard} alt="MasterCard icon" />
            <Image src={paypal} alt="Paypal icon" />
            <Image src={amex} alt="American Express icon" />
            <Image src={applePay} alt="Apple Pay icon" />
            <Image src={opay} alt="Opay icon" />
          </div>
        </div>
      </div>
      {/* Footer Section Two Ends */}
      <p className="copyright">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
