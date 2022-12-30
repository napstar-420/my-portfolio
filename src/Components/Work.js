import React, { useLayoutEffect, useRef, useState } from "react";
import spicella_burgers from "../Images/spicella_burgers.webp";
import goodwell_outlet from "../Images/goodwell_outlet.webp";
import geo_weather from "../Images/geo_weather.webp";
import random_quote_site from "../Images/random_quote_site.webp";
import spicella_spanish_kitchen from "../Images/spicella_spanish_kitchen.webp";
import etchASketchImg from '../Images/etchasketch.png';
import signUpPage from '../Images/signuppage.png';
import ticTacToe from '../Images/tic_tac_toe.png';
import vuLms from '../Images/vu_lms.png';
import workDone from '../Images/work_done.png';
import resumeBuilder from '../Images/resume-builder.png';
import {AiFillHtml5} from 'react-icons/ai';
import {FaCss3Alt, FaBootstrap, FaGitAlt, FaGithub} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import {SiTailwindcss, SiSass, SiReact, SiRedux, SiVisualstudiocode, SiReactrouter} from 'react-icons/si';

const Work = () => {
  const projects = [
    {
      name: 'Resume builder',
      img: resumeBuilder,
      desc: 'Free online resume builder store user\'s information in firebase and create\'s a resume which user can download as PDF. Currently there are only 2 templates but i have plans for creating more. In order to use this app you need to sign up first.',
      hostedURL: "https://free-online-resume-builder.netlify.app/",
      codeURL: "https://github.com/napstar-420/resume-builder"
    },
    {
      name: 'Work Done Complex Todo App',
      img: workDone,
      desc: 'Work Done is a complex todo app that let\'s you organize your tasks in projects. And show you remaining time. You can edit the task later, delete it or set as complete. This website uses Browser storage so you\'re tasks will be saved',
      hostedURL: "https://workdone-todo.netlify.app",
      codeURL: "https://github.com/napstar-420/workdone-complex-todo-app"
    },
    {
      name: "Geo Weather",
      img: geo_weather,
      desc: "Geo weather is an online weather application. User can search for his/her city weather (suggestions will show up while searching) and can see the current weather/temperature and a daily forecast with some additional information.",
      hostedURL: "https://geo-weather-napstar.netlify.app/",
      codeURL: "https://github.com/napstar-420/weather-app",
    },
    {
      name: "Goodwell Outlet",
      img: goodwell_outlet,
      desc: "Goodwell Outlet is a small e-commerce website which sells women, men and kids clothing plus accessories. Although its not a big website you can still add your products to cart and remove them.",
      hostedURL: "https://goodwell-outlet.netlify.app/",
      codeURL: "https://github.com/napstar-420/goodwell-outlet",
    },
    {
      name: 'Sign up Page',
      img: signUpPage,
      desc: 'It\'s a simple sign up page but with javascript form validation. Showing that i can handle the form validation on client side to prevent the user from entering wrong information',
      hostedURL: "https://sign-up-form-napstar.netlify.app/",
      codeURL: "https://github.com/napstar-420/sign-up-form"
    },
    {
      name: 'VU LMS Redesigned',
      img: vuLms,
      desc: 'I always thought that my university learning management system (lms) website. was not properly designed. So i decided to re develop their front page with better design.',
      hostedURL: "https://vu-lms.netlify.app//",
      codeURL: "https://github.com/napstar-420/lms-dashboard-redesign"
    },
    {
      name: "Random Quote Site",
      img: random_quote_site,
      desc: "Random quote site is a website where you can get thousands of different quotes from famous personalities, and can tweet them right away from the website.",
      hostedURL: "https://random-quotes-dailysite.netlify.app/",
      codeURL: "https://github.com/napstar-420/random-quote-site",
    },
    {
      name: 'Tic Tac Toe',
      img: ticTacToe,
      desc: 'A simple 2 player web based tic tac toe game coded in vanilla javascript. I will add an Ai opponent soon.',
      hostedURL: "https://tictactoe-napstar.netlify.app/",
      codeURL: "https://github.com/napstar-420/tic-tac-toe"
    },
    {
      name: 'Etch a Sketch',
      img: etchASketchImg,
      desc: 'Etch a sketch is fun web game. Created in Javascript. You can change size of grids and color them. There is also a rainbow mode which makes your world colorful.',
      hostedURL: "https://etch-a-sketch-napstar.netlify.app/",
      codeURL: "https://github.com/napstar-420/etch-a-sketch"
    },
    {
      name: "Spicella Burgers",
      img: spicella_burgers,
      desc: "It's a fictional Restaurant website. Which are famous for their burgers. There are total 3 pages (home, menu and reservation). User can see the menu and book a date.",
      hostedURL: "https://spicella-burgers.netlify.app/",
      codeURL: "https://github.com/napstar-420/spicella-burgers",
    },
    {
      name: "Spicella Spanish Kitchen",
      img: spicella_spanish_kitchen,
      desc: "Spicella Spanish Kitchen is a website of a spanish restaurant that serves different types of spanish foods. Website has a Hero Section, Menu , Contact etc.",
      hostedURL: "https://spicella-spanish-kitchen.netlify.app/",
      codeURL: "https://github.com/napstar-420/spicella-spanish-kitchen",
    },
  ];

  const head3Ref = useRef(null);
  const techDivRef = useRef(null);

  const [showHead, setShowHead] = useState(false);
  const [showTechDiv, setShowTechDiv] = useState(false);

  function onScroll() {
    const head3Pos = head3Ref.current.getBoundingClientRect().top;
    const techDivPos = techDivRef.current.getBoundingClientRect().top;
    const scrollPos = window.scrollY + window.innerHeight - 1500;
    // HEAD
    if(head3Pos < scrollPos) setShowHead(true); console.log('SHOWING');
    if (head3Pos + 100 > scrollPos) setShowHead(false);
    // Tech DIV
    if(techDivPos < scrollPos) setShowTechDiv(true);
    if (techDivPos + 100 > scrollPos) setShowTechDiv(false);

  }

  useLayoutEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
}, [])
  
  return (
    <section className='py-32'>
      <div className='mx-auto max-w-[700px] mb-32 px-4'>
        <h1 ref={head3Ref} className={`text-mainGreen font-poppins font-semibold text-center text-2xl sm:text-3xl px-4 mb-8 my-transition relative ${showHead ? 'opacity-100 top-0' : 'opacity-0 top-24'}`}>
          My Technology Stack
        </h1>
        <div ref={techDivRef} className={`grid grid-cols-[repeat(auto-fit,_minmax(150px,1fr))] gap-4 my-transition relative ${showTechDiv ? 'opacity-100 top-0' : 'opacity-0 top-24'}`}>
          <div className='text-2xl text-white font-poppins font-medium flex flex-col items-center justify-between p-4 shadow shadow-[#202020] rounded transition hover:shadow-mainGreen'>
            <AiFillHtml5 className='text-orange-500 text-8xl mb-1' />
            HTML
          </div>
          <div className='text-2xl text-white font-poppins font-medium flex flex-col items-center justify-between p-4 shadow shadow-[#202020] rounded transition hover:shadow-mainGreen'>
            <FaCss3Alt className='text-blue-500 text-8xl mb-1' />
            CSS
          </div>
          <div className='text-2xl text-white font-poppins font-medium flex flex-col items-center justify-between p-4 shadow shadow-[#202020] rounded transition hover:shadow-mainGreen'>
            <IoLogoJavascript className='text-yellow-500 text-8xl mb-1' />
            Javascript
          </div>
          <div className='text-2xl text-white font-poppins font-medium flex flex-col items-center justify-between p-4 shadow shadow-[#202020] rounded transition hover:shadow-mainGreen'>
            <SiReact className='text-blue-500 text-8xl mb-1' />
            React
          </div>
          <div className='text-2xl text-white font-poppins font-medium flex flex-col items-center justify-between p-4 shadow shadow-[#202020] rounded transition hover:shadow-mainGreen'>
            <SiRedux className='text-purple-700 text-8xl mb-1' />
            Redux
          </div>
          <div className='text-2xl text-white text-center font-poppins font-medium flex flex-col items-center justify-between p-4 shadow shadow-[#202020] rounded transition hover:shadow-mainGreen'>
            <SiReactrouter className='text-red-700 text-8xl mb-1' />
            React Router
          </div>
          <div className='text-2xl text-white font-poppins font-medium flex flex-col items-center justify-between p-4 shadow shadow-[#202020] rounded transition hover:shadow-mainGreen'>
            <FaBootstrap className='text-[#6e10ee] text-8xl mb-1' />
            Bootstrap
          </div>
          <div className='text-2xl text-white font-poppins font-medium flex flex-col items-center justify-between p-4 shadow shadow-[#202020] rounded transition hover:shadow-mainGreen'>
            <SiTailwindcss className='text-blue-600 text-8xl mb-1' />
            Tailwind
          </div>
          <div className='text-2xl text-white font-poppins font-medium flex flex-col items-center justify-between p-4 shadow shadow-[#202020] rounded transition hover:shadow-mainGreen'>
            <SiSass className='text-pink-600 text-8xl mb-1' />
            Sass
          </div>
          <div className='text-2xl text-white font-poppins font-medium flex flex-col items-center justify-between p-4 shadow shadow-[#202020] rounded transition hover:shadow-mainGreen'>
            <FaGitAlt className='text-orange-600 text-8xl mb-1' />
            Git
          </div>
          <div className='text-2xl text-white font-poppins font-medium flex flex-col items-center justify-between p-4 shadow shadow-[#202020] rounded transition hover:shadow-mainGreen'>
            <FaGithub className='text-black text-8xl mb-1' />
            Github
          </div>
          <div className='text-2xl text-white font-poppins font-medium flex flex-col items-center justify-between p-4 shadow shadow-[#202020] rounded transition hover:shadow-mainGreen'>
            <SiVisualstudiocode className='text-blue-500 text-8xl mb-1' />
            VsCode
          </div>
        </div>
      </div>
      <h2  id='work' className='text-mainGreen font-poppins font-semibold text-center text-2xl sm:text-3xl px-4'>
        Some of my Projects
      </h2>
      <p className='text-white font-openSans text-center text-xs my-4 md:my-8 sm:text-sm max-w-[35em] mx-auto opacity-50 px-4'>
        Here is some of my work which i made while learning frontend
        development. They are not the best of me but still i had a lot of fun
        while making these projects. Some new interesting projects are coming
        soon.
      </p>
      <article className='mt-14'>
        {projects.map((project, index) => {
          const { name, img, desc, hostedURL, codeURL } = project;
          return (
            <div key={index} className='w-full mx-auto bg-[#202020] my-10'>
              <div className='w-[90%] lg:max-w-5xl py-8 mx-auto'>
                <h2 className='text-mainGreen text-2xl font-semibold font-poppins tracking-widest'>
                  {name}
                </h2>
                <div className='md:flex justify-between items-center'>
                  <p className='text-white font-quicksand my-4 text-sm sm:text-base max-w-[20em] lg:leading-7'>
                    {desc}
                  </p>
                  <img
                    src={img}
                    alt={name}
                    className='w-[300px] sm:w-[400px] mx-auto md:mx-0 lg:scale-125 lg:hover:scale-150 transition-all cursor-crosshair'
                  />
                </div>
                <div className='mt-4 flex flex-wrap'>
                  <a
                    href={hostedURL}
                    target='_blank'
                    rel='noreferrer'
                    className='font-poppins text-sm md:text-base font-semibold text-mainBlack bg-mainGreen px-5 py-1 mr-1 border-[3px] border-mainGreen hover:bg-[#4ce6ad]'
                  >
                    Live Preview
                  </a>
                  <a
                    href={codeURL}
                    target='_blank'
                    rel='noreferrer'
                    className='font-poppins text-sm md:text-base font-semibold text-mainGreen bg-transparent hover:bg-[#353535] px-5 py-1 ml-1 border-[3px] border-mainGreen'
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
        <p className='text-center text-white font-openSans'>
          New Projects Coming Soon
        </p>
      </article>
    </section>
  );
};

export default Work;
