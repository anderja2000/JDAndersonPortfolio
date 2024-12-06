

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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

const logos = [
    { src: reactLogo, alt: 'React' },
    { src: csharpLogo, alt: 'C#' },
    { src: dotnetLogo, alt: '.NET' },
    { src: jsLogo, alt: 'JavaScript' },
    { src: sqlLogo, alt: 'SQL' },
    { src: cssLogo, alt: 'CSS' },
    { src: dockerLogo, alt: 'Docker' },
    { src: azureLogo, alt: 'Azure' },
    { src: htmlLogo, alt: 'HTML' },
    { src: tailwindLogo, alt: 'Tailwind' },
    { src: gitLogo, alt: 'Git' },
    { src: githubLogo, alt: 'GitHub' },
];

export default function SkillsCarousel() {
    
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
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

    return (
        <div className="skills-carousel-wrapper">
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={10000} 
                keyBoardControl={true}
                customTransition='all .5'
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={['tablet', 'mobile']}
                dotListClass='custom-dot-list-style'
                itemClass='carousel-item-padding-40-px'
            >
                {logos.map((logo, index) => ( 
                    <img key={index} src={logo.src} alt={logo.alt} className='skill-logo' />
                ))}
            </Carousel>
        </div>
    );
}