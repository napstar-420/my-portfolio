import React from "react";
import spicella_burgers from "../Images/spicella_burgers.webp";
import goodwell_outlet from "../Images/goodwell_outlet.webp";
import geo_weather from "../Images/geo_weather.webp";
import random_quote_site from "../Images/random_quote_site.webp";
import spicella_spanish_kitchen from "../Images/spicella_spanish_kitchen.webp";
import {AiFillHtml5} from 'react-icons/ai';
import {FaCss3Alt, FaBootstrap, FaGitAlt, FaGithub} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import {SiTailwindcss, SiSass, SiReact, SiRedux, SiVisualstudiocode, SiReactrouter} from 'react-icons/si';

const Work = () => {
  const projects = [
    {
      name: "Spicella Burgers",
      img: spicella_burgers,
      desc: "It's a fictional Restaurant website. Which are famous for their burgers. There are total 3 pages (home, menu and reservation). User can see the menu and book a date.",
      hostedURL: "https://spicella-burgers.netlify.app/",
      codeURL: "https://github.com/napstar-420/spicella-burgers",
    },
    {
      name: "Goodwell Outlet",
      img: goodwell_outlet,
      desc: "Goodwell Outlet is a small e-commerce website which sells women, men and kids clothing plus accessories. Although its not a big website you can still add your products to cart and remove them.",
      hostedURL: "https://goodwell-outlet.netlify.app/",
      codeURL: "https://github.com/napstar-420/goodwell-outlet",
    },
    {
      name: "Geo Weather",
      img: geo_weather,
      desc: "Geo weather is an online weather application. User can search for his/her city weather (suggestions will show up while searching) and can see the current weather/temperature and a daily forecast with some additional information.",
      hostedURL: "https://geo-weather-napstar.netlify.app/",
      codeURL: "https://github.com/napstar-420/weather-app",
    },
    {
      name: "Random Quote Site",
      img: random_quote_site,
      desc: "Random quote site is a website where you can get thousands of different quotes from famous personalities, and can tweet them right away from the website.",
      hostedURL: "https://random-quotes-dailysite.netlify.app/",
      codeURL: "https://github.com/napstar-420/random-quote-site",
    },
    {
      name: "Spicella Spanish Kitchen",
      img: spicella_spanish_kitchen,
      desc: "Spicella Spanish Kitchen is a website of a spanish restaurant that serves different types of spanish foods. Website has a Hero Section, Menu , Contact etc.",
      hostedURL: "https://spicella-spanish-kitchen.netlify.app/",
      codeURL: "https://github.com/napstar-420/spicella-spanish-kitchen",
    },
  ];

  return (
    <section className='py-32' id='work'>
      <div className='mx-auto max-w-[700px] mb-32 px-4'>
        <h1 className='text-mainGreen font-poppins font-semibold text-center text-2xl sm:text-3xl px-4 mb-8'>
          My Technology Stack
        </h1>
        <div className='grid grid-cols-[repeat(auto-fit,_minmax(150px,1fr))] gap-4'>
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
            Git
          </div>
          <div className='text-2xl text-white font-poppins font-medium flex flex-col items-center justify-between p-4 shadow shadow-[#202020] rounded transition hover:shadow-mainGreen'>
            <SiVisualstudiocode className='text-blue-500 text-8xl mb-1' />
            VsCode
          </div>
        </div>
      </div>
      <h2 className='text-mainGreen font-poppins font-semibold text-center text-2xl sm:text-3xl px-4'>
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
