import Image from "next/image";
import project1 from "../../../public/project1.png"
import project2 from "../../../public/project2.png"
import project3 from "../../../public/project3.png"


const Project = () =>{
    return(
        <div>
            <div id="projectheading">
                <h1>My Work</h1>
            </div>
            <div id="mainimage">
                <div id="image3">
                    <Image src={project1} alt="project1" />
                    <p>Project 1</p> 
                    <a href="https://milestone3-bice-iota.vercel.app/">Click Here</a>
              </div>
                <div id="image4">
                  <Image src={project2} alt="project2" />
                  <p>Project 2</p>
                  <a href="https://milestone5-nu-black.vercel.app/">Click Here</a>
                </div>
                <div id="image5">
                    <Image src={project3} alt="project3" />
                    <p>Project 3</p>
                    <a href="https://restaurant-website-six-ochre.vercel.app/ ">Click Here</a>

                </div>
            </div>
        </div>
    )
}

export default Project;