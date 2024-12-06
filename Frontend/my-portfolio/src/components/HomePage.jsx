import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';
import {ReactTyped} from 'react-typed';

export default function HomePage() {
    const roles = [
        "Software Engineer",
        "Full Stack Developer",
        ".NET Specialist",
        "React Developer",
        "UI/UX Enthusiast",
        "Problem Solver"
    ];

    return (
        <main className="home">

            <section className="home-col col1">


                <motion.h1
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >JD Anderson</motion.h1>

                <motion.div
                    initial = {{opacity: 0}}
                    animate = {{opacity: 1}}
                    transition={{delay:0.8, duration:0.5}}
                >
                    <ReactTyped
                        strings={roles}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                        className="typed-roles"
                    />

                </motion.div>
            </section>

            <section className="home-col col2">
                <DotLottieReact
                    src="https://lottie.host/5f142bcd-573d-4696-9a5b-3d7952590c0a/DGr5BX3UWD.lottie"
                    loop
                    autoplay
                />
            </section>
        </main >
    )
}
