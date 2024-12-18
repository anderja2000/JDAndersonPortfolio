import React from 'react';
import { motion } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaReact, FaJs, FaCss3Alt, FaHtml5, FaGitAlt, FaGithub, FaDocker } from "react-icons/fa";
import { TbBrandCSharp, TbSql } from "react-icons/tb";
import { AiOutlineDotNet } from "react-icons/ai";
import { VscAzure } from "react-icons/vsc";
import { RiTailwindCssFill } from "react-icons/ri";

// Define an array of logos using React icons
const logos = [
    { icon: <FaReact className='carousel-icon' size={80} id="react-logo" />, alt: 'React' },
    { icon: <TbBrandCSharp className='carousel-icon' size={80} id='csharp-logo' />, alt: 'C#' },
    { icon: <AiOutlineDotNet className='carousel-icon' size={80} id='dotnet-logo' />, alt: '.NET' },
    { icon: <FaJs size={80} className='carousel-icon' id='js-logo' />, alt: 'JavaScript' },
    { icon: <TbSql className='carousel-icon' size={80} id='sql-logo' />, alt: 'SQL' },
    { icon: <FaCss3Alt className='carousel-icon' size={80} id='css-logo' />, alt: 'CSS' },
    { icon: <FaDocker className='carousel-icon' size={80} id='docker-logo' />, alt: 'Docker' },
    { icon: <VscAzure className='carousel-icon' size={80} id='azure-logo' />, alt: 'Azure' },
    { icon: <FaHtml5 className='carousel-icon' size={80} id='html-logo' />, alt: 'HTML' },
    { icon: <RiTailwindCssFill className='carousel-icon' size={80} id='tailwind-logo' />, alt: 'Tailwind CSS' },
    { icon: <FaGitAlt className='carousel-icon' size={80} id='git-logo' />, alt: 'Git' },
    { icon: <FaGithub className='carousel-icon' size={80} id='github-logo' />, alt: 'GitHub' },
];

export default function SkillsCarousel() {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    // Define animation variants for sliding effect
    const itemVariants = {
        hidden: { opacity: 0, x: -50 }, // Start off-screen to the left
        visible: { opacity: 1, x: 0 },   // Slide into view
        exit: { opacity: 0, x: 50 }      // Slide out to the right
    };

    return (
        <motion.section
            id='techStack'
            initial={{ y: 25, opacity: 0 }} // Start slightly below and transparent
            animate={{ y: 0, opacity: 1 }} // Slide up to original position and become visible
            transition={{ duration: 0.5, delay: 2 }} // 
        >
            <h3 >My Skills</h3>
            <div className="skills-carousel-wrapper">
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition='transform 0.5s ease-in-out'
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
                    dotListClass='custom-dot-list-style'
                    itemClass='carousel-item-padding-40-px'
                >
                    {/* Map over logos and wrap each in a motion.div */}
                    {logos.map((logo, index) => (
                        <motion.div
                            key={index}
                            className='skill-logo'
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.5 }} // Control the timing of the animation
                        >
                            {logo.icon}
                            <span>{logo.alt}</span> {/* Optional label for each icon */}
                        </motion.div>
                    ))}
                </Carousel>
            </div>
        </motion.section>
    );
}
