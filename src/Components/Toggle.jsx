import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
export const Toggle = ({ handleChange , isChecked }) => {
    return (
        <div className="contact-btn">
          <div className="btn">
          
          <MdOutlineLightMode onClick={handleChange} className='icon5' size={35} /> 
          <MdDarkMode onClick={handleChange} className='icon6' size={35} />
          </div>        
        </div>
    );
}