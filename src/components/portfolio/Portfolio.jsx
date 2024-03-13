import { useRef } from "react";
import "./portfolio.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion";

const items=[
    {
        id:1,
        title:"Dinesh Choudhary",
        img:"https://imgs.search.brave.com/nOD6kqgjIW1_zEVt86HHWg4UdH0dQ0FKhPchB0fN8EA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdC5k/ZXBvc2l0cGhvdG9z/LmNvbS8xMDEwNTU1/LzM4MzAvaS80NTAv/ZGVwb3NpdHBob3Rv/c18zODMwNzQ2Ny1z/dG9jay1waG90by10/ZXN0aW1vbmlhbC5q/cGc",
        desc:"Thankyou sooo much Shubhangi ma'am for delivering such informative and engaging lectures on Effective Communication. We learned something new in Every lecture. Your passion for teaching and expertise in the subject made it easy for use to understand the subject."

    },
    {
        id:2,
        title:"Rushikesh Kalane",
        img:"https://imgs.search.brave.com/nOD6kqgjIW1_zEVt86HHWg4UdH0dQ0FKhPchB0fN8EA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdC5k/ZXBvc2l0cGhvdG9z/LmNvbS8xMDEwNTU1/LzM4MzAvaS80NTAv/ZGVwb3NpdHBob3Rv/c18zODMwNzQ2Ny1z/dG9jay1waG90by10/ZXN0aW1vbmlhbC5q/cGc",
        desc:"Hi Ma'am. I am Rushikesh from PGD-DAC lab-1 and I want to express my heartfelt gratitude for the incredible impact you have had on my communication skills. Attending your EC sessions brought a huge transformation in my communication skills and perspective for the upcoming interviews."

    },
    {
        id:3,
        title:"Jasleen",
        img:"https://imgs.search.brave.com/nOD6kqgjIW1_zEVt86HHWg4UdH0dQ0FKhPchB0fN8EA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdC5k/ZXBvc2l0cGhvdG9z/LmNvbS8xMDEwNTU1/LzM4MzAvaS80NTAv/ZGVwb3NpdHBob3Rv/c18zODMwNzQ2Ny1z/dG9jay1waG90by10/ZXN0aW1vbmlhbC5q/cGc",
        desc:"Greetings ma'am. I am glad to tell that I got my visa for canada. I would like to Thank you for providing me the guidance and instilled me with so much confidence because of which i got such good results in my IELTS examination. Thankyou so much ma'am."

    },
    {
        id:4,
        title:"Diotima Bose",
        img:"https://imgs.search.brave.com/nOD6kqgjIW1_zEVt86HHWg4UdH0dQ0FKhPchB0fN8EA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdC5k/ZXBvc2l0cGhvdG9z/LmNvbS8xMDEwNTU1/LzM4MzAvaS80NTAv/ZGVwb3NpdHBob3Rv/c18zODMwNzQ2Ny1z/dG9jay1waG90by10/ZXN0aW1vbmlhbC5q/cGc",
        desc:"Thankyou soo much ma'am for guiding me since the begining of my career journey where it all started with an IELTS examination. I recieved an offer from UNH,Durham,USA. Thankyou so much for your guidance."

    }

]

const Single = ({item}) =>{

    const ref= useRef()

    const {scrollYProgress} = useScroll({
        target:ref, 
        //offset:["start start ", "end end"]
    })

    const y = useTransform(scrollYProgress,[0,1],[-300,300])

    return (
        <section >
           <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                 <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{y}}>
                <h2 >{item.title}</h2>
                <p>{item.desc}</p>
            </motion.div>
            </div>
            </div> 
        </section>
    )
}

const Portfolio = () => {

    const ref= useRef()

    const {scrollYProgress} = useScroll({
        target:ref, offset:["end end","start start"],
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness:100,
        damping:30,

    })



    return(
        <div className="portfolio" ref={ref}> 
        <div className="progress">
            <h1>Client Spotlight</h1>
            <motion.div style={{scaleX}} className="progressBar">

            </motion.div>
        </div>
        {items.map(item=>(
           <Single item={item} key={item.id}/> 
        ))}
        </div>
    )
}
export default Portfolio;



