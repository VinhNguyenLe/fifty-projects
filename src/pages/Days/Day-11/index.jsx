import { useEffect, useState } from 'react'

import './Day-11.scss'

function Day11({ docTitle, depCom }) {
    useEffect(() => {
        document.title = `${docTitle}`
        return () => {
            document.title = `50 Projects In 50 Days Challenge`
        }
    }, [depCom])
    return <div className="Day11"></div>
}

export default Day11
