import React from 'react';
import { projectRoutes } from '../../router';
import { Link } from 'react-router-dom';

import './Body.scss';

function Body() {
    return (
        <div className="Body">
            {projectRoutes.map((item, index) => (
                <div key={index}>
                    <Link to={item.path} className="BodyLink">
                        <h3>{item.day}</h3>
                        <p>{item.name}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Body;
