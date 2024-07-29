import React from 'react'
import { IconType } from 'react-icons';
import { BiLogoJquery } from 'react-icons/bi';
import { FaBootstrap, FaReact } from 'react-icons/fa';
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from 'react-icons/ri';

interface JointProps {
    x: string;
    y: string;
}

interface EdgeProps {
    x: string;
    y: string;
    rotate: string;
}

interface CardProps {
    icon: IconType;
    title: string;
    description: string;
    x: string;
    y: string;
}

const Content = () => {
    const Joint = ({ x, y }: JointProps) => (
        <div className={`absolute ${x} ${y} left-10 w-5 h-5 rounded-full border-4 border-green-700`}>
            <div className='absolute top-0 left-0 w-full h-full rounded-full border-4 border-light-green ring' />
        </div>
    );

    const Edge = ({ x, y, rotate }: EdgeProps) => (
        <div className={`absolute lg:w-[300px] w-[200px] h-0.5 bg-light-green ${rotate} ${x} ${y}`} />

    );


    const SkillCard = ({ icon: Icon, title, description, x, y }: CardProps) => (
        <div className={`absolute z-30 ${y} ${x} w-fit h-fit group`}>
            <div className='relative w-fit h-fit group'>
                {/* Card Container */}
                <div className="relative rounded-2xl overflow-hidden p-0.5 pl-1 pb-1">
                    <div className='relative before:absolute before:content-normal before:bg-gradient-to-tr before:from-light-green before:to-gray-700 before:to-50% before:-top-1/2 before:w-[400px] before:h-[400px] before:-z-10 before:scale-125 before:rounded-2xl before:group-hover:rotate-180 before:transition-all duration-1000 cursor-pointer'>
                        <div className="relative rounded-2xl bg-black lg:w-[400px] w-[300px] p-5 pt-20 flex flex-col justify-center gap-3 overflow-hidden">
                            <div className='absolute bottom-0 -left-3 bg-light-green group-hover:bg-transparent  w-32 h-32 rounded-full z-0 blur-[140px]'></div>
                            <h2 className='font-semibold text-2xl'>{title}</h2>
                            <p className='opacity-60 leading-6 tracking-wider'>{description}</p>
                        </div>
                    </div>
                </div>

                {/* Icon Container */}
                <div className='absolute w-20 h-20 -top-10 left-5 bg-black rounded-full border-[3px] border-gray-700 group-hover:border-light-green/80 flex items-center justify-center'>
                    <Icon className='text-2xl opacity-60 group-hover:opacity-100' />
                </div>
            </div>
        </div>
    );


    return (
        <>
            <div className='w-1200 h-[600px] relative'>
                {/* HTML */}
                <>
                    <Joint x='left-10' y='top-1/2 -translate-y-1/2' />
                    <Edge rotate='rotate-[-20deg]' x='left-[50px]' y='top-[245px]' />
                    <Joint x='left-[340px]' y='top-[183px]' />
                    <Edge rotate='rotate-[-10deg]' x='left-[357px]' y='top-[165px]' />
                    <SkillCard
                        icon={IoLogoHtml5}
                        title={'HTML'}
                        description={'I starts my journey from HTML. I practice the basic structure of Web deleopment coding! I under the concept of semantic & non semantic tags'}
                        x='left-[600px]'
                        y='top-[120px]'
                    />
                </>

                {/* CSS */}
                <>
                    <Edge rotate='rotate-[30deg]' x='left-[900px]' y='top-[210px]' />
                    <Joint x='left-[1180px]' y='top-[280px]' />
                    <Edge rotate='rotate-[10deg]' x='left-[1195px]' y='top-[320px]' />
                    <SkillCard
                        icon={IoLogoCss3}
                        title={'CSS'}
                        description={'After get knowledge of web basic structure, I move towards CSS. Here I design my first Landing page of only Hero section. I do couple of practices here to master the CSS properties.'}
                        x='left-[1400px]'
                        y='top-[320px]'
                    />
                </>

                {/* JS */}
                <>
                    <Edge rotate='rotate-[5deg]' x='left-[1700px]' y='top-[480px]' />
                    <Joint x='left-[1998px]' y='top-[485px]' />
                    <Edge rotate='rotate-[-35deg]' x='left-[1989px]' y='top-[405px]' />
                    <SkillCard
                        icon={IoLogoJavascript}
                        title={'JS'}
                        description={'After mastering the basics, I began my career with JavaScript (JS), focusing on core ES6 concepts. I dedicated a month to understanding its fundamentals. My old portfolio, built with HTML, CSS, and JS, is a highlight...can see in project section!'}
                        x='left-[2250px]'
                        y='top-[200px]'
                    />
                </>

                {/* Bootstrap */}
                <>
                    <Edge rotate='rotate-[-45deg]' x='left-[2500px]' y='top-[240px]' />
                    <Joint x='left-[2750px]' y='top-[120px]' />
                    <Edge rotate='rotate-[15deg]' x='left-[2765px]' y='top-[170px]' />
                    <SkillCard
                        icon={FaBootstrap}
                        title={'Bootstrap'}
                        description={'I learned and practiced all Bootstrap components and classes, creating one of my best projects, BLACK-SHEEP, which can be seen in my projects section.'}
                        x='left-[3000px]'
                        y='top-[100px]'
                    />
                </>

                {/* JQuery */}
                <>
                    <Edge rotate='rotate-[45deg]' x='left-[3300px]' y='top-[350px]' />
                    <Joint x='left-[3555px]' y='top-[455px]' />
                    <Edge rotate='rotate-[15deg]' x='left-[3570px]' y='top-[505px]' />
                    <SkillCard
                        icon={BiLogoJquery}
                        title={'JQuery'}
                        description={'I mastered jQuery, utilizing it to enhance interactivity and streamline DOM manipulation in my projects. My project, BLACK-SHEEP, showcases also these skills and can be found in my projects section.'}
                        x='left-[3850px]'
                        y='top-[400px]'
                    />
                </>

                {/* Tailwinds */}
                <>
                    <Edge rotate='rotate-[-30deg]' x='left-[4200px]' y='top-[450px]' />
                    <Joint x='left-[4478px]' y='top-[360px]' />
                    <Edge rotate='rotate-[-10deg]' x='left-[4495px]' y='top-[345px]' />
                    <SkillCard
                        icon={RiTailwindCssFill}
                        title={'Tailwinds CSS'}
                        description={'After mastering the basics, I took a step towards becoming a modern Full Stack developer by diving into frameworks and libraries. I began with Tailwind CSS and created two initial projects: HooBank and Green Nursery.'}
                        x='left-[4780px]'
                        y='top-[200px]'
                    />
                </>
                
                 {/* Tailwinds */}
                 <>
                    <Edge rotate='rotate-[15deg]' x='left-[5100px]' y='top-[450px]' />
                    <Joint x='left-[5395px]' y='top-[482px]' />
                    <Edge rotate='rotate-[-60deg]' x='left-[5335px]' y='top-[352px]' />
                    <SkillCard
                        icon={FaReact}
                        title={'React JS'}
                        description={'After mastering the basics, I took a step towards becoming a modern Full Stack developer by diving into frameworks and libraries. I began with Tailwind CSS and created two initial projects: HooBank and Green Nursery.'}
                        x='left-[5555px]'
                        y='top-[100px]'
                    />
                </>
            </div>
        </>
    )
}

export default Content