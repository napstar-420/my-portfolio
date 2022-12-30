import React, { useLayoutEffect, useRef, useState } from 'react'
import myPic from '../Images/my_pic.jpg';
import {BsTelephone} from 'react-icons/bs';
import {HiOutlineMail} from 'react-icons/hi';
import {MdDevices} from 'react-icons/md';
import {VscRocket} from 'react-icons/vsc';
import {GoBrowser} from 'react-icons/go';

export default function AboutMe() {

    const containerRef = useRef(null);
    const headRef = useRef(null);
    const paraRef = useRef(null);
    const numberRef = useRef(null);
    const emailRef = useRef(null);
    const interestRef = useRef(null);
    const head2Ref = useRef(null)
    const feature1Ref = useRef(null)
    const feature2Ref = useRef(null)
    const feature3Ref = useRef(null)

    const [showContainer, setShowContainer] = useState(false);
    const [showHead, setShowHead] = useState(false);
    const [showPara, setShowPara] = useState(false);
    const [showNumber, setShowNumber] = useState(false);
    const [showEmail, setShowEmail] = useState(false);
    const [showInterest, setShowInterest] = useState(false);
    const [showHead2, setShowHead2] = useState(false);
    const [showFeature1, setShowFeature1] = useState(false);
    const [showFeature2, setShowFeature2] = useState(false);
    const [showFeature3, setShowFeature3] = useState(false);

    function onScroll() {

        const containerPos = containerRef.current.getBoundingClientRect().top;
        const headPos = headRef.current.getBoundingClientRect().top;
        const paraPos = paraRef.current.getBoundingClientRect().top;
        const numberPos = numberRef.current.getBoundingClientRect().top;
        const emailPos = emailRef.current.getBoundingClientRect().top;
        const interestPos = interestRef.current.getBoundingClientRect().top;
        const head2Pos = head2Ref.current.getBoundingClientRect().top;
        const feature1Pos = feature1Ref.current.getBoundingClientRect().top;
        const feature2Pos = feature2Ref.current.getBoundingClientRect().top;
        const feature3Pos = feature3Ref.current.getBoundingClientRect().top;

        const scrollPos = window.scrollY + window.innerHeight - 500;
        // CONTAINER
        if(containerPos < scrollPos) setShowContainer(true);
        if (containerPos > scrollPos) setShowContainer(false);
        // HEAD
        if(headPos < scrollPos) setShowHead(true); 
        if (headPos + 100 > scrollPos) setShowHead(false);
        // PARA
        if(paraPos < scrollPos) setShowPara(true);
        if (paraPos + 100 > scrollPos) setShowPara(false);
        // NUMBER
        if(numberPos < scrollPos) setShowNumber(true);
        if (numberPos + 100 > scrollPos) setShowNumber(false);
        // EMAIL
        if(emailPos < scrollPos) setShowEmail(true);
        if (emailPos + 100 > scrollPos) setShowEmail(false);
        // INTEREST
        if(interestPos < scrollPos) setShowInterest(true);
        if (interestPos + 100 > scrollPos) setShowInterest(false);
        // HEAD 2
        if(head2Pos < scrollPos) setShowHead2(true);
        if (head2Pos + 500 > scrollPos) setShowHead2(false);
        //FEATURE 1
        if(feature1Pos < scrollPos) setShowFeature1(true);
        if (feature1Pos + 500 > scrollPos) setShowFeature1(false);
        //FEATURE 2
        if(feature2Pos < scrollPos) setShowFeature2(true);
        if (feature2Pos + 500 > scrollPos) setShowFeature2(false);
        //FEATURE 3
        if(feature3Pos < scrollPos) setShowFeature3(true);
        if (feature3Pos + 500 > scrollPos) setShowFeature3(false);
    }

    useLayoutEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <section className="bg-mainGreen w-full min-h-screen px-4 grid md:place-items-center py-32 relative" id='about_me'>
            <div ref={containerRef} className={`bg-mainBlack lg:scale-100 2xl:scale-110 w-full md:w-[700px] md:h-auto h-[calc(100%-6rem)] md:grid grid-cols-[auto_1fr] shadow-md shadow-gray-700 rounded-md relative my-transition ${showContainer ? 'opacity-100 top-0' : 'opacity-0 top-20'}`}>
                <div className={`w-[150px] md:w-[200px] h-[150px] md:h-auto mx-auto md:mx-0 bg-[url('/src/Images/my_pic.jpg')] bg-cover bg-right md:bg-none rounded-full md:rounded-none relative bottom-20 md:static md:bottom-0`}>
                    <img src={myPic} alt='' className='w-full hidden md:block'/>
                </div>
                <div className='py-8 px-4 md:px-10 relative bottom-24 md:bottom-0 text-center md:text-left w-full'>
                    <h2 ref={headRef} className={`text-2xl font-poppins font-bold text-mainGreen mb-1 relative my-transition ${showHead ? 'opacity-100 top-0' : 'opacity-0 top-10'}`}>About me</h2>
                    <p ref={paraRef} className={`text-white md:text-sm font-poppins font-thin my-transition relative ${showPara ? 'opacity-100 top-0' : 'opacity-0 top-10'}`}>
                        My name is Zohaib Khan, I am a self taught frontend developer based in Lahore, PK.
                        I have experience of working on multiple projects. Passionate, hardworking and open to opportunities. My specialty includes building websites in React JS along with many other technologies. As a developer i love solving problems and always eager to learn more.
                    </p>
                    <h5 ref={numberRef} className={`flex items-center text-white font-poppins mt-4 mb-2 font-light my-transition relative ${showNumber ? 'opacity-100 top-0' : 'opacity-0 top-10'}`}>
                        <BsTelephone className='mr-2 text-mainGreen'/> +92-322-3947372
                    </h5>
                    <h5 ref={emailRef} className={`flex items-center text-white font-poppins font-light my-transition relative ${showEmail ? 'opacity-100 top-0' : 'opacity-0 top-10'}`}>
                        <HiOutlineMail className='mr-2 text-lg text-mainGreen'/> dev.zohaib.work@gmail.com
                    </h5>
                    <div ref={interestRef} className={`my-transition relative ${showInterest ? 'opacity-100 top-0' : 'opacity-0 top-10'}`}>
                        <h3  className='text-xl font-bold font-poppins text-white mt-8 mb-2 text-left'>Interests</h3>
                        <div className='flex items-start flex-wrap'>
                            <h4 className='px-4 py-[2px] font-poppins text-black bg-mainGreen rounded-full mr-2 mb-2'>Music</h4>
                            <h4  className='px-4 py-[2px] font-poppins text-black bg-mainGreen rounded-full mr-2 mb-2'>Gaming</h4>
                            <h4  className='px-4 py-[2px] font-poppins text-black bg-mainGreen rounded-full mr-2 mb-2'>Cyber Security</h4>
                            <h4  className='px-4 py-[2px] font-poppins text-black bg-mainGreen rounded-full mr-2 mb-2'>Art</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-8 md:mt-32 2xl:scale-110 lg:scale-100 w-full md:w-[700px]'>
                <h2 ref={head2Ref} className={`text-4xl font-poppins font-bold text-center mb-8 w-full my-transition relative ${showHead2 ? 'opacity-100 top-0' : 'opacity-0 top-24'}`}>My Websites are</h2>
                <div className='grid md:grid-cols-3 gap-4 w-full'>
                    <div ref={feature1Ref} className={`bg-mainBlack text-white flex flex-col items-center rounded-md shadow-md shadow-mainBlack p-2 md:p-8 hover:-translate-y-2 hover:scale-105 hover:shadow-lg hover:shadow-green-800 cursor-pointer my-transition relative ${showFeature1 ? 'opacity-100 top-0' : 'opacity-0 top-24'}`}>
                        <MdDevices className='text-8xl mb-4 text-mainGreen'/>
                        <h3 className='text-xl font-semibold font-poppins mb-4'>Responsive</h3>
                        <p className='text-sm font-poppins font-thin text-center'>My layouts work on all devices desktop, mobile or tablet</p>
                    </div>
                    <div ref={feature2Ref} className={`bg-mainBlack text-white flex flex-col items-center rounded-md shadow-md shadow-mainBlack p-8 hover:-translate-y-2 hover:scale-105 hover:shadow-lg hover:shadow-green-800 cursor-pointer my-transition relative ${showFeature2 ? 'opacity-100 top-0' : 'opacity-0 top-24'}`}>
                        <VscRocket className='text-8xl mb-4 text-mainGreen'/>
                        <h3 className='text-xl font-semibold font-poppins mb-4'>Fast</h3>
                        <p className='text-sm font-poppins font-thin text-center'>My Code is fast and well optimized</p>
                    </div>
                    <div ref={feature3Ref} className={`bg-mainBlack text-white flex flex-col items-center rounded-md shadow-md shadow-mainBlack p-8 hover:-translate-y-2 hover:scale-105 hover:shadow-lg hover:shadow-green-800 cursor-pointer my-transition relative ${showFeature3 ? 'opacity-100 top-0' : 'opacity-0 top-24'}`}>
                        <GoBrowser className='text-8xl mb-4 text-mainGreen'/>
                        <h3 className='text-xl font-semibold font-poppins mb-4 text-center'>Cross Browser Compatible</h3>
                        <p className='text-sm font-poppins font-thin text-center'>My websites can run on almost every browser</p>
                    </div>
                </div>
            </div>
        </section>
    )
}