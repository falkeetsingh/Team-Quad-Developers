import React from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import plantSvg from '../assets/undraw_environment_iaus.svg';
import impact from '../assets/undraw_world_re_768g.svg'
const Home = () => {
  return (
    <>
    <motion.div 
        className="heroSection"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          GREENTRACE
        </motion.h1>
        <div className="subHead">
          <p>Empowering Community to Combat Climate Change</p>
        </div>
        <motion.div
          className="start-monitoring"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>Visualize, Analyse and Transform with GREENTRACE</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Link to={"/signUp"}>Start Monitoring</Link>
          </motion.button>
        </motion.div>
    </motion.div>
    <div className="vision" id='Vision'>
        <div className="plant-img">
          <img src={plantSvg} alt='Graphics'/>
        </div>
        <div className='container-div'>
          <h1>VISION</h1>
          <p>Our goal is to spearhead a paradigm change that will propel the world toward a more resilient and sustainable future, fueled by the amazing potential of algae. We work to fully realize the potential of algae, from carbon sequestration and renewable energy production to sustainable agriculture and beyond, via innovation, cooperation, and education. Through motivating people, organizations, and decision-makers to accept algae as a fundamental component of sustainability, we hope to establish a future in which technology and environment coexist peacefully, guaranteeing a healthy planet for future generations.
          </p>
        </div>
      </div>
      <div className="impact" id='Impact'>
        <div className='container-div'>
          <h1>IMPACT</h1>
          <p>Our initiative makes use of algae's amazing potential to fight climate change and promote environmental sustainability to aggressively minimize greenhouse gas emissions and prevent environmental damage. We also aid in efforts to reduce carbon emissions by minimizing waste and maximizing resource efficiency through the promotion of a circular economy and sustainable agricultural practices. By increasing knowledge and motivating action, our outreach and education programs involve communities in the shift to a more environmentally friendly future. By working together, we can use algae's capacity to improve the earth in long-term ways that will lead to a more resilient and sustainable world.</p>
        </div>
        <div className="impact-img">
          <img src={impact} alt='Graphics'/>
        </div>
      </div>
    </>
  )
}

export default Home
