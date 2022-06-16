import { BrowserRouter as Router } from 'react-router-dom'
import useViewport from './useViewPort'
import Home from './pages/Home'
import Mobile from './pages/Mobile'
import { Fragment } from 'react'

function App() {
    const viewPort = useViewport()
    const isTabletAndMobile = viewPort.width <= 960

    if (isTabletAndMobile) {
        return (
            <Fragment>
                <Mobile />
            </Fragment>
        )
    } else {
        return (
            <div className="App">
                <Router>
                    <Home />
                </Router>
            </div>
        )
    }
}

export default App
