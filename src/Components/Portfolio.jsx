import React from 'react'
import pro1 from '../images/pro1.png'
import pro2 from '../images/pro2.png'
import pro3 from '../images/pro3.png'
import { FiArrowUpRight } from "react-icons/fi";
const Portfolio = () => {
  return (
    <div>
      <div className="card-box">
      <div className="card-container">
      <div className="card-title">
        <h1>Portfolio</h1>
        <h2>Recent Projects</h2>
        </div>
        <div className="product-content">
            <div className="card">
           <img src={pro1} alt="pro" />
           <h3>Ahuse</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique</p>
           <h4>Demo <FiArrowUpRight size={25} /></h4>
            </div>

            <div className="card">
           <img src={pro2} alt="pro" />
           <h3>Ahuse</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique</p>
           <h4>Demo <FiArrowUpRight size={25} /></h4>
            </div>

            <div className="card">
           <img src={pro3} alt="pro" />
           <h3>Ahuse</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique</p>
           <h4>Demo <FiArrowUpRight size={25} /></h4>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Portfolio

