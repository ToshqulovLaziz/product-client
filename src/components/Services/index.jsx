import React, { useEffect } from "react";
import "./Services.scss";
import img from "../../assets/images/amico.png";
import imgTwo from "../../assets/images/amicoTwo.png";
import imgThree from "../../assets/images/amicoThree.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Services = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <React.Fragment>
      <div className="services">
        <div className="container">
          <div className="services__wrapper">
            <div className="services__start" data-aos="zoom-in">
              <p className="services__start-for">Accessory makers</p>
              <h2 className="services__start-title mb-3">Management</h2>
              <p className="services__start-about">
                The Myspace page defines the individual, his or her
                characteristics, traits, personal choices and the overall
                personality of the person.
              </p>
              <strong className="services__start-subtitle">
                Accessory makers
              </strong>
              <p className="services__start-about">
                While most people enjoy casino gambling, sports betting, lottery
                and bingo playing for the fun
              </p>
              <strong className="services__start-subtitle">
                Alterationists
              </strong>
              <p className="services__start-about">
                If you are looking for a new way to promote your business that
                won’t cost you more money,
              </p>
            </div>
            <div
              className="services__end"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img
                className="services__end-image d-block"
                src={img}
                alt="service image"
                width={540}
                height={473}
              />
            </div>
          </div>
          <div className="services__wrapper">
            <div
              className="services__end"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img
                className="services__end-image d-block"
                src={imgTwo}
                alt="service image"
                width={540}
                height={500}
              />
            </div>
            <div className="services__start" data-aos="zoom-in">
              <p className="services__start-for">Easier decision making for</p>
              <h2 className="services__start-title mb-3">Customer Support</h2>
              <p className="services__start-about">
                The Myspace page defines the individual, his or her
                characteristics, traits, personal choices and the overall
                personality of the person.
              </p>
              <ul className="services__start-list">
                <li className="services__start-item">
                  <span className="services__start-true bg-warning  ">
                    <svg
                      width="16"
                      height="13"
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.7657 0.540581C15.4533 0.221499 14.9468 0.221499 14.6343 0.540581L5.04982 10.329L1.3657 6.56653C1.0533 6.24745 0.546796 6.24748 0.234328 6.56653C-0.0781093 6.88558 -0.0781093 7.40285 0.234328 7.72194L4.48414 12.0621C4.79645 12.3811 5.30332 12.3809 5.61551 12.0621L15.7657 1.69602C16.0781 1.37697 16.0781 0.859663 15.7657 0.540581Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <p className="services__start-desc">
                    Never worry about overpaying for your energy again.
                  </p>
                </li>
                <li className="services__start-item">
                  <span className="services__start-true bg-danger">
                    <svg
                      width="16"
                      height="13"
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.7657 0.540581C15.4533 0.221499 14.9468 0.221499 14.6343 0.540581L5.04982 10.329L1.3657 6.56653C1.0533 6.24745 0.546796 6.24748 0.234328 6.56653C-0.0781093 6.88558 -0.0781093 7.40285 0.234328 7.72194L4.48414 12.0621C4.79645 12.3811 5.30332 12.3809 5.61551 12.0621L15.7657 1.69602C16.0781 1.37697 16.0781 0.859663 15.7657 0.540581Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <p className="services__start-desc">
                    We will only switch you to energy companies that we trust
                    and will treat you right
                  </p>
                </li>
                <li className="services__start-item">
                  <span className="services__start-true bg-primary">
                    <svg
                      width="16"
                      height="13"
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.7657 0.540581C15.4533 0.221499 14.9468 0.221499 14.6343 0.540581L5.04982 10.329L1.3657 6.56653C1.0533 6.24745 0.546796 6.24748 0.234328 6.56653C-0.0781093 6.88558 -0.0781093 7.40285 0.234328 7.72194L4.48414 12.0621C4.79645 12.3811 5.30332 12.3809 5.61551 12.0621L15.7657 1.69602C16.0781 1.37697 16.0781 0.859663 15.7657 0.540581Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <p className="services__start-desc">
                    We track the markets daily and know where the savings are.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="services__wrapper">
            <div className="services__start" data-aos="zoom-in">
              <p className="services__start-for">Optimisation for</p>
              <h2 className="services__start-title mb-3">Collaborative</h2>
              <p className="services__start-about mb-4">
                Few would argue that, despite the advancements of feminism over
                the past three decades, women still face a double standard when
                it comes to their behavior.
              </p>
              <strong className="services__start-subtitle">
                Accessory makers
              </strong>
              <p className="services__start-about">
                While most people enjoy casino gambling, sports betting, lottery
                and bingo playing for the fun
              </p>
              <strong className="services__start-subtitle">
                Alterationists
              </strong>
              <p className="services__start-about">
                If you are looking for a new way to promote your business that
                won’t cost you more money,
              </p>
            </div>
            <div
              className="services__end"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <img
                className="services__end-image d-block"
                src={imgThree}
                alt="service image"
                width={540}
                height={451}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Services;
