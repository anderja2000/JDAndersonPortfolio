import React, { useContext } from 'react'
import { FaChevronDown } from 'react-icons/fa';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import '../components/smallComponents/SkillsCarousel.jsx';
import SkillsCarousel from '../components/smallComponents/SkillsCarousel.jsx';
import '../components/smallComponents/ScrollIndicator.jsx'
import ScrollIndicator from '../components/smallComponents/ScrollIndicator.jsx';
import { ThemeContext } from '../context/ThemeContext.jsx';
export default function HomePage() {

    const {theme} = useContext(ThemeContext);
    const roles = [
        "Software Engineer",
        "Full Stack Developer",
        ".NET Specialist",
        "React Developer",
        "UI/UX Enthusiast",
        "Problem Solver"
    ];

    return (
        <>
            <main className="home">

                <section className="home-col col1">


                    <motion.h1
                        initial={{ x: -300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >JD Anderson</motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <ReactTyped 
                            strings={roles}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                            className={`typed-roles typed-roles-${theme}`}
                        />

                    </motion.div>



                    <SkillsCarousel />


                </section>

                <section className="home-col col2">
                    <DotLottieReact
                        src="https://lottie.host/5f142bcd-573d-4696-9a5b-3d7952590c0a/DGr5BX3UWD.lottie"
                        loop
                        autoplay
                    />
                </section>
            </main >

            <ScrollIndicator />
        </>
    )
}
