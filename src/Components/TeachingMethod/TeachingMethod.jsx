import personalImg from "../../assets/personalBranding.jpg";
import memeImg from "../../assets/meme.png";
import smmImg from "../../assets/socialMarketing.png";
import googleImg from "../../assets/googleAD.png";
import newspaperImg from "../../assets/newsPaper.jpeg";
import instagramHandle from "../../assets/insatHandle.jpeg";
import youtubeHandle from "../../assets/youtubeHandle.jpeg";
import seo from "../../assets/seo.jpg";
import development from "../../assets/websiteDev.jpeg";
import songPromo from "../../assets/songPromo.jpeg";
import React from "react";
import { Container } from "react-bootstrap";
import { Fade } from "react-swift-reveal";
import { Link } from "react-router-dom";
import "./TeachingMethod.css";

const TeachingMethod = () => {
  const cardData = [
    {
      title: "Personal Branding",
      path: "/personal-branding",
      img: personalImg,
      desc: "Offering you the best influencer marketing agency in India...",
    },
    {
      title: "Meme Marketing",
      path: "/meme-marketing",
      img: memeImg,
      desc: "Meme marketing involves holding the original narrative while...",
    },
    {
      title: "Social Media Marketing",
      path: "/social-media-marketing",
      img: smmImg,
      desc: "Social media marketing (SMM) is the process of gaining brand awareness...",
    },
    {
      title: "Google Ads",
      path: "/google-ads",
      img: googleImg,
      desc: "Get a Google Premier Partner team of certified Google Adwords...",
    },
    {
      title: "Newspaper Ads/Offline Ads",
      path: "/newspaper-ads",
      img: newspaperImg,
      desc: "Ads appearing in the Classifieds section of the newspaper...",
    },
    {
      title: "Instagram Account Handling",
      path: "/instagram-handle",
      img: instagramHandle,
      desc: "We manage and grow your Instagram account with tailored strategies, regular posts, and audience engagement.",
    },
    {
      title: "Youtube Account Handling",
      path: "/youtube-handle",
      img: youtubeHandle,
      desc: "Our team handles your YouTube channel, from uploading content to optimizing videos and boosting subscribers.",
    },
    {
      title: "Song Promotion and Movie Promotion",
      path: "/song-promo",
      img: songPromo,
      desc: "We promote your songs and movies across various digital platforms for maximum reach and visibility.",
    },
    {
      title: "Website and App Development",
      path: "/development",
      img: development,
      desc: "We build high-quality websites and mobile apps tailored to your needs, using modern technologies and best practices.",
    },
    {
      title: "SEO",
      path: "/seo",
      img: seo,
      desc: "Boost your website’s visibility with our expert SEO services, including keyword research, on-page and off-page optimization.",
    },
  ];

  const cardStyle = (img) => ({
    backgroundImage: `url(${img})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    position: "relative",
    color: "white",
    borderRadius: "15px",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
  });

  const overlayStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "2rem",
    height: "100%",
  };

  return (
    <>
      {cardData.map((card, index) => (
        <Link to={card.path} key={index} style={{ textDecoration: "none" }}>
          <Fade direction={index % 2 === 0 ? "left" : "right"}>
            <Container
              className="my-4 shadow"
              style={{ maxWidth: "90%", cursor: "pointer" }}
            >
              <div className="Img" style={cardStyle(card.img)}>
                <div style={overlayStyle}>
                  <h2 className="mb-3">{card.title}</h2>
                  <p>{card.desc}</p>
                </div>
              </div>
            </Container>
          </Fade>
        </Link>
      ))}
    </>
  );
};

export default TeachingMethod;
