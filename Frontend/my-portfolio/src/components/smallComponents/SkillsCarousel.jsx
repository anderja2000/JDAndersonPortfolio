import reactLogo from '../../assets/react.png';
import csharpLogo from '../../assets/csharp.png';
import dotnetLogo from '../../assets/dotnet.png';
import jsLogo from '../../assets/js.png';
import sqlLogo from '../../assets/sql.png';
import cssLogo from '../../assets/css.png';
import dockerLogo from '../../assets/docker.png';
import azureLogo from '../../assets/azure.jpg';
import htmlLogo from '../../assets/html.png';
import tailwindLogo from '../../assets/tailwind.png';
import gitLogo from '../../assets/git.png';
import githubLogo from '../../assets/github.png';
import React from 'react';
import Slider from "react-slick";
import { motion } from 'framer-motion';

export default function SkillsCarousel() {
    const skills = [
        { img: reactLogo, name: "React" },
        { img: csharpLogo, name: "C#" },
        { img: dotnetLogo, name: ".NET" },
        { img: jsLogo, name: "JavaScript" },
        { img: sqlLogo, name: "SQL Server" },
        { img: cssLogo, name: "CSS3" },
        { img: dockerLogo, name: "Docker" },
        { img: azureLogo, name: "Azure" },
        { img: htmlLogo, name: "HTML5" },
        { img: tailwindLogo, name: "Tailwind" },
        { img: gitLogo, name: "Git" },
        { img: githubLogo, name: "GitHub" }
    ];



    // Settings for the carousel
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <motion.section
            className='skills-showcase'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.5 }}
        >
            <h2>My Skills</h2>
            <Slider {...settings}>
                {/* Map through skills array and render each skill in the carousel */}
                {skills.map((skill) => (
                    <div key={skill.name} className='skill-icon'>
                        <img src={skill.img} alt={skill.name} style={{ width: '40px', height: '40px' }} />
                        <span>{skill.name}</span>
                    </div>
                ))}
            </Slider>
        </motion.section>
    );

};