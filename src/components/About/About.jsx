import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';
import Resume from '../../../Andrew_Turner_Resume.pdf'

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    "I'm a restaurant manager by trade, but love to build things and have always been drawn to web development.  I've spent the last 20 years of my career across various retail and hospitality roles, most recently as a restaurant General Manager.  The industry taught me a lot, but I had plateaued and the pandemic put a major strain on the industry so I took the opportunity to pursue web development - something I'd been interested and dabbled in over the years, but could never find the time or discipline.  I found myself with the good fortune to be able to make the leap and attended Dev Mountain, completing the course in Febrary of 2021.  I am comfortable with the full stack, but find myself drawn to front end work."}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    "When I am not developing my time is primarily occupied by my wife and three daughters.  What time I do have I like to spend 'collecting hobbies'.  I play video games and board games, do some model making, diy projects around the house, very amateur woodworking and read books, among other things."}
                </p>
                {/* // <p className="about-wrapper__info-text">
                //   {paragraphThree || 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'}
                // </p> */}
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={Resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
