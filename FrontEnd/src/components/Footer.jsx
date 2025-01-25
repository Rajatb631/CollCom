import React from "react";
import location from '../assets/location.svg'
import message from '../assets/message.svg'
import phone from '../assets/phone.svg'
import plane from '../assets/plane.svg'
const Footer = () => {
  return (
    <div className="fo">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top bg-footer">
        <div className="col mb-3">
          
        </div>

        <div className="col mb-3">
        <h5 className="White-txt">About CollCom</h5>
          <div className="nav flex-column">
            <p className="nav-item mb-2 White-txt">
            CollCom Is A College-Community<br/> Network, A Youth Driven<br/> Non-Profitable Registered<br/> Organisation In 2018.
            </p>
            <p className="White-txt"><img src={plane}/>  View Map</p>
            
          </div>
        </div>

        <div className="col mb-3">
          <h5 className="White-txt">Get In Touch</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a
                href="#"
                className="nav-link p-0 text-body-secondary White-txt"
              >
                <img src={location}/> New Delhi - India.
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="#"
                className="nav-link p-0 text-body-secondary White-txt"
              >
                <img src={phone}/> +91 9868189955
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="#"
                className="nav-link p-0 text-body-secondary White-txt"
              >
                <img src={message}/> director@collcom.org
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5 className="White-txt">Quick Links</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a
                href="#"
                className="nav-link p-0 text-body-secondary White-txt"
              >
                Cyber Sanskar Magazine
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="#"
                className="nav-link p-0 text-body-secondary White-txt"
              >
                Social Media Flyers
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="#"
                className="nav-link p-0 text-body-secondary White-txt"
              >
                Verification
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5 className="White-txt">Useful Links</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a
                href="#"
                className="nav-link p-0 text-body-secondary White-txt"
              >
                Notice Board
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="#"
                className="nav-link p-0 text-body-secondary White-txt"
              >
                Annual Report
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="#"
                className="nav-link p-0 text-body-secondary White-txt"
              >
                Testimonials
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="#"
                className="nav-link p-0 text-body-secondary White-txt"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
