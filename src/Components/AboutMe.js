import React from 'react'
import myPic from '../Images/my_pic.jpg';
import {BsTelephone} from 'react-icons/bs';
import {HiOutlineMail} from 'react-icons/hi';
import {MdDevices} from 'react-icons/md';
import {VscRocket} from 'react-icons/vsc';
import {GoBrowser} from 'react-icons/go';

export default function AboutMe() {

    return (
        <section className="bg-mainGreen w-screen min-h-screen px-4 grid md:place-items-center py-32 relative" id='about_me'>
            <div className='bg-mainBlack lg:scale-100 2xl:scale-110 w-full md:w-[700px] md:h-auto h-[calc(100%-6rem)] md:grid grid-cols-[auto_1fr] shadow-md shadow-gray-700  rounded-md relative'>
                <div className={`w-[150px] md:w-[200px] h-[150px] md:h-auto mx-auto md:mx-0 bg-[url('/src/Images/my_pic.jpg')] bg-cover bg-right md:bg-none rounded-full md:rounded-none relative bottom-20 md:static md:bottom-0`}>
                    <img src={myPic} alt='' className='w-full hidden md:block'/>
                </div>
                <div className='py-8 px-4 md:px-10 relative bottom-24 md:bottom-0 text-center md:text-left w-full'>
                    <h2 className='text-2xl font-poppins font-bold text-mainGreen mb-1'>About me</h2>
                    <p className='text-white md:text-sm font-poppins font-thin'>
                        My name is Zohaib Khan, I am a self taught frontend developer based in Lahore, PK.
                        I have experience of working on multiple projects. Passionate, hardworking and open to opportunities. My specialty includes building websites in React JS along with many other technologies. As a developer i love solving problems and always eager to learn more.
                    </p>
                    <h5 className='flex items-center text-white font-poppins mt-4 mb-2 font-light'>
                        <BsTelephone className='mr-2 text-mainGreen'/> +92-322-3947372
                    </h5>
                    <h5 className='flex items-center text-white font-poppins font-light'>
                        <HiOutlineMail className='mr-2 text-lg text-mainGreen'/> dev.zohaib.work@gmail.com
                    </h5>
                    <h3 className='text-xl font-bold font-poppins text-white mt-8 mb-2 text-left'>Interests</h3>
                    <div className='flex items-start flex-wrap'>
                        <h4 className='px-4 py-[2px] font-poppins text-black bg-mainGreen rounded-full mr-2 mb-2'>Music</h4>
                        <h4  className='px-4 py-[2px] font-poppins text-black bg-mainGreen rounded-full mr-2 mb-2'>Gaming</h4>
                        <h4  className='px-4 py-[2px] font-poppins text-black bg-mainGreen rounded-full mr-2 mb-2'>Cyber Security</h4>
                        <h4  className='px-4 py-[2px] font-poppins text-black bg-mainGreen rounded-full mr-2 mb-2'>Art</h4>
                    </div>
                </div>
            </div>
            <div className='mt-8 md:mt-32 2xl:scale-110 lg:scale-100 w-full md:w-[700px]'>
                <h2 className='text-4xl font-poppins font-bold text-center mb-8 w-full'>My Websites are</h2>
                <div className='grid md:grid-cols-3 gap-4 w-full'>
                    <div className='bg-mainBlack text-white flex flex-col items-center rounded-md shadow-md shadow-mainBlack p-2 md:p-8 hover:-translate-y-2 hover:scale-105 hover:shadow-lg hover:shadow-green-800 transition-all cursor-pointer'>
                        <MdDevices className='text-8xl mb-4 text-mainGreen'/>
                        <h3 className='text-xl font-semibold font-poppins mb-4'>Responsive</h3>
                        <p className='text-sm font-poppins font-thin text-center'>My layouts work on all devices desktop, mobile or tablet</p>
                    </div>
                    <div className='bg-mainBlack text-white flex flex-col items-center rounded-md shadow-md shadow-mainBlack p-8 hover:-translate-y-2 hover:scale-105 hover:shadow-lg hover:shadow-green-800 transition-all cursor-pointer'>
                        <VscRocket className='text-8xl mb-4 text-mainGreen'/>
                        <h3 className='text-xl font-semibold font-poppins mb-4'>Fast</h3>
                        <p className='text-sm font-poppins font-thin text-center'>My layouts work on all devices desktop, mobile or tablet</p>
                    </div>
                    <div className='bg-mainBlack text-white flex flex-col items-center rounded-md shadow-md shadow-mainBlack p-8 hover:-translate-y-2 hover:scale-105 hover:shadow-lg hover:shadow-green-800 transition-all cursor-pointer'>
                        <GoBrowser className='text-8xl mb-4 text-mainGreen'/>
                        <h3 className='text-xl font-semibold font-poppins mb-4 text-center'>Cross Browser Compatible</h3>
                        <p className='text-sm font-poppins font-thin text-center'>My layouts work on all devices desktop, mobile or tablet</p>
                    </div>
                </div>
            </div>
        </section>
    )
}