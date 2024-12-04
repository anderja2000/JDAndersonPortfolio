import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';

export default function HomePage() {
    return (
        <main className="home">

            <section className="home-col col1">


                <motion.h1
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >JD Anderson</motion.h1>

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
