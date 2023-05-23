import React, { useContext } from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { themeContext } from '../../context';
import Contact from '../../components/Contact/Contact';
import SwiperCore, { Autoplay } from 'swiper';
import CriptoAPI from '../CriptoAPI/CriptoAPI';
import Linkedin from '../Linkedin/Linkedin';

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  SwiperCore.use([Autoplay]);

  return (
    <div className='portfolio'>
      <svg
        style={{ position: 'absolute', left: '-30rem', top: '90rem' }}
        width='1000'
        height='1000'
        viewBox='0 0 1000 1000'
        xmlns='http://www.w3.org/2000/svg'
      >
        <defs>
          <linearGradient
            id='linearGradientId-2'
            gradientTransform='rotate(-45 0.5 0.5)'
          >
            <stop offset='0%' stopColor='#00DBDE' />
            <stop offset='100%' stopColor='#FC00FF' />
          </linearGradient>

          <clipPath id='shape-2'>
            <path
              fill='currentColor'
              d='M865,601.5Q779,703,698,781Q617,859,506.5,839Q396,819,326.5,748Q257,677,150,588.5Q43,500,139.5,404Q236,308,338,312Q440,316,526.5,234.5Q613,153,661,250.5Q709,348,830,424Q951,500,865,601.5Z'
            ></path>
          </clipPath>
        </defs>

        <g clipPath='url(#shape-2)'>
          <path
            fill='url(#linearGradientId-2)'
            d='M865,601.5Q779,703,698,781Q617,859,506.5,839Q396,819,326.5,748Q257,677,150,588.5Q43,500,139.5,404Q236,308,338,312Q440,316,526.5,234.5Q613,153,661,250.5Q709,348,830,424Q951,500,865,601.5Z'
          >
            <animate
              repeatCount={300}
              dur={7}
              attributeName='d'
              values='
                M850,613.5Q812,727,700.5,750Q589,773,479,838Q369,903,258,829.5Q147,756,125.5,628Q104,500,189.5,418.5Q275,337,324,223Q373,109,471,197.5Q569,286,705,269.5Q841,253,864.5,376.5Q888,500,850,613.5Z;
                M785.5,579.5Q719,659,668,759Q617,859,489.5,891.5Q362,924,357.5,765Q353,606,228,553Q103,500,167.5,402.5Q232,305,302.5,207.5Q373,110,503.5,98.5Q634,87,658.5,227Q683,367,767.5,433.5Q852,500,785.5,579.5Z;
                M829.5,630Q858,760,731,789.5Q604,819,518,764.5Q432,710,320,711Q208,712,131.5,606Q55,500,186.5,434Q318,368,362,289Q406,210,489,244Q572,278,660.5,298.5Q749,319,775,409.5Q801,500,829.5,630Z;
                    M850,613.5Q812,727,700.5,750Q589,773,479,838Q369,903,258,829.5Q147,756,125.5,628Q104,500,189.5,418.5Q275,337,324,223Q373,109,471,197.5Q569,286,705,269.5Q841,253,864.5,376.5Q888,500,850,613.5Z;
                    '
            ></animate>
          </path>
        </g>
      </svg>
      <span style={darkMode ? { color: 'white' } : { color: 'var(--black)' }}>
        Recent Projects
      </span>
      <span>Portfolio</span>
      <span>{'<'}</span>
      <span>{'>'}</span>
      <Swiper
        spaceBetween={1}
        slidesPerView={1}
        grabCursor={true}
        className='portfolio-slider'
      >
        <SwiperSlide>
          <div className='projs'>
            <Contact />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='projs'>
            <CriptoAPI />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='projs'>
            <Linkedin />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
