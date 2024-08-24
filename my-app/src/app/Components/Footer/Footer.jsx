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
        <div>
          <div className="footer-subscribe">
            <h3>BE THE FIRST TO KNOW</h3>
            <p>Sign up for updates from metta muse.</p>
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
              <Image src={Language} alt="Language" />
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
            <Image src={insta} alt="Instagram" />
            <Image src={linkedin} alt="LinkedIn" />
          </div>
          <h4>mettā muse Accepts</h4>
          <div className="payment-icons">
            <Image src={gpay} alt="Google Pay" />
            <Image src={masterCard} alt="MasterCard" />
            <Image src={paypal} alt="Paypal" />
            <Image src={amex} alt="American Express" />
            <Image src={applePay} alt="Apple Pay" />
            <Image src={opay} alt="Opay" />
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
