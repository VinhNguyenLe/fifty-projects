import { useState, useEffect, useLayoutEffect } from 'react'
import './Day-2.scss'

function Day2({ docTitle, depCom }) {
    useEffect(() => {
        document.title = `${docTitle}`
        return () => {
            document.title = `50 Projects In 50 Days Challenge`
        }
    }, [depCom])

    const [progress, setProgress] = useState(0)
    const [width, setWidth] = useState(0)

    useLayoutEffect(() => {
        if (progress > 3) {
            setProgress(3)
        } else if (progress < 0) {
            setProgress(0)
            setWidth(0)
        }

        if (width == -1.4210854715202004e-14) {
            setWidth(0)
        }
    }, [progress])

    const handlePrev = () => {
        setProgress((prev) => prev - 1)
        setWidth(width - 100 / 3)
    }

    const handleNext = () => {
        setProgress((prev) => prev + 1)
        setWidth(width + 100 / 3)
    }

    const circles = document.querySelectorAll('.circle')

    circles.forEach((circle, index) => {
        if (index <= progress) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
    return (
        <div className="Day2">
            <div className="progress">
                <div className="progress__content">
                    <div className="bar" style={{ width: `${width}%` }}></div>
                    <div className="circle active">1</div>
                    <div className="circle">2</div>
                    <div className="circle">3</div>
                    <div className="circle">4</div>
                </div>
                <div className="btns">
                    <button className="btn prev" onClick={handlePrev} disabled={progress == 0 ? true : false}>
                        Prev
                    </button>
                    <button className="btn next" onClick={handleNext} disabled={progress == 3 ? true : false}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Day2
