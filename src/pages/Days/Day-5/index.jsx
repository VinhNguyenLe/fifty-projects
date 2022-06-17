import React from 'react'
import { TitleContext } from '../../../App'
import { projectRoutes as project } from '../../../router'

import './Day-5.scss'

function Day5() {
    const titleDoc = React.useContext(TitleContext)

    React.useEffect(() => {
        document.title = `${project[4].day} - ${project[4].name}`
        return () => {
            document.title = titleDoc
        }
    }, [])

    const [percent, setPercent] = React.useState(1)

    React.useEffect(() => {
        const timer = setInterval(() => {
            setPercent((prev) => prev + 1)
        }, 40)
        if (percent > 99) {
            clearInterval(timer)
        }

        return () => clearInterval(timer)
    }, [percent])

    const scale = (num, in_min, in_max, out_min, out_max) => {
        return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    }

    let blur = 20 - percent / 5
    return (
        <div className="Day5">
            <div className="bg" style={{ filter: `blur(${blur}px)` }}></div>
            <div className="percent" style={{ opacity: scale(percent, 0, 100, 1, 0) }}>
                {percent}%
            </div>
        </div>
    )
}

export default Day5
