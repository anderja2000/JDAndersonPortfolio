import React from "react";
import AboutVideo from '../assets/About.mp4';
import headshot from '../assets/myPhoto.jpg';
import {motion} from "framer-motion";



export default function AboutMePage() {
    return (
        <>
            <main className="about-me-page">
                <video autoPlay loop muted>
                    <source src={AboutVideo} type="video/mp4" />
                </video>
                <motion.section className="content"
                    initial={{ opacity: 0, y: 75}}
                    animate={{ opacity: 1 , y: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                >
                    <section className="content-col">
                        <h2>About Me</h2>
                        <img id="headshot" src={headshot} alt="my photo" />
                    </section>
                    <section className="content-col">
                        <p>This is the second column of content.</p>
                    </section>
                </motion.section>
            </main>
        </>
    )
}
