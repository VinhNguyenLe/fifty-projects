import { Route, Routes } from 'react-router-dom'
import { projectRoutes as project } from '../../router'
import Body from '../Body'

function Content() {
    return (
        <div className="Content">
            <Routes>
                <Route path="/" element={<Body />} />
                {project.map((route, index) => {
                    const Element = route.component
                    return (
                        <Route
                            path={route.path}
                            key={index}
                            element={<Element docTitle={`${route.day} - ${route.name}`} depCom={route.component} />}
                        />
                    )
                })}
            </Routes>
        </div>
    )
}

export default Content
