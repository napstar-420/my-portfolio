/* eslint-disable jsx-a11y/anchor-is-valid */
import {FaInstagram, FaPaperPlane, FaGithub} from 'react-icons/fa';
import {HiChevronDoubleDown} from 'react-icons/hi';

function HeroComponent() {
    return (
      <div className='h-screen w-full overflow-hidden relative flex' id='hero_section'>
  
        <div className='animate_box'/>
  
        {/* LEFT SIDE */}
  
        <div className='bg-mainBlack flex-1 px-3 py-2 flex flex-col justify-between' id='left_side'>
          <h2 className='text-xl font-semibold text-mainGreen font-poppins tracking-widest'>Napstar.</h2>
          <div className='flex flex-col items-center w-max z-20'>
            <div className='w-[2px] h-[5vh] bg-mainGreen'></div>
            <a href='https://www.instagram.com/zohaib_billa_420/' target='_blank' rel="noreferrer" className='mb-1 mt-2 border p-2 rounded-full border-mainGreen hover:bg-mainGreen hover:text-mainBlack transition-all text-mainGreen'><FaInstagram className=''/></a>
            <a href='mailto:zohaibkhan1162002@gmail.com' target='_blank' rel="noreferrer" className='my-1 border p-2 rounded-full border-mainGreen hover:bg-mainGreen hover:text-mainBlack transition-all text-mainGreen'><FaPaperPlane className=''/></a>
            <a href='https://github.com/napstar-420' target='_blank' rel="noreferrer" className='mt-1 mb-2 border p-2 rounded-full border-mainGreen hover:bg-mainGreen hover:text-mainBlack transition-all text-mainGreen'><FaGithub className=''/></a>
            <div className='w-[2px] h-[5vh] bg-mainGreen'></div>
          </div>
        </div>
  
        {/* RIGHT SIDE */}
  
        <div className='bg-mainGreen flex-1 px-3 py-2 flex flex-col justify-between items-end' id='right_side'>
          <nav className='flex flex-col sm:flex-row items-end z-20'>
            <a href="#about_me" className='text-md font-semibold text-mainBlack font-poppins sm:mx-1 lg:mx-2 cursor-pointer relative before:content-[""] before:absolute before:left-0 before:-bottom-1 before:h-1 before:bg-mainBlack before:w-0 hover:before:w-full before:transition-all before:ease-out before:duration-300'>About</a>
            <a href="#work" className='text-md font-semibold text-mainBlack font-poppins sm:mx-1 lg:mx-2 cursor-pointer relative before:content-[""] before:absolute before:left-0 before:-bottom-1 before:h-1 before:bg-mainBlack before:w-0 hover:before:w-full before:transition-all before:ease-out before:duration-300'>Work</a>
            <a href="#connect" className='text-md font-semibold text-mainBlack font-poppins sm:mx-1 lg:mx-2 cursor-pointer relative before:content-[""] before:absolute before:left-0 before:-bottom-1 before:h-1 before:bg-mainBlack before:w-0 hover:before:w-full before:transition-all before:ease-out before:duration-300'>Connect</a>
          </nav>
          <p className='flex items-center text-mainBlack font-poppins font-semibold animate-bounce'>Scroll Down <HiChevronDoubleDown /></p>
        </div>
  
        {/* CENTER */}
  
        <div className='absolute left-0 w-full h-full grid place-items-center' id='welcome'>
          <div className='text-center w-full'>
            <h1 className='text-mainGreen font-black text-3xl sm:text-4xl md:text-5xl mix-blend-difference font-poppins mb-2' id="h_1">Hey, I am Zohaib</h1>
            <h1 className='text-mainGreen font-black text-3xl sm:text-4xl md:text-5xl mix-blend-difference font-poppins' id='h_2'>Frontend Developer</h1>
            <div className='mt-8' id='call_to_action'>
              <a href="#work" className='px-4 sm:px-6 py-1 text-mainBlack font-semibold bg-mainGreen mx-3 text-xl font-poppins hover:bg-transparent hover:text-mainGreen border-[3px] border-mainGreen active:bg-[#404040] transition-all'>Work</a>
              <a href="#about_me" className='px-4 sm:px-6 py-1 text-mainGreen font-semibold bg-mainBlack mx-1 text-xl font-poppins hover:bg-transparent hover:text-mainBlack border-[3px] border-mainBlack active:bg-[#7cffcf] transition-all'>About</a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export default HeroComponent;