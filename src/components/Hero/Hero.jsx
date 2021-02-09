import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import Typist from 'react-typist'
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

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
    <section id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            {title || 'My name is'}{' '}
            <span className="text-color-main">{name || 'Andrew Turner'}</span>
            <br />
            {title || 'I am a '} <Typist>
              <span className='text-color-alt'>{subtitle || "Developer"}</span>
              <Typist.Delay ms={2000}/>
              <Typist.Backspace count={9} delay={700}/>
              <span className='text-color-alt'>{subtitle || "Dad"}</span>
              <Typist.Backspace count={3} delay={700}/>
              <span className='text-color-alt'>{subtitle || "Board Gamer"}</span>
              <Typist.Backspace count={11} delay={700}/>
              <span className='text-color-alt'>{subtitle || "Sports Fan"}</span>
              <Typist.Backspace count={10} delay={700}/>
              <span className='text-color-alt'>{subtitle || "Developer"}</span>

            </Typist>
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Learn more'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
