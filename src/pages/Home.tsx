import { AboutSection } from "../components/AboutSection"
import { ContactSection } from "../components/ContactSection"
import FooterSection from "../components/FooterSection"
import { HeroSection } from "../components/HeroSection"
import Navbar from "../components/Navbar"
import { ProjectSection } from "../components/ProjectsSection"
import { SkillSection } from "../components/SkillSection"
import { StarBackground } from "../components/StarBackground"

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
            {/* <ThemeToggle/> */}

            {/* Background Effects */}
            <StarBackground/>

            {/* Navbar */}
            <Navbar/>

            {/* Main Content */}
            <main>
                <HeroSection/>
                <AboutSection/>
                <SkillSection/>
                <ProjectSection/>
                <ContactSection/>
                <FooterSection/>
            </main>


            {/* Footer */}
        </div>
    )
}