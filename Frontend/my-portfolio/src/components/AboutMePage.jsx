import React from "react";
import AboutVideo from '../assets/About.mp4';





export default function AboutMePage() {
    return (

        <>
            <main className="about-me-page">
                <video autoPlay loop muted>
                    <source src={AboutVideo} type="video/mp4" />
                </video>
                <section className="content">
                    
                </section>
            </main>

           
        </>

    )
}