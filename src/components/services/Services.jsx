import "./services.scss"
import {motion} from "framer-motion";

const variants={
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,

        }
    }
}
const Services=()=>{
    return(
        <motion.div className="services" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textContainer" variants={variants}>
                <p>YOUR SUCCESS IS MY <br />
                PASSION
                </p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1><motion.b whileHover={{color:"orange"}}>Meet</motion.b> Your </h1>
                </div>
                <div className="title">
                    
                    <h1><motion.b whileHover={{color:"orange"}}>Career</motion.b> Captain </h1>
                    <button>What I Do?</button>
                </div>
                
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover=
                {{background:"lightgray",color:"black"}}>
                 <h3>Communication Skills Enhancement</h3>
                 <p> Strong communication allows us to express ourselves clearly, listen attentively to others, and build positive relationships.  Whether its collaborating with colleagues, negotiating a deal,  refined communication is key to success.  By enhancing these skills, we can navigate complex situations,  and achieve our goals.</p> 
                 {/* <button>Go</button>   */}
                </motion.div>
                <motion.div className="box" whileHover=
                {{background:"lightgray",color:"black"}}>
                 <h3>Workplace Etiquittes</h3>
                 <p>Workplace etiquette is like the unspoken language that keeps everything running smoothly. It fosters a respectful and professional environment where everyone feels comfortable contributing their best work.This positive atmosphere leads to better collaboration,  and ultimately, a more successful workplace for everyone.</p> 
                 {/* <button>Go</button>   */}
                </motion.div>
                <motion.div className="box" whileHover=
                {{background:"lightgray",color:"black"}}>
                 <h3>Personality Development</h3>
                 <p>Personality development is like investing in your own happiness and success. Its a journey of self-discovery that helps you understand your strengths and weaknesses, build confidence, and cultivate positive traits. This translates into stronger relationships, both personal and professional.</p> 
                 {/* <button>Go</button>   */}
                </motion.div>
                <motion.div className="box" whileHover=
                {{background:"lightgray",color:"black"}}>
                 <h3>GDPI Prepration</h3>
                 <p>GDPI preparation acts as a launchpad for your dream B-school.  These Group Discussions and Personal Interviews are your chance to stand out from a pool of qualified candidates.  By honing your communication skills, critical thinking, and teamwork abilities in GDs, you showcase your potential to thrive in collaborative environments.</p> 
                 {/* <button>Go</button>   */}
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
export default Services