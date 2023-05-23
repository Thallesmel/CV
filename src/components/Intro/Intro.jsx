import React, { useContext } from 'react';
import './Intro.css';
import Github from '../../img/github-sign (1).png';
import Instagram from '../../img/instagram (2).png';
import Thalles from '../../img/profile.jpeg';
import { FloatingDiv } from '../FloatingDivs/FloatingDiv';
import Img1 from '../../img/quality.png';
import Img2 from '../../img/react.png';
import { themeContext } from '../../context';
import { motion } from 'framer-motion';
import { isVisible } from '@testing-library/user-event/dist/utils';

const transition = { duration: 2, type: 'spring' };

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='intro' id='portfilio-destination' name='portfilio-destiny'>
      <section className='i-left'>
        <div className='i-name'>
          <span
            style={darkMode ? { color: 'white' } : { color: 'var(--black)' }}
          >
            Hi! I Am
          </span>
          <span>Thalles Melo</span>
          <span
            style={darkMode ? { color: 'white' } : { color: 'var(--gray)' }}
          >
            FrontEnd Developer, Software engineering student
          </span>
        </div>
        <a
          href='https://outlook.live.com/mail/0/?newmessage.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className='button i-button'>Hire me</button>
        </a>
        <div className='i-icons'>
          <a href=''>
            <img
              src={Github}
              onClick={() =>
                window.open('https://github.com/Thallesmel', '_blank')
              }
              alt=''
            />
          </a>
          <img
            src={Instagram}
            onClick={() =>
              window.open('http://www.instagram.com/thallepp/', '_blank')
            }
            alt=''
          />
        </div>
      </section>
      <section className='i-right'>
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

        <svg
          width='1000'
          height='1000'
          viewBox='0 0 1000 1000'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <linearGradient
              id='linearGradientId-1'
              gradientTransform='rotate(-45 0.5 0.5)'
            >
              <stop offset='0%' stopColor='#00DBDE' />
              <stop offset='100%' stopColor='#FC00FF' />
            </linearGradient>

            <clipPath id='shape-1'>
              <path
                fill='currentColor'
                d='M757.5,611Q806,722,704,768Q602,814,483.5,864Q365,914,315.5,792Q266,670,301,585Q336,500,300.5,414.5Q265,329,335,268.5Q405,208,520.5,144.5Q636,81,756,154Q876,227,792.5,363.5Q709,500,757.5,611Z'
              ></path>
            </clipPath>
          </defs>

          <g clipPath='url(#shape-1)'>
            <path
              fill='url(#linearGradientId-1)'
              d='M757.5,611Q806,722,704,768Q602,814,483.5,864Q365,914,315.5,792Q266,670,301,585Q336,500,300.5,414.5Q265,329,335,268.5Q405,208,520.5,144.5Q636,81,756,154Q876,227,792.5,363.5Q709,500,757.5,611Z'
            >
              <animate
                repeatCount={300}
                dur={10}
                attributeName='d'
                values='M757.5,611Q806,722,704,768Q602,814,483.5,864Q365,914,315.5,792Q266,670,301,585Q336,500,300.5,414.5Q265,329,335,268.5Q405,208,520.5,144.5Q636,81,756,154Q876,227,792.5,363.5Q709,500,757.5,611Z;
                    M749.5,555Q652,610,601,632Q550,654,462.5,769Q375,884,340.5,762.5Q306,641,181,570.5Q56,500,167,419.5Q278,339,321.5,211Q365,83,462.5,199Q560,315,601.5,355.5Q643,396,745,448Q847,500,749.5,555Z;
                    M757.5,611Q806,722,704,768Q602,814,483.5,864Q365,914,315.5,792Q266,670,301,585Q336,500,300.5,414.5Q265,329,335,268.5Q405,208,520.5,144.5Q636,81,756,154Q876,227,792.5,363.5Q709,500,757.5,611Z;
                    '
              ></animate>
            </path>
          </g>
        </svg>

        <svg
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

        <svg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'>
          <defs>
            <linearGradient
              id='linearGradientId-3'
              gradientTransform='rotate(-45 0.5 0.5)'
            >
              <stop offset='0%' stopColor='#00DBDE' />
              <stop offset='100%' stopColor='#fc00ff' />
            </linearGradient>

            <clipPath id='shape-3'>
              <path
                fill='currentColor'
                d='M850,613.5Q812,727,700.5,750Q589,773,479,838Q369,903,258,829.5Q147,756,125.5,628Q104,500,189.5,418.5Q275,337,324,223Q373,109,471,197.5Q569,286,705,269.5Q841,253,864.5,376.5Q888,500,850,613.5Z'
              ></path>
            </clipPath>
          </defs>

          <g clipPath='url(#shape-3)'>
            <path
              fill='url(#linearGradientId-3)'
              d='M850,613.5Q812,727,700.5,750Q589,773,479,838Q369,903,258,829.5Q147,756,125.5,628Q104,500,189.5,418.5Q275,337,324,223Q373,109,471,197.5Q569,286,705,269.5Q841,253,864.5,376.5Q888,500,850,613.5Z'
            >
              <animate
                repeatCount={300}
                dur={9}
                attributeName='d'
                values='M850,613.5Q812,727,700.5,750Q589,773,479,838Q369,903,258,829.5Q147,756,125.5,628Q104,500,189.5,418.5Q275,337,324,223Q373,109,471,197.5Q569,286,705,269.5Q841,253,864.5,376.5Q888,500,850,613.5Z;
                M865,601.5Q779,703,698,781Q617,859,506.5,839Q396,819,326.5,748Q257,677,150,588.5Q43,500,139.5,404Q236,308,338,312Q440,316,526.5,234.5Q613,153,661,250.5Q709,348,830,424Q951,500,865,601.5Z;
                M850,613.5Q812,727,700.5,750Q589,773,479,838Q369,903,258,829.5Q147,756,125.5,628Q104,500,189.5,418.5Q275,337,324,223Q373,109,471,197.5Q569,286,705,269.5Q841,253,864.5,376.5Q888,500,850,613.5Z;
                M785.5,579.5Q719,659,668,759Q617,859,489.5,891.5Q362,924,357.5,765Q353,606,228,553Q103,500,167.5,402.5Q232,305,302.5,207.5Q373,110,503.5,98.5Q634,87,658.5,227Q683,367,767.5,433.5Q852,500,785.5,579.5Z;
                M829.5,630Q858,760,731,789.5Q604,819,518,764.5Q432,710,320,711Q208,712,131.5,606Q55,500,186.5,434Q318,368,362,289Q406,210,489,244Q572,278,660.5,298.5Q749,319,775,409.5Q801,500,829.5,630Z;
                M850,613.5Q812,727,700.5,750Q589,773,479,838Q369,903,258,829.5Q147,756,125.5,628Q104,500,189.5,418.5Q275,337,324,223Q373,109,471,197.5Q569,286,705,269.5Q841,253,864.5,376.5Q888,500,850,613.5Z;
                    '
              ></animate>
            </path>
          </g>
        </svg>

        <svg
          width='1000'
          height='1000'
          viewBox='0 0 1000 1000'
          xmlns='http://www.w3.org/2000/svg'
        >
          <defs>
            <linearGradient
              id='linearGradientId-4'
              gradientTransform='rotate(-45 0.5 0.5)'
            >
              <stop offset='0%' stopColor='#00DBDE' />
              <stop offset='100%' stopColor='#fc00ff' />
            </linearGradient>

            <clipPath id='shape-4'>
              <path
                fill='currentColor'
                d='M818.5,613Q811,726,729,839.5Q647,953,517.5,899.5Q388,846,242,819.5Q96,793,109,646.5Q122,500,187.5,410.5Q253,321,313,216Q373,111,508,84.5Q643,58,641,228.5Q639,399,732.5,449.5Q826,500,818.5,613Z'
              ></path>
            </clipPath>
          </defs>

          <g clipPath='url(#shape-4)'>
            <path
              fill='url(#linearGradientId-4)'
              d='M818.5,613Q811,726,729,839.5Q647,953,517.5,899.5Q388,846,242,819.5Q96,793,109,646.5Q122,500,187.5,410.5Q253,321,313,216Q373,111,508,84.5Q643,58,641,228.5Q639,399,732.5,449.5Q826,500,818.5,613Z'
            >
              <animate
                repeatCount={300}
                dur={10}
                attributeName='d'
                values='M818.5,613Q811,726,729,839.5Q647,953,517.5,899.5Q388,846,242,819.5Q96,793,109,646.5Q122,500,187.5,410.5Q253,321,313,216Q373,111,508,84.5Q643,58,641,228.5Q639,399,732.5,449.5Q826,500,818.5,613Z;
                M850,613.5Q812,727,700.5,750Q589,773,479,838Q369,903,258,829.5Q147,756,125.5,628Q104,500,189.5,418.5Q275,337,324,223Q373,109,471,197.5Q569,286,705,269.5Q841,253,864.5,376.5Q888,500,850,613.5Z;
                M785.5,579.5Q719,659,668,759Q617,859,489.5,891.5Q362,924,357.5,765Q353,606,228,553Q103,500,167.5,402.5Q232,305,302.5,207.5Q373,110,503.5,98.5Q634,87,658.5,227Q683,367,767.5,433.5Q852,500,785.5,579.5Z;
                M818.5,613Q811,726,729,839.5Q647,953,517.5,899.5Q388,846,242,819.5Q96,793,109,646.5Q122,500,187.5,410.5Q253,321,313,216Q373,111,508,84.5Q643,58,641,228.5Q639,399,732.5,449.5Q826,500,818.5,613Z;
                    '
              ></animate>
            </path>
          </g>
        </svg>

        <svg viewBox='0 0 1000 1000' xmlns='http://www.w3.org/2000/svg'>
          <defs>
            <linearGradient
              id='linearGradientId-5'
              gradientTransform='rotate(-45 0.5 0.5)'
            >
              <stop offset='0%' stopColor='#00DBDE' />
              <stop offset='100%' stopColor='#fc00ff' />
            </linearGradient>

            <clipPath id='shape-5'>
              <path
                fill='currentColor'
                d='M869.5,615.5Q818,731,700.5,744Q583,757,471.5,844.5Q360,932,247,849Q134,766,218.5,633Q303,500,268.5,403.5Q234,307,342,326Q450,345,548.5,197Q647,49,706.5,178Q766,307,843.5,403.5Q921,500,869.5,615.5Z'
              ></path>
            </clipPath>
          </defs>

          <g clipPath='url(#shape-5)'>
            <path
              fill='url(#linearGradientId-5)'
              d='M869.5,615.5Q818,731,700.5,744Q583,757,471.5,844.5Q360,932,247,849Q134,766,218.5,633Q303,500,268.5,403.5Q234,307,342,326Q450,345,548.5,197Q647,49,706.5,178Q766,307,843.5,403.5Q921,500,869.5,615.5Z'
            >
              <animate
                repeatCount={300}
                dur={15}
                attributeName='d'
                values='M869.5,615.5Q818,731,700.5,744Q583,757,471.5,844.5Q360,932,247,849Q134,766,218.5,633Q303,500,268.5,403.5Q234,307,342,326Q450,345,548.5,197Q647,49,706.5,178Q766,307,843.5,403.5Q921,500,869.5,615.5Z;
                M818.5,613Q811,726,729,839.5Q647,953,517.5,899.5Q388,846,242,819.5Q96,793,109,646.5Q122,500,187.5,410.5Q253,321,313,216Q373,111,508,84.5Q643,58,641,228.5Q639,399,732.5,449.5Q826,500,818.5,613Z;
                M850,613.5Q812,727,700.5,750Q589,773,479,838Q369,903,258,829.5Q147,756,125.5,628Q104,500,189.5,418.5Q275,337,324,223Q373,109,471,197.5Q569,286,705,269.5Q841,253,864.5,376.5Q888,500,850,613.5Z;
                M785.5,579.5Q719,659,668,759Q617,859,489.5,891.5Q362,924,357.5,765Q353,606,228,553Q103,500,167.5,402.5Q232,305,302.5,207.5Q373,110,503.5,98.5Q634,87,658.5,227Q683,367,767.5,433.5Q852,500,785.5,579.5Z;
                M869.5,615.5Q818,731,700.5,744Q583,757,471.5,844.5Q360,932,247,849Q134,766,218.5,633Q303,500,268.5,403.5Q234,307,342,326Q450,345,548.5,197Q647,49,706.5,178Q766,307,843.5,403.5Q921,500,869.5,615.5Z;
                    '
              ></animate>
            </path>
          </g>
        </svg>
        <img src={Thalles} id='profilepic' />
        <motion.div
          initial={{ left: '80%' }}
          whileInView={{ left: '60%' }}
          transition={transition}
          style={{ top: '-2rem' }}
        >
          <FloatingDiv image={Img1} txt1='Web' txt2='Developer' />
        </motion.div>
        <motion.div
          initial={{ left: '-10%' }}
          whileInView={{ left: '5%' }}
          transition={transition}
          style={{ top: '15rem' }}
        >
          <FloatingDiv image={Img2} txt1='React' txt2='Library' />
        </motion.div>
        <div
          className='blur'
          style={{
            backgroundColor: '#fb00ff4e',
            right: '5rem',
            bottom: '-5rem',
          }}
        ></div>
        <div
          className='blur'
          style={{
            backgroundColor: '#00dade6b',
            left: '-45em',
            bottom: '20rem',
          }}
        ></div>
      </section>
    </div>
  );
};
export default Intro;
