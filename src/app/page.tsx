import Image from "next/image";
import profilepicture from "../../public/profilepicture.webp"

export default function Home() {
  return (
            
           <div id="mainpage">
                <div id="image1">
                  <Image src={profilepicture} alt="profilepicture" />
                </div>

                <div id="paragraph1">
                  <p>Hello! I am Umm E Attiya, a passionate and dedicated web developer focused on creating user-friendly, responsive websites that bring ideas to life. With a background in HTML, CSS, JavaScript, and frameworks like Next.js and Tailwind CSS, I specialize in building engaging web experiences. Each project is an opportunity to learn and refine my skills, blending functionality with clean design. Please explore my work, where I strive to combine creativity and technical expertise to deliver solutions that make a lasting impact. Lets connect to collaborate on exciting new projects!

</p>
                </div>
           </div>
  );
}
