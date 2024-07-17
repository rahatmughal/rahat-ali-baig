// import React from 'react';
// import 'aos/dist/aos.css';

// const About = () => {
//     return (
//         <>
//             <h2 className='text-center text-white/10 font-semibold 2xl:text-[200px] xl:text-[160px] lg:text-[120px] md:text-[100px] text-[80px] relative py-20' data-aos='zoom-in-up'>About Us</h2>

//             <div className='w-full min-h-screen flex items-center lg:flex-row flex-col-reverse justify-center gap-6'>
//                 <div className='p-20 flex flex-col justify-center w-1/2'>
//                     <div className="col-lg-5 col-md-5 col-sm-12 d-flex justify-content-center align-items-center py-5">
//                         <div className="img-box">
//                             <img src="imgs/about.png" alt="" />
//                         </div>
//                     </div>
//                 </div>

//                 <div className='p-20 flex flex-col justify-center w-1/2'>
//                     {/* Additional content can go here */}
//                 </div>
//             </div>

//         </>
//     );
// };

// export default About;

import React from 'react';
import { aboutImg } from '../../public';
import TypingBox from './TypingBox';

const About: React.FC = () => {
    return (
        <>
            <div className='w-full text-center flex flex-col gap-4 items-center' data-aos='zoom-in-up'>
                <h2 className='text-white/10 font-semibold 2xl:text-[200px] xl:text-[160px] lg:text-[120px] md:text-[100px] text-[80px] ' data-aos='zoom-in-up'>About Us</h2>
                <TypingBox textToType="Hi. I'm a Full Stack Developer." />
            </div>

            <div className='w-full px-20 mb-10 flex items-center md:flex-row flex-col-reverse justify-center gap-6'>
                {/*  */}
                <div className='md:w-1/2 w-full py-20'>
                    {/* img-box */}
                    <div className="w-full h-full flex items-center py-5 relative">
                        <div className="w-80 h-[500px] border-[3px] rounded-tl-[40px] translate-x-[0.5rem] translate-y-[0.5rem] rounded-br-[40px] border-[#fcb63485] " />
                        <div
                            className="w-80 h-[500px] rounded-tl-[40px] rounded-br-[40px] absolute translate-x-[6rem] translate-y-[6rem]"
                            style={{
                                background: 'linear-gradient(-60deg, #fcb634, black 50%)',
                            }}
                        />
                        <div className="w-80 h-[500px] bg-black rounded-tl-[40px] rounded-br-[40px] absolute translate-x-[4.5rem] translate-y-[4.3rem]" />

                        <img
                            src={aboutImg}
                            alt="About"
                            className="absolute top-0 left-0 w-80 h-[500px] rounded-tl-[40px] rounded-br-[40px] border-b-4 border-r-4 border-black transform translate-x-[3rem] translate-y-[4rem]"
                        />
                    </div>
                </div>

                <div className="w-full flex-grow px-4">

                    <h2 className="text-4xl font-semibold pt-8">
                        My Journey
                    </h2>
                    <p className="text-lg mt-4">
                        I started my career as a graphics designer in the summer of 2020, creating basic logos for local businesses.
                        Over time, I mastered the tools required for logo design, gaining two years of experience with Adobe Illustrator.
                        Now, I've transitioned into web development, building multiple web pages with HTML, CSS, and JavaScript.
                        I have also gained significant experience in creating responsive websites with WordPress, working with numerous clients.
                        My next goal is to offer full website creation services using code, but for now, I specialize in front-end development.
                    </p>
                </div>
            </div>

        </>
    );
};

export default About;
