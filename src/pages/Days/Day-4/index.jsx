import { useState, useEffect, useContext } from 'react'
import { TitleContext } from '../../../App'
import { projectRoutes as project } from '../../../router'

import './Day-4.scss'

function Day4() {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    const titleDoc = useContext(TitleContext)

    useEffect(() => {
        document.title = `${project[3].day} - ${project[3].name}`
        return () => {
            document.title = titleDoc
        }
    }, [])

    return (
        <div className="Day4">
            <div className={`search ${click && 'active'}`}>
                <input type="text" className="search__input" placeholder="Search..." />
                <button className="search__btn" onClick={handleClick}>
                    <i className="fas fa-search" />
                </button>
            </div>
        </div>
    )
}

export default Day4
