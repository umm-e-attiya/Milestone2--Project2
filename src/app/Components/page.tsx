import Link from "next/link";


const Navbar = () => {
    return(
        <div id="mainheading">
           <div id="heading">
             <h1>My Portfolio</h1>
           </div>
            <div>
                <nav>
                    <ul id="navbar">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/About">About US</Link></li>
                        <li><Link href="/Project">Project</Link></li>
                        <li><Link href="/Skills">Skills</Link></li>
                        <li><Link href="/Contact">Contact US</Link></li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}
export default Navbar;