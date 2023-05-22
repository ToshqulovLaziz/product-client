import React from 'react';
import './strategies.scss';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Stfirst1x from '../../assets/images/Strategies imges/Strategies first card bg@1x.png';
import Stfirst2x from '../../assets/images/Strategies imges/Strategies first card  bg@2x.png';
import Stsecond1x from '../../assets/images/Strategies imges/Strategies second card bg@1x.png';
import Stsecond2x from '../../assets/images/Strategies imges/Strategies second card bg@2x.png';
import Stthird1x from '../../assets/images/Strategies imges/Strategies third card bg@1x.png';
import Stthird2x from '../../assets/images/Strategies imges/Strategies third card bg@2x.png';
const  Strategies = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <React.Fragment>
          <div className = "site-stategies "
          data-aos = "fade-up"
          data-aos-anchor-placement = "top-center"
          data-aos-duration = "3000" >
            <div className="container">
              <h2 className='site-strategies__title'>Contents Strategies</h2>
              <p className='site-strategies__subtitle'>We focus on ergonomics and meeting you where you work.Its only a keystroke away. </p>
              <div className="site-strategies__cards">
                  <div className = "site-strategies__card hover1"
                  data-aos = "fade-right"
                  data-aos-duration = "3000" >
                      <img className='site-strategies__card--img'
                         src={Stfirst1x} 
                         srcSet={`${Stfirst1x} ${Stfirst2x} 2x`}
                         width={348}
                         height={185}
                         alt = "Strategies card" />
                      <p className='site-strategies__card--text'>By <span className='site-strategies__card--text--span' > Wahid Ari </span>   |   03 March 2019 </p>
                      <h3 className='visually-hidden'>strategies card</h3>
                      <h4 className='site-strategies__card--title'>Increasing Prosperity With Positive Thinking</h4>   
                      <span className='site-strategies__card--dots--dot1'></span>
                  </div>
                   <div className="site-strategies__card hover2"
                      data-aos = "fade-up"
                      data-aos-duration = "3000" >
                      <img className='site-strategies__card--img'
                         src={Stsecond1x} 
                         srcSet = {
                           `${Stsecond1x} ${Stsecond2x} 2x`
                         }
                         width={348}
                         height={185}
                         alt = "Strategies card" />
                      <p className='site-strategies__card--text'>By <span  className='site-strategies__card--text--span'>Wahid Ari</span> |  03 March 2019</p>
                      <h3 className='visually-hidden'>strategies card</h3>
                      <h4 className='site-strategies__card--title'>Motivation Is The First Step To Success</h4>   
                      <span className='site-strategies__card--dots--dot2'></span>

                  </div>
                   <div className = "site-strategies__card hover3"
                   data-aos = "fade-left"
                  data-aos-duration = "3000" >
                      <img className='site-strategies__card--img'
                         src = {
                           Stthird1x
                         }
                         srcSet = {
                           `${Stthird1x } ${ Stthird2x } 2x`
                         }
                         width={348}
                         height={185}
                         alt = "Strategies card" />
                      <p className='site-strategies__card--text'>By <span  className='site-strategies__card--text--span'>Wahid Ari</span> |  03 March 2019</p>
                      <h3 className='visually-hidden'>strategies card</h3>
                      <h4 className='site-strategies__card--title'>Success Steps For Your Personal Or Business</h4>   
                      <span className='site-strategies__card--dots--dot3'></span>

                  </div>
                  
              </div>
            </div>
         </div>
      
    </React.Fragment>
  )
}

export default Strategies; 
