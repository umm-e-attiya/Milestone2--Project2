import Image from "next/image";
import profilepicture from "../../../public/profilepicture.webp"



const About = () =>{

    return(
            <div id="mainabout">
                <div id="paragraph2">
                <p>Hello! I am Umm E Attiya, a dedicated first-year student in Intermediate in Computer Science (ICS). My journey in technology began with a curiosity about how the web works, which gradually turned into a passion for coding and building projects. I am particularly interested in front-end development, where I love bringing creative designs to life.</p>

                <p id="a">Currently, I'm expanding my skills in HTML, CSS, and JavaScript, and I'm learning frameworks like Next.js and Tailwind CSS to create responsive, visually appealing websites. My hands-on experience also includes managing a balance between academic studies and an internship, where I am applying what I learn directly in real-world projects.</p>

                <p id="b">I am committed to growing as a developer and constantly challenging myself to learn new skills. With each project, I strive to create a better user experience and design. I am always open to collaboration and look forward to connecting with others who share a passion for tech and innovation.</p>
                </div>

                <div id="image2">
                    <Image src={profilepicture} alt="profilepicture"/>
                </div>
            </div>
    )
}
export default About;

