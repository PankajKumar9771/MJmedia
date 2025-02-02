import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-swift-reveal";
const TeachingMethod = () => {
  const containerStyle = {
    maxWidth: "90%",
  };

  return (
    <>
      <Fade left>
        <Container
          style={containerStyle}
          className="my-5 p-4 bg-light rounded shadow"
        >
          <Row>
            <Col>
              <h2 className="text-primary">Personal Branding</h2>
              <p>
                Offering you the best influencer marketing agency in India,
                giving you a platform for influencer marketing, and helping
                brands make the most of social media influencers’ content in
                promoting the.In the digital age, personal branding has become
                increasingly important. With social media and Google, it’s easy
                for anyone to find out information about you with just a few
                clicks. As a result, it’s essential to be aware of how you are
                presented online.
              </p>
            </Col>
          </Row>
        </Container>
      </Fade>
      <Fade right>
        <Container
          style={containerStyle}
          className="my-5 p-4 bg-light rounded shadow"
        >
          <Row>
            <Col>
              <h2 className="text-primary">Meme Marketing</h2>
              <p>
                Meme marketing involves holding the original narrative while at
                the same time giving it the essence of trending humorous drops.
                And an exceptional Meme Marketing Company would derive better
                engagement and increase brand visibility through elevated
                audience interest.
              </p>
            </Col>
          </Row>
        </Container>
      </Fade>
      <Fade left>
        <Container
          style={containerStyle}
          className="my-5 p-4 bg-light rounded shadow"
        >
          <Row>
            <Col>
              <h2 className="text-primary">Social Media Marketing</h2>
              <p>
                Social media marketing (SMM) is the process of gaining brand
                awareness and generating sales through social media platforms
                like Facebook, Instagram and Youtube. Our SMM system focuses on
                creating social media ads and content that generate sales for
                your business. The messages in our ads are written persuasively
                to target your customers desires and needs. We also analyse ways
                to laser-target the best customers that are looking to buy your
                products or services, so that social media marketing can be an
                effective long-term strategy for your business to generate
                sales.
              </p>
            </Col>
          </Row>
        </Container>
      </Fade>
      <Fade right>
        <Container
          style={containerStyle}
          className="my-5 p-4 bg-light rounded shadow"
        >
          <Row>
            <Col>
              <h2 className="text-primary">Google Ads</h2>
              <p>
                Get a Google Premier Partner team of certified Google Adwords /
                SEM specialists who have a minimum of 2 years experience
                managing various SEM campaigns locally. We help you create the
                perfect combination of strategy and implementation to ensure we
                achieve your goals.
              </p>
            </Col>
          </Row>
        </Container>
      </Fade>
      <Fade left>
        <Container
          style={containerStyle}
          className="my-5 p-4 bg-light rounded shadow"
        >
          <Row>
            <Col>
              <h2 className="text-primary">NewsPaper Ads </h2>
              <p>
                Ads appearing in the Classifieds section of the newspaper are
                low budget advertisements. They are of two types: Run on Line
                (ROL) and classified Display ads. These are further divided in
                to various subcategories as Matrimonial Ads, Property Ads,
                Recruitment Ads, Business Ads, announcements, Public Notices,
                Services Ad, Obituaries, Astrology ads, Education ads. ROL in
                Newspapers can either be Plain text (Classified Text) or images
                based called Display Classified Ads. The Classified newspaper
                advertising rates for the above-mentioned advertisements are
                calculated either on a per-line basis or per square cm basis.
                The minimum ad size for classified newspaper ad placement for
                ROL is 5 lines and for Times Display classified ad, it is 3×5
                cm.
              </p>
            </Col>
          </Row>
        </Container>
      </Fade>
    </>
  );
};

export default TeachingMethod;
