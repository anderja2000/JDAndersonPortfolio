import React from "react";
import  '../styles/SkillsPage.css';
import "./smallComponents/SkillsCarousel";
import SkillsCarousel from "./smallComponents/SkillsCarousel";
export default function SkillsPage() {
    return ( 
        <main className="skills">
            <SkillsCarousel />
        </main>
    )

}