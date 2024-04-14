import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSwatchbook,faPenToSquare,faWrench,faScrewdriverWrench,faHandshake,faSheetPlastic} from '@fortawesome/free-solid-svg-icons'
// import { faInstalod } from '@fortawesome/free-brands-svg-icons';

const Farm = () => {
  return (
    <>
    <div className="farm-body " style={{ background: 'linear-gradient(to right, rgb(0,0,0),rgb(5,35,43))' }}>
        <div className="farm-head">
            <div className="farm-head-text">
                <h1>Explore Algae Innovation</h1>
                <p>Algae used like never before : A unique,commendable and sustaining solution  </p>
                <p>Harnessing the unique properties of carbon sequestration and wastewater treatment and leveraging their unparalleled adaptability.This innovative approach signifies a sustainable shift towards a greener, more resilient future, where algae stand as pillars of sustainability.</p>
            </div>
        </div>
        <div className="service">
            <h3>Service</h3>
            <div className="cards">
                <div className="plan farm-card">
                    <div className="icon-holder"><FontAwesomeIcon className="icon" icon={faSheetPlastic}/></div>
                    <h4>Planning</h4>
                    <hr></hr>
                    <p>From site assessment to strategic blueprinting, we design comprehensive plans tailored to maximize efficiency and sustainability</p>
                </div>
                <div className="design farm-card">
                    <div className="icon-holder"><FontAwesomeIcon className="icon" icon={faSwatchbook}/></div>
                    <h4>Designing</h4>
                    <hr></hr>
                    <p>Crafting cutting-edge layouts and systems to optimize space, resources, and productivity</p>
                </div>
                <div className="formulate farm-card">
                    <div className="icon-holder"><FontAwesomeIcon className="icon" icon={faPenToSquare}/></div>
                    <h4>Formulation</h4>
                    <hr></hr>
                    <p>Expertly crafting nutrient blends and growth mediums tailored to your algae species, ensuring optimal growth and productivity in your farm.</p>
                </div>
                <div className="installation farm-card">
                    <div className="icon-holder"> <FontAwesomeIcon className="icon" icon={faWrench}/></div>
                    <h4>Installation</h4>
                    <hr></hr>
                    <p>From equipment setup to system integration, we ensure a smooth transition from blueprint to reality for your algae farm.</p>
                </div>
                <div className="maintanence farm-card">
                    <div className="icon-holder"><FontAwesomeIcon className="icon" icon={faScrewdriverWrench}/></div>
                    <h4>Maintenance</h4>
                    <hr></hr>
                    <p>Proactive upkeep and monitoring to maximize yield and minimize downtime, ensuring your algae farm operates at peak performance.</p>
                </div>
                <div className="Trustability farm-card">
                    <div className="icon-holder"><FontAwesomeIcon className="icon" icon={faHandshake}/></div>
                    <h4>Trustability</h4>
                    <hr></hr>
                    <p>Building confidence through transparent processes and reliable support, ensuring peace of mind throughout. </p>
                </div>
            </div>
            
        </div>
    </div>
    
    </>
  )
}

export default Farm
