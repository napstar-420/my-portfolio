import React from "react";
import spicella_burgers from "../Images/spicella_burgers.png";
import goodwell_outlet from "../Images/goodwell_outlet.png";
import geo_weather from "../Images/geo_weather.png";
import random_quote_site from "../Images/random_quote_site.png";
import spicella_spanish_kitchen from "../Images/spicella_spanish_kitchen.png";

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
    <section className="py-16">
      <h2 className="text-mainGreen font-poppins font-semibold text-center text-2xl sm:text-3xl px-4">
        Some of my Projects
      </h2>
      <p className="text-white font-openSans text-center text-xs my-4 md:my-8 sm:text-sm max-w-[35em] mx-auto opacity-50 px-4">
        Here is some of my work which i made while learning frontend
        development. They are not the best of me but still i had a lot of fun
        while making these projects. Some new interesting projects are coming
        soon.
      </p>
      <article className="mt-14">
        {projects.map((project, index) => {
          const { name, img, desc, hostedURL, codeURL } = project;
          return (
            <div className="w-full mx-auto bg-[#202020] my-10">
              <div className="w-[90%] lg:max-w-5xl py-8 mx-auto">
                <h2 className="text-mainGreen text-2xl font-semibold font-poppins tracking-widest">
                  {name}
                </h2>
                <div className="md:flex justify-between items-center">
                    <p className="text-white font-quicksand my-4 text-sm sm:text-base max-w-[20em] lg:leading-7">{desc}</p>
                    <img src={img} alt={name} className="w-[300px] sm:w-[400px] mx-auto md:mx-0 md:scale-125 hover:scale-150 transition-all cursor-crosshair"/>
                </div>
                <div className="mt-4 flex flex-wrap">
                  <a
                    href={hostedURL}
                    target="_blank"
                    rel="noreferrer"
                    className="font-poppins text-sm md:text-base font-semibold text-mainBlack bg-mainGreen px-5 py-1 mr-1 border-[3px] border-mainGreen hover:bg-[#4ce6ad]"
                  >
                    Live Preview
                  </a>
                  <a
                    href={codeURL}
                    target="_blank"
                    rel="noreferrer"
                    className="font-poppins text-sm md:text-base font-semibold text-mainGreen bg-transparent hover:bg-[#353535] px-5 py-1 ml-1 border-[3px] border-mainGreen"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
        <p className="text-center text-white font-openSans">New Projects Coming Soon</p>
      </article>
    </section>
  );
};

export default Work;
