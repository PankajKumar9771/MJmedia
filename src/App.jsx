import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Pages/Services";
import About from "./Components/About/About";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Explore from "./Pages/Explore";
import Clients from "./Pages/Clients";
import Gallery from "./Pages/Gallery";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import Team from "./Components/Team/Team";
import PersonalBranding from "./Components/ServicesPages/PersonalBranding";
import MemeMarketing from "./Components/ServicesPages/MemeMarketing";
import SocialMediaMarketing from "./Components/ServicesPages/SocialMedia";
import GoogleAds from "./Components/ServicesPages/GoogleAd";
import NewspaperAds from "./Components/ServicesPages/NewsPaper";
import InstagramHandle from "./Components/ServicesPages/InstagramHandle";
import YoutubeHandle from "./Components/ServicesPages/YoutubeHandle";
import SongPromo from "./Components/ServicesPages/SongPromo";
import Development from "./Components/ServicesPages/Development";
import SEO from "./Components/ServicesPages/Seo";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={<About setPlayState={setPlayState} />}
          />
          <Route path="/services" element={<Services />} />
          <Route path="/clients" element={<Clients />} />
          <Route
            path="/gallery"
            element={<Gallery setPlayState={setPlayState} />}
          />
          <Route path="/explore" element={<Explore />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />;
          <Route path="/personal-branding" element={<PersonalBranding />} />
          <Route path="/meme-marketing" element={<MemeMarketing />} />
          <Route
            path="/social-media-marketing"
            element={<SocialMediaMarketing />}
          />
          <Route path="/google-ads" element={<GoogleAds />} />
          <Route path="/newspaper-ads" element={<NewspaperAds />} />
          <Route path="/instagram-handle" element={<InstagramHandle />} />
          <Route path="/youtube-handle" element={<YoutubeHandle />} />
          <Route path="/song-promo" element={<SongPromo />} />
          <Route path="/development" element={<Development />} />
          <Route path="/seo" element={<SEO />} />
        </Routes>
        <VideoPlayer setPlayState={setPlayState} playState={playState} />
      </div>
      <Footer />
    </>
  );
};

export default App;
