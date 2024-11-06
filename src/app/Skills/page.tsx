import Image from "next/image";
import html from "../../../public/html.png"
import css from "../../../public/css.png"
import javascript from "../../../public/Javascript.png"
import nextjs from "../../../public/nextjs.png"
import csstailwind from "../../../public/csstailwind.png"




const Skills = () =>{
    return(
             <div>
           <div id="mainskills">
                <h1>Skills</h1>
           </div>
          

            <div id="first" >
                
           <h1>Front End</h1>
         </div>
          <div id="imagesection1">
           <div id="image6">
              <Image src={html} alt="html-logo" />
              <h1>HTML</h1>
           
             
           </div>
            
           <div id="image7">
              <Image src={css} alt="css-logo" />
              <h1>CSS</h1>
             
             </div>
             <div id="image8">
              <Image src={javascript} alt="javascript-logo" />
              <h1>Javascript</h1>
            </div>
           </div>
             <div id="mainskills2">
                <h1>FrameWork</h1>
                </div>
             <div id="imagesection2">
                <div id="image9">
                 <Image src={nextjs} alt="nextjs" />
                 <h1>Nextjs</h1>
                </div>
               
                <div id="image10">
                 <Image src={csstailwind} alt="csstailwind" />
                 <h1>CSS Tailwind</h1>
                </div>
             </div>

             <div>

             </div>
           </div>
       
 )
}

export default Skills;