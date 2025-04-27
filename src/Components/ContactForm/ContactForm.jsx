import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactForm.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
import { Link } from "react-router-dom";

const ContactForm = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9a460141-cfb6-4fdc-a33c-aba55519aa45");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact container">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          V.H.R Boys Hostel, 123 Education Lane, Cityville, State:UttarPradesh,
          ZIP:250005
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />

            <a href="mailto:mjmediainfo01@gmail.com?subject=Your%20Subject%20Here">
              mjmediainfo01@gmail.com
            </a>
          </li>
          <li>
            <img src={phone_icon} alt="" />
            <a href="tel:+919992460014">+91 99924 60014</a>
          </li>
          <Link to={"/contact"}>
            <li>
              <img src={location_icon} alt="" />
              UttarPradesh , India
            </li>
          </Link>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <label htmlFor="emial">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            required
          />
          <label htmlFor="phone">Phone</label>
          <input
            type="phone"
            name="phone"
            placeholder="Enter your Phone"
            required
          />
          <label htmlFor="phone">Services</label>
          <br />
          <select name="services" id="services">
            <option value="Personal-Branding">Personal-Branding</option>
            <option value="Meme-Marketing">Meme Marketing</option>
            <option value="Search Engine Optimization">
              Search Engine Optimization
            </option>
            <option value="NewsPaper/Offline Branding">
              NewsPaper/Offline Branding
            </option>
            <option value="Song Promotion">Song Promotion</option>
            <option value="Instagram-handling">Instagram-handling</option>
            <option value="Social-Media">Social-Media</option>
            <option value="Google-Ads">Google-Ads</option>
            <option value="Youtube Handling">Youtube Handling</option>
            <option value="Website & App Development">Website & App Development</option>
          </select>
          <br />

          <label htmlFor="message">Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="rgb-border-btn btn dark-btn">
            Submit Now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default ContactForm;
