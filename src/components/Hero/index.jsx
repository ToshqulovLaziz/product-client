import { useEffect } from 'react';
import "./hero.scss";
import Button from "../Button";
import heroImg from '../../assets/images/hero-img.png';
import Aos from "aos";
import "aos/dist/aos.css";
import { TbPlayerPlayFilled } from "react-icons/tb";


const  Hero = () => {
  useEffect( () => {
    Aos.init();
    Aos.refresh();
  }, [])
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-start" data-aos="zoom-in">
              <h2 className="hero-start__title">
                Work at the speed of thought
              </h2>
              <p className="hero-start__desc">
                Tools, tutorials, design and innovation experts, all in one
                place! The most intuitive way to imagine your next user
                experience.
              </p>
              <div className="hero-start__bottom">
                <Button
                  className="hero-start__btn"
                  btnText="Get started"
                  type="button"
                />

                <a className="hero-start__link" 
                   href="#" 
                > 
                 <TbPlayerPlayFilled  
                    className="hero-start__link--icons"
                 /> 
                  Watch the Video
                </a>
              </div>
            </div>
            <img className="hero-end__img" 
                 src={heroImg}
                 alt=" Hero section img" 
                 width="600"
                 height="555"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero; 
