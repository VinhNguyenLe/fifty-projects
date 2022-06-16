import { useState } from 'react'
import './Day-4.scss'

function Day4() {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }
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
