import React, {useState, useEffect} from 'react'
import myPic from '../Images/my_pic.webp';
import {AiFillHtml5} from 'react-icons/ai';
import {FaCss3Alt, FaBootstrap, FaGitAlt, FaGithub} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import {SiTailwindcss, SiSass, SiReact, SiRedux, SiVisualstudiocode} from 'react-icons/si';
import resume from '..//Docs/resume.pdf'


function AboutMe() {

    const secondNames = ['Problem Solver', 'Programmer', 'Web Developer', 'UI / UX Designer', 'Coder']
    const [index, setIndex] = useState(0);

    useEffect(()=>{
        let length = secondNames.length;
        setTimeout(()=>{
            let n = index;
            if(n === length - 1){
                setIndex(0);
            } else {
                setIndex(n+1);
            }
        },2000)

    },[index])


    return (
        <section className="bg-mainGreen w-full min-h-screen p-4" id='about_me'>
            <div className='bg-mainBlack w-full rounded-2xl p-4 sm:p-8'>
                <article className=" max-w-5xl mx-auto">
                    <div className='flex flex-col items-center my-2'>
                        <div className='flex flex-col md:flex-row items-center w-full'>
                            <img src={myPic} alt="" className='w-[150px] md:hidden'/>
                            <div className='text-center md:text-left my-4'>
                                <h2 className='text-white font-bold font-poppins text-2xl sm:text-4xl'>Who am i</h2>
                                <h2 className={`text-mainGreen font-bold font-poppins text-2xl sm:text-4xl`}>{secondNames[index]}</h2>
                            </div>
                        </div>
                        <div className='md:flex justify-start items-center md:w-full'>
                            <img src={myPic} alt="computer_illustration" className='hidden md:block w-[150px] mr-8'/>
                            <p className='text-white text-center tracking-wider font-quicksand font-light my-4 sm:my-8 md:mr-8 md:text-left max-w-[40em]'>
                                Hi, My name is Zohaib. I am a self taught Frontend Web Developer based in Lahore, PK. I Build websites in React JS along with many other different technologies. As a developer i love solving problems and i have keen eye for the design as well. Also i enjoy learning new things because in this modern era new technologies are being released everyday. As a new Developer i am looking forward to job opportunities where i can polish my skills. 
                            </p>
                        </div>
                    </div>
                    <div className='md:grid grid-cols-2 '>
                        <div className='mt-14 text-center md:text-left'>
                            <h2 className='text-mainGreen font-medium font-poppins text-2xl'>My Technology Stack</h2>
                            <div className='text-white my-20 flex flex-col items-center h-[20em] w-full md:w-max md:px-16'>
                                <div className='stack_item bg-[#e34c26]  rounded-lg grid place-items-center z-[11] overflow-visible'>
                                    <h3 className='font-poppins text-xl font-semibold'><AiFillHtml5 className='mr-1'/> Html 5</h3>
                                </div>
                                <div className='stack_item bg-[#264de4] rounded-lg grid place-items-center z-[10]'>
                                    <h3 className='font-poppins text-xl font-semibold'><FaCss3Alt className='mr-1'/> Css 3</h3>
                                </div>
                                <div className='stack_item bg-[#f0db4f] rounded-lg grid place-items-center z-[9]'>
                                    <h3 className='font-poppins text-xl font-semibold'><IoLogoJavascript className='mr-1'/> Javascript</h3>
                                </div>
                                <div className='stack_item bg-[#7952b3] rounded-lg grid place-items-center z-[8]'>
                                    <h3 className='font-poppins text-xl font-semibold'><FaBootstrap className='mr-1'/> Bootstrap</h3>
                                </div>
                                <div className='stack_item bg-[#0eb5fd]  rounded-lg grid place-items-center z-[7]'>
                                    <h3 className='font-poppins text-xl font-semibold'><SiTailwindcss className='mr-1'/> Tailwind</h3>
                                </div>
                                <div className='stack_item bg-[#cc6699] rounded-lg grid place-items-center z-[6]'>
                                    <h3 className='font-poppins text-xl font-semibold'><SiSass className='mr-1'/> Sass</h3>
                                </div>
                                <div className='stack_item bg-[#61DBFB] rounded-lg grid place-items-center z-[5]'>
                                    <h3 className='font-poppins text-xl font-semibold'><SiReact className='mr-1'/> React JS</h3>
                                </div>
                                <div className='stack_item bg-[#9e7bd6] rounded-lg grid place-items-center z-[4]'>
                                    <h3 className='font-poppins text-xl font-semibold'><SiRedux className='mr-1'/> Redux JS</h3>
                                </div>
                                <div className='stack_item bg-[#0066b8] rounded-lg grid place-items-center z-[3]'>
                                    <h3 className='font-poppins text-xl font-semibold'><SiVisualstudiocode className='mr-1'/> VS Code</h3>
                                </div>
                                <div className='stack_item bg-[#f44d27] rounded-lg grid place-items-center z-[2]'>
                                    <h3 className='font-poppins text-xl font-semibold'><FaGitAlt className='mr-1'/> Git</h3>
                                </div>
                                <div className='stack_item bg-[#474747] rounded-lg grid place-items-center z-[1]'>
                                    <h3 className='font-poppins text-xl font-semibold'><FaGithub className='mr-1'/> Github</h3>
                                </div>
                            </div>
                        </div>
                        <div className='my-14 px-4'>
                            <h2 className='text-mainGreen font-medium font-poppins text-2xl'>Skill set</h2>
                            <ul className='text-white list-disc px-4 mt-6'>
                                <li className='font-quicksand text-lg sm:text-xl mb-2'>Responsive Design</li>
                                <li className='font-quicksand text-lg sm:text-xl mb-2'>React Applications</li>
                                <li className='font-quicksand text-lg sm:text-xl mb-2'>DOM Manipulation</li>
                                <li className='font-quicksand text-lg sm:text-xl mb-2'>Clean Code</li>
                                <li className='font-quicksand text-lg sm:text-xl mb-2'>Building Single Page Applications</li>
                                <li className='font-quicksand text-lg sm:text-xl mb-2'>Reuseable Components</li>
                                <li className='font-quicksand text-lg sm:text-xl mb-2'>Modern Design</li>
                                <li className='font-quicksand text-lg sm:text-xl mb-2'>Working with Api's</li>
                                <li className='font-quicksand text-lg sm:text-xl mb-2'>UI / UX Design</li>
                                <li className='font-quicksand text-lg sm:text-xl mb-2'>Figma, Photoshop, Premiere</li>
                            </ul>
                        </div>
                        <div className='h-2 w-[50vw] mx-auto bg-mainGreen rounded md:hidden'/>
                        <h2 className='text-white mt-8 mb-4 px-4 md:px-0 font-poppins sm:text-lg md:text-xl'>Have a look at my <a href={resume} target='_blank' className='px-4 py-1 bg-mainGreen rounded text-mainBlack font-semibold mx-2 hover:bg-[#3dbe8f]' rel="noreferrer">Resume</a></h2>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default AboutMe;