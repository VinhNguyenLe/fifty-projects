import { useState, useEffect, useContext } from 'react'
import './Day-1.scss'

const images = [
    {
        id: 1,
        name: 'Explore The World',
        link: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
    {
        id: 2,
        name: 'Wild Forest',
        link: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
    {
        id: 3,
        name: 'Sunny Beach',
        link: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
    },
    {
        id: 4,
        name: 'City on Winter',
        link: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    },
    {
        id: 5,
        name: 'Mountains - Clouds',
        link: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
]

function Day1({ docTitle, depCom }) {
    useEffect(() => {
        document.title = `${docTitle}`
        return () => {
            document.title = `50 Projects In 50 Days Challenge`
        }
    }, [docTitle])

    const [active, setActive] = useState(images[0].id)

    const handleClick = (index) => {
        setActive(index + 1)
    }
    return (
        <div className="Day1">
            <div className="Day1__wrap">
                {images.map((images, index) => (
                    <div
                        key={index}
                        style={{ backgroundImage: `url(${images.link})` }}
                        className={`card ${active == images.id ? 'active' : ''}`}
                        onClick={() => handleClick(index)}
                    >
                        <h3>{images.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Day1
