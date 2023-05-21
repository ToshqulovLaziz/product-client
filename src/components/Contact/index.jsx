import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./conatct.scss";
import pitch from "../../assets/images/pitch.png";
import design from "../../assets/images/design.png";
import app from "../../assets/images/app.png";
import marketing from "../../assets/images/marketing.png";

const Contact = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <section
        className="contact-section"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="container">
          <div className="contact-section__wrapper">
            <div className="contact-section__start">
              <h2 className="contact-section__title">Quick & Easy Process</h2>
              <p className="contact-section__subtitle">
                Do you require some help for your project: Conception workshop,
                prototyping, marketing strategy, landing page, Ux/UI?
              </p>
            </div>
            <div className="contact-section__end">
              <ul className="contact-section__list">
                <div
                  className="contact-section__left--items"
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  <li className="contact-section__item">
                    <img className='conatact-section__img' src={pitch} alt="pitch" width={98} height={98} />
                    <div className="conatct-section__item--message">
                      <p className="contact-section__item--text">
                        I can take care of your pitch
                      </p>
                      <span className="contact-section__item--message-circle item1"></span>
                      <span className="contact-section__item--message-circle2 item1-2"></span>
                    </div>
                  </li>
                  <li className="contact-section__item">
                    <div className="conatct-section__item--message">
                      <p className="contact-section__item--text">
                        I can design you website
                        <span className="contact-section__item--message-circle item2"></span>
                        <span className="contact-section__item--message-circle2 item2-2"></span>
                      </p>
                    </div>
                    <img className='conatact-section__img' src={design} alt="pitch" width={98} height={98} />
                  </li>
                </div>
                <div
                  className="contact-section__right--items column"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <li className="contact-section__item">
                    <div className="conatct-section__item--message">
                      <p className="contact-section__item--text">
                        I can prototype your app
                        <span className="contact-section__item--message-circle item3"></span>
                        <span className="contact-section__item--message-circle2 item3-2"></span>
                      </p>
                    </div>
                    <img className='conatact-section__img' src={app} alt="pitch" width={98} height={98} />
                  </li>
                  <li className="contact-section__item">
                    <img className='conatact-section__img' src={marketing} alt="pitch" width={98} height={98} />
                    <div className="conatct-section__item--message">
                      <p className="contact-section__item--text">
                        I can help marketing strategy
                        <span className="contact-section__item--message-circle item4"></span>
                        <span className="contact-section__item--message-circle2 item4-2"></span>
                      </p>
                    </div>
                  </li>
                </div>
                <div
                  className="contact-section__right--items row"
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  <li className="contact-section__item">
                    <img className='conatact-section__img' src={marketing} alt="pitch" width={98} height={98} />
                    <div className="conatct-section__item--message">
                      <p className="contact-section__item--text">
                        I can help marketing strategy
                        <span className="contact-section__item--message-circle item4"></span>
                        <span className="contact-section__item--message-circle2 item4-2"></span>
                      </p>
                    </div>
                  </li>
                  <li className="contact-section__item">
                    <div className="conatct-section__item--message">
                      <p className="contact-section__item--text">
                        I can prototype your app
                        <span className="contact-section__item--message-circle item3"></span>
                        <span className="contact-section__item--message-circle2 item3-2"></span>
                      </p>
                    </div>
                    <img className='conatact-section__img' src={app} alt="pitch" width={98} height={98} />
                  </li>
                </div>
              </ul>
            </div>
            <button className="contact-section__btn">Contact our expert</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
