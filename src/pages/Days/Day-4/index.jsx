import { useState } from 'react'
import useDocumentTitle2 from '../../../useDocumentTitle2'
import './Day-4.scss'

function Day4({ docTitle, depCom }) {
    useDocumentTitle2(docTitle, depCom)

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
