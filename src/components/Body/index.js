import React from 'react'
import { projectRoutes } from '../../router'
import { Link } from 'react-router-dom'
import './Body.scss'

function Body() {
    return (
        <div className="Body">
            {projectRoutes.map((item, index) => {
                return (
                    <div key={index} className="BodyLink">
                        <Link to={item.path}>
                            <h3>{item.day}</h3>
                            <p>{item.name}</p>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Body
