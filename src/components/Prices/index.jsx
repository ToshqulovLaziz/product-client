import React, { useEffect } from "react";
import "./price.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Prices = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <section className="price-table__section">
          <div className="price-table__section--wrapper">
            <h2
              className="price-table__title text-center"
              data-aos="zoom-in-down"
              data-aos-duration="1000"
            >
              Price Table
            </h2>
            <p
              className="price-table__subtitle text-center"
              data-aos="zoom-in-down"
              data-aos-duration="1000"
            >
              We offer competitive price
            </p>
            <ul className="price-table__list">
              <li
                className="price-table__item"
                data-aos="zoom-in-down"
                data-aos-duration="1000"
              >
                <h3 className="price-table__item--title">Free</h3>
                <p className="price-table__item--subtitle">
                  Brief price description
                </p>
                <h4 className="price-text">
                  0<span className="dollar-sign">$</span>
                  <span className="payment-term">Per / month</span>
                </h4>
                <ul className="price-table__desc--list">
                  <li className="price-table__desc--item">Only 2 Op erators</li>
                  <li className="price-table__desc--item">Notifications</li>
                  <li className="price-table__desc--item">Landing Pages</li>
                </ul>
                <button className="price-table__item--btn" type="button">
                  Order Now
                </button>
              </li>
              <li
                className="price-table__item"
                data-aos="zoom-in-down"
                data-aos-duration="1000"
              >
                <h3 className="price-table__item--title">Standard</h3>
                <p className="price-table__item--subtitle">
                  Brief price description
                </p>
                <h4 className="price-text">
                  5<span className="dollar-sign">$</span>
                  <span className="payment-term">Per / month</span>
                </h4>
                <ul className="price-table__desc--list">
                  <li className="price-table__desc--item">5+ Operators</li>
                  <li className="price-table__desc--item">Notifications</li>
                  <li className="price-table__desc--item">Landing Pages</li>
                </ul>
                <button className="price-table__item--btn" type="button">
                  Order Now
                </button>
              </li>
              <li
                className="price-table__item"
                data-aos="zoom-in-down"
                data-aos-duration="1000"
              >
                <h3 className="price-table__item--title">Premium</h3>
                <p className="price-table__item--subtitle">
                  Brief price description
                </p>
                <h4 className="price-text">
                  10<span className="dollar-sign">$</span>
                  <span className="payment-term">Per / month</span>
                </h4>
                <ul className="price-table__desc--list">
                  <li className="price-table__desc--item">10+ Operators</li>
                  <li className="price-table__desc--item">Notifications</li>
                  <li className="price-table__desc--item">Landing Pages</li>
                </ul>
                <button className="price-table__item--btn" type="button">
                  Order Now
                </button>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Prices;
