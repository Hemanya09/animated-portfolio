import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss"
import {motion} from "framer-motion";

// import Logo from "../../assets/CareerConnect.svg";
const Navbar = () => {
    return(
        <div className="navbar">
            
            <Sidebar/>
            <div className="wrapper">
                <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}}>
                  <a href="https://career-connect-virid.vercel.app/"> Career Connect</a> 
                    </motion.span>
                <div className="social">
                    <a href="#"><img src="/facebook.png" alt=""/></a>
                    <a href="https://www.instagram.com/careerconnectofficial?igsh=MnVrdXZtNWE3OGhu"><img src="/instagram.png" alt=""/></a>
                    <a href="#"><img src="/twitter.png" alt=""/></a>
                    <a href="#"><img src="/LinkedIn.png" alt=""/></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar

