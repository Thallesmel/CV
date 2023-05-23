import React, { useContext } from 'react';
import Card from '../Card/Card.jsx';
import Book from '../../img/book-stack.png';
import Cv from '../../img/cv.pdf';
import Coding from '../../img/binary-code.png';
import People from '../../img/people.png';
import { themeContext } from '../../context';
import { motion } from 'framer-motion';
const transition = { duration: 2, type: 'spring' };

const AboutMe = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='about-me' id='aboutMe-section'>
      <div className='column'>
        <span style={darkMode ? { color: 'white' } : { color: 'var(--black)' }}>
          About me
        </span>
        <span>Personal Informations</span>
        <span style={darkMode ? { color: 'white' } : { color: 'var(--gray)' }}>
          Age, Nationality, Lenguage levels, Hobbies, Goals, Address
        </span>
        <a style={{ width: '8rem' }} href={Cv} download>
          <button className='button a-button'>Download CV</button>
        </a>
        <ul style={darkMode ? { color: 'white' } : { color: 'var(--black)' }}>
          <li>Age: 20 years old</li>
          <li>Nationality: Brazilian</li>
          <li>Language Levels:</li>
          <li>Portuguese: Native Language</li>
          <li>English: Advanced</li>
          <li>German: intermediate</li>
          <li>Hobbies: Art and Music</li>
          <li>Goals: Full-stack Web Developer</li>
          <li>Address: Rua Maria Dalina, 443, 54315662, Brazil</li>
        </ul>
      </div>
      <section className='container'>
        <div
          className='blur a-blur1'
          style={{ backgroundColor: '#00dade81' }}
        ></div>
        <div className='cards'>
          <motion.div
            initial={{ left: '35rem' }}
            whileInView={{ left: '14rem' }}
            transition={transition}
          >
            <Card
              id='card'
              emoji={Book}
              heading={'Education'}
              experience={80}
              detail={'Software Engineering University Estacio'}
            />
          </motion.div>
          <motion.div
            id='card'
            initial={{ left: '8rem' }}
            whileInView={{ left: '4rem' }}
            transition={transition}
          >
            <Card
              emoji={Coding}
              heading={'Coding'}
              experience={100}
              detail={'Java, JS, React Native, C# and more'}
            />
          </motion.div>
          <motion.div
            id='card'
            initial={{ left: '30rem' }}
            whileInView={{ left: '12rem' }}
            transition={transition}
          >
            <Card
              emoji={People}
              heading={'Comunication'}
              experience={93}
              detail={'Happy teamwork, Ready to help!'}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
