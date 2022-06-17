import { useEffect, useState } from 'react'

import './Day-5.scss'

function Day5({ docTitle, depCom }) {
    useEffect(() => {
        document.title = `${docTitle}`
        return () => {
            document.title = `50 Projects In 50 Days Challenge`
        }
    }, [depCom])

    const [percent, setPercent] = useState(1)

    useEffect(() => {
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
