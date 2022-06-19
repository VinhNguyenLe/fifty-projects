import { useEffect } from 'react'

import './Day-6.scss'

function Day6({ docTitle, depCom }) {
    useEffect(() => {
        document.title = `${docTitle}`
        return () => {
            document.title = `50 Projects In 50 Days Challenge`
        }
    }, [depCom])

    const boxCount = 10

    const arrBox = []
    for (let i = 0; i < boxCount; i++) {
        arrBox.push(`Content ${i + 1}`)
    }

    const showBox = [0, 1, 2]

    useEffect(() => {
        const boxes = document.querySelectorAll('.box')

        const handleScroll = () => {
            boxes.forEach((box, index) => {
                if (index > 2) {
                    if (box.getBoundingClientRect().top < window.innerHeight - box.offsetHeight) {
                        box.classList.add('show')
                    } else {
                        box.classList.remove('show')
                    }
                }
            })
        }

        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="Day6">
            <h1>Scroll to see the animation</h1>
            <div className="boxes">
                {arrBox.map((item, index) => (
                    <div key={index} className={`box ${showBox.includes(index) ? 'show' : ''}`}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Day6
