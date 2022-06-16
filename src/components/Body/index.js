import React from 'react';
import { projectRoutes } from '../../router';
import { Link } from 'react-router-dom';
import './Body.scss';

console.log(projectRoutes[0].bg);
function Body() {
    return (
        <div className="Body">
            {projectRoutes.map((item, index) => {
                return (
                    <div key={index} className="BodyLink">
                        <Link to={item.path}>
                            {/* {item.bg && <img src="./image/day-1.png" alt="" />} */}
                            <h3>{item.day}</h3>
                            <p>{item.name}</p>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

//E:\Web\Project\ReactProject\fifty-projects\src\assets\images\day-1.png
export default Body;
