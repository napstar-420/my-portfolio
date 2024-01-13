import { FaGithub } from 'react-icons/fa';

function ComingSoon() {
  return (
    <div className='h-screen w-full overflow-hidden relative flex'>
      <div className='absolute left-0 w-full h-full grid place-items-center'>
        <div className='text-center w-full'>
          <h1 className='text-mainGreen font-black text-2xl sm:text-3xl md:text-4xl mix-blend-difference font-poppins mb-2'>
            Hi!, <br /> i am rebuilding my portfolio, <br /> it will be awesome
            😀
          </h1>
          <a
            href='https://github.com/napstar-420'
            className='text-2xl mt-10 bg-white text-gray-700 w-max mx-auto flex items-center px-4 py-1 rounded gap-2 font-medium'
          >
            Github <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
