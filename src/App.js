import { BrowserRouter as Router } from 'react-router-dom'
import useViewport from './useViewPort'
import Home from './pages/Home'
import Mobile from './pages/Mobile'
import { Fragment, useEffect, useState, createContext } from 'react'
// import { projectRoutes } from './router'

export const TitleContext = createContext()

function App() {
    const viewPort = useViewport()
    const isTabletAndMobile = viewPort.width <= 960
    const [docTitle, setDocTitle] = useState('50 Projects In 50 Days Challenge')

    useEffect(() => {
        document.title = docTitle
    })

    if (isTabletAndMobile) {
        return (
            <Fragment>
                <Mobile />
            </Fragment>
        )
    } else {
        return (
            <TitleContext.Provider value={docTitle}>
                <div className="App">
                    <Router>
                        <Home />
                    </Router>
                </div>
            </TitleContext.Provider>
        )
    }
}

export default App
