import { Route, Routes } from 'react-router-dom'
import { projectRoutes } from '../../router'
import Body from '../Body'
function Content() {
    return (
        <div className="Content">
            <Routes>
                <Route path="/" element={<Body />} />
                {projectRoutes.map((route, index) => {
                    const Element = route.component
                    return <Route path={route.path} key={index} element={<Element />} />
                })}
            </Routes>
        </div>
    )
}

export default Content
