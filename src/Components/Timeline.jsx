import timelineElements from "./assets/timelineElements";
import schoolIcon from "./assets/school.svg";
import workIcon from "./assets/work.svg";

export default function Timeline({ defaultColor }) {
  return (
    <div className="resume-all">
        
    <div className="resume">
    <h1 class="resume-title">Education & Experience</h1>
      {timelineElements.map((element) => {
        const colors = [
          "bg-red-500",
          "bg-blue-500",
          "bg-yellow-500",
          "bg-purple-500",
          "bg-orange-500",
        ];

        const color = defaultColor || `bg-${element.color}-500`;

        return (
            
          <div key={element.id} className="flex m-4 relative">
            
            <div className="hidden items-start w-44 pt-0.5 relative sm:flex">
              <div className="w-4/5 text-gray-500">{element.date}</div>
              <div
                className={`${color} w-px h-full translate-x-5 translate-y-10 opacity-30`}
              ></div>
              <img
                src={element.icon === "school" ? schoolIcon : workIcon}
                alt="icon"
                className={`${color} w-10 p-1 rounded-lg z-2`}
              />
              <div
                className={`${color} h-px w-8 translate-y-5 opacity-30`}
              ></div>
            </div>
            <div id="timeline-card" className="border border-gray-600 rounded-lg px-8 py-4  w-full text-center z-1 sm:w-96">
              <div className="text-xl font-medium">{element.title}</div>
              <div id="university" className=" mb-6 sm:mb-8 sm:text-s">
                {element.location}
                <span className="sm:hidden">| {element.date}</span>
              </div>
              <div id="desc" className="mb-4 text-left">{element.description}</div>
              <div className="flex flex-wrap mb-6 justify-center">
                {element.tech.map((tech, index) => {
                  return (
                    <span
                      key={index}
                      className=" "
                    >
                      
                    </span>
                  );
                })}
              </div>
              <img
                src={element.icon === "school" ? schoolIcon : workIcon}
                alt="icon"
                className={`${color} w-8 p-1 rounded-lg z-2 absolute left-4 top-4 sm:hidden`}
              />
              
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
}