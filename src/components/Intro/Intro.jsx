import React, { useContext } from 'react';
import './Intro.css';
import Github from '../../img/github-sign (1).png';
import Instagram from '../../img/instagram (2).png';
import Thalles from '../../img/profile.jpeg';
import { FloatingDiv } from '../FloatingDivs/FloatingDiv';
import Img1 from '../../img/quality.png';
import Img2 from '../../img/react.png';
import { themeContext } from '../../context';

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='intro' id='portfilio-destination' name='portfilio-destiny'>
      <section className='left-side'>
        <div className='intro-title'>
          <span
            style={darkMode ? { color: 'white' } : { color: 'var(--black)' }}
          >
            Hi! I Am
          </span>
          <span>Thalles Melo</span>
          <span
            style={darkMode ? { color: 'white' } : { color: 'var(--gray)' }}
          >
            FrontEnd Developer,
             Software engineer
          </span>
        </div>
        <a
          href='https://outlook.live.com/mail/0/?newmessage.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className='button intro-button'>Hire me</button>
        </a>
        <div className='intro-icons'>
          <img
            src={Github}
            onClick={() =>
              window.open('https://github.com/Thallesmel', '_blank')
            }
            alt=''
          />
          <img
            src={Instagram}
            onClick={() =>
              window.open('http://www.instagram.com/thallepp/', '_blank')
            }
            alt=''
          />
        </div>
      </section>
      <section className='right-side'>
        <div className='blob'>
          <svg
            width='1000'
            height='1000'
            viewBox='0 0 1000 1000'
            xmlns='http://www.w3.org/2000/svg'
          >
            <defs>
              <linearGradient
                id='linearGradientId-0'
                gradientTransform='rotate(-45 0.5 0.5)'
              >
                <stop offset='0%' stopColor='#00DBDE' />
                <stop offset='100%' stopColor='#fc00ff' />
              </linearGradient>

              <clipPath id='shape-0'>
                <path
                  fill='currentColor'
                  d='M784,646.5Q903,793,762,833Q621,873,509.5,844Q398,815,349.5,729.5Q301,644,177,572Q53,500,160.5,416Q268,332,339.5,279.5Q411,227,490,257.5Q569,288,731,251Q893,214,779,357Q665,500,784,646.5Z'
                ></path>
              </clipPath>
            </defs>

            <g clipPath='url(#shape-0)'>
              <path
                fill='url(#linearGradientId-0)'
                d='M784,646.5Q903,793,762,833Q621,873,509.5,844Q398,815,349.5,729.5Q301,644,177,572Q53,500,160.5,416Q268,332,339.5,279.5Q411,227,490,257.5Q569,288,731,251Q893,214,779,357Q665,500,784,646.5Z'
              >
                <animate
                  repeatCount={300}
                  dur={10}
                  attributeName='d'
                  values='
                M784,646.5Q903,793,762,833Q621,873,509.5,844Q398,815,349.5,729.5Q301,644,177,572Q53,500,160.5,416Q268,332,339.5,279.5Q411,227,490,257.5Q569,288,731,251Q893,214,779,357Q665,500,784,646.5Z;
                    M757.5,611Q806,722,704,768Q602,814,483.5,864Q365,914,315.5,792Q266,670,301,585Q336,500,300.5,414.5Q265,329,335,268.5Q405,208,520.5,144.5Q636,81,756,154Q876,227,792.5,363.5Q709,500,757.5,611Z;
                    M749.5,555Q652,610,601,632Q550,654,462.5,769Q375,884,340.5,762.5Q306,641,181,570.5Q56,500,167,419.5Q278,339,321.5,211Q365,83,462.5,199Q560,315,601.5,355.5Q643,396,745,448Q847,500,749.5,555Z;
                    M784,646.5Q903,793,762,833Q621,873,509.5,844Q398,815,349.5,729.5Q301,644,177,572Q53,500,160.5,416Q268,332,339.5,279.5Q411,227,490,257.5Q569,288,731,251Q893,214,779,357Q665,500,784,646.5Z;
                    '
                ></animate>
              </path>
            </g>
          </svg>
        </div>
        <div className='intro-container'>
          <FloatingDiv image={Img1} txt1='Web' txt2='Developer' />
          <img src={Thalles} id='profilepic' alt='pic' />
          <FloatingDiv image={Img2} txt1='React' txt2='Library' />
        </div>
      </section>
    </div>
  );
};
export default Intro;
